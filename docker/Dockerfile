# Builder stage
FROM oven/bun:alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY . .

RUN bun run build

RUN mkdir -p /app/lavamusic-pgdata && chown -R bun:bun /app/lavamusic-pgdata

FROM oven/bun:alpine AS deps

WORKDIR /app

COPY docker/package.json ./package.json

RUN bun install --frozen-lockfile &&\
  # Cleanup
  bunx clean-modules "**/*.d.ts" "**/@types/**" "**/*.map" "**/test/**" "**/tests/**" -y &&\
  rm -rf ~/.bun /tmp /var/cache/apk /lib/apk/db\
  /app/node_modules/@esbuild* /app/node_modules/.bin/esbuild /app/node_modules/@libsql/linux-arm64-musl

# Runtime stage
FROM oven/bun:alpine AS runtime

WORKDIR /app

COPY --from=builder --chown=bun:bun /app/lavamusic-pgdata ./lavamusic-pgdata
COPY --from=builder --chown=bun:bun /app/dist ./dist
COPY --from=builder --chown=bun:bun /app/locales ./locales
COPY --from=builder --chown=bun:bun /app/drizzle ./drizzle
COPY --from=builder --chown=bun:bun /app/drizzle.config.ts /app/drizzle.config.sqlite.ts ./
COPY --from=builder --chown=bun:bun /app/src/env.ts ./src/env.ts
COPY --from=builder --chown=bun:bun /app/src/database/schemas.ts /app/src/database/schemas.sqlite.ts ./src/database/
COPY --from=builder --chown=bun:bun /app/docker/package.json ./package.json
COPY --from=deps --chown=bun:bun /app/node_modules ./node_modules

COPY --from=builder --chown=bun:bun /app/entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

RUN apk add --no-cache su-exec &&\
  bunx clean-modules "**/*.d.ts" "**/@types/**" "**/*.map" "**/test/**" "**/tests/**" -y &&\
  rm -rf ~/.bun /tmp /var/cache/apk /lib/apk/db

RUN mkdir -p /app/lavamusic-pgdata && chown -R bun:bun /app/lavamusic-pgdata

ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD ["bun", "run", "start"]

# Metadata labels
LABEL \
  maintainer="appujet <sdipedit@gmail.com>" \
  org.opencontainers.image.title="LavaMusic" \
  org.opencontainers.image.description="LavaMusic - Advanced Music Bot" \
  org.opencontainers.image.source="https://github.com/bongodevs/lavamusic" \
  org.opencontainers.image.licenses="MIT"
