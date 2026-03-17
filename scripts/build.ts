import { rm } from "node:fs/promises";
import type { BuildConfig, BunPlugin } from "bun";

const clean = async () => {
	console.log("🧹 Cleaning previous build...");
	await rm("./dist", { recursive: true, force: true });
};

const stubOptionalDeps: BunPlugin = {
	name: "stub-optional-deps",
	setup(build) {
		build.onResolve({ filter: /^(eris|discord-rose|discord\.js-selfbot-v13)$/ }, (args) => ({
			path: args.path,
			namespace: "stub-module",
		}));
		build.onLoad({ filter: /.*/, namespace: "stub-module" }, () => ({
			contents: "module.exports = {};",
			loader: "js",
		}));
	},
};

const main = async () => {
	console.time("✅ Build complete");

	try {
		await clean();

		// Find all .ts files (except type definitions and tests)
		console.log("🔍 Scanning source files...");
		const glob = new Bun.Glob("**/*.ts");
		const entrypoints = Array.from(glob.scanSync({ cwd: "./src" }))
			.filter((file) => !file.endsWith(".d.ts") && !file.endsWith(".test.ts"))
			.map((file) => `./src/${file}`);

		console.log(`🔨 Transpiling ${entrypoints.length} files...`);

		/**
		 * Build configuration
		 */
		const buildConfig: BuildConfig = {
			entrypoints: entrypoints,
			outdir: "./dist",
			root: "./src",
			minify: true,
			target: "bun",
			sourcemap: false,
			external: ["./locales/*", "@electric-sql/pglite"],
			splitting: true,
			naming: { chunk: "chunks/[hash].[ext]" },
			plugins: [stubOptionalDeps],
			define: {
				"process.env.NODE_ENV": JSON.stringify("production"),
				"process.env.build_date": JSON.stringify(new Date().toISOString()),
			},
		};

		const result = await Bun.build(buildConfig);

		if (!result.success) {
			console.error(result.logs.map((log) => log.message).join("\n"));
			throw new Error(result.logs.map((log) => log.message).join("\n"));
		}
		console.log(`✅ Build successful! Generated ${result.outputs.length} files in ./dist`);
	} catch (err) {
		console.error(`❌ Build failed: ${err}`);
		process.exit(1);
	} finally {
		console.timeEnd("✅ Build complete");
	}
};

main();
