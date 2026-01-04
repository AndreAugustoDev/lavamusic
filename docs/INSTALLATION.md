# 🧭 Installation Guide

## 🚀 Getting Started: Easy as Pie! (Even if You're New to This)

Getting Lavamusic up and running is easy as pie, even if you are new to this! Follow these steps to get your bot grooving.

## 🛠️ Quick Prerequisites

Before we dive in, make sure you have these ready:
- **Bun** ([download here](https://bun.sh/))
  > According to the official website, Bun is a fast all-in-one JavaScript runtime.

  > [!IMPORTANT]
  This project relies on **Bun**, which is required to execute the automation scripts.  
  Please ensure it is installed to proceed.
- A **Lavalink server** (don't worry, we'll set it up!)
  - **Java 17+** (Required for Lavalink - [download here](https://adoptium.net/))
- Your **Discord bot token** from the [Discord Developer Portal](https://discord.com/developers/applications)

Got them? Great! Let's get Lavamusic grooving in no time.

## 📋 Step-by-Step Setup (We're Here to Help!)

### 1. Grab the Code
Open your terminal and run:
```bash
git clone https://github.com/botxlab/lavamusic.git
cd lavamusic
```

### 2. Install the Goodies
Pick your favorite package manager:
```bash
# Using bun (Recommended)
bun install

# If you use npm (classic choice):
npm install

# Or try pnpm (super fast):
pnpm install

# Yarn fan? No problem:
yarn install
```

### 3. Set Up Your Environment
Create your config file:
```bash
cp .env.example .env
```

Now, edit `.env` in your favorite text editor. See **[Configuration Guide](CONFIGURATION.md)** for detailed options.
```env
TOKEN="your_bot_token_here"
CLIENT_ID="your_bot_client_id"
OWNER_IDS=["your_discord_user_id"]
DATABASE_URL="file:./lavamusic.db"  # SQLite is fine for starters, or use PostgreSQL later
```

### 4. Get Lavalink Ready (Our Audio Engine)
Copy the example config:
```bash
cp Lavalink/example.application.yml Lavalink/application.yml
```

> [!TIP] Need extra music sources like YouTube or Spotify?
The config has instructions to add plugins!

Fire up Lavalink (we'll use a simple start command):
> [!IMPORTANT]
Requires Java 17 or higher

```bash
cd Lavalink
java -jar lavalink.jar  # Assuming you have the JAR ready
```

By default, it runs at `localhost:2333`. Easy peasy!

### 5. Set Up the Database (Required!)
> [!CAUTION] 🚨 IMPORTANT 🚨
**You MUST run this step before starting the bot, or it will crash!**

Choose your database type by setting `DATABASE_URL` in your `.env` file (see **[Configuration Guide](CONFIGURATION.md)**):

**For SQLite (recommended for beginners):**
```bash
bun run db:push:sqlite
```

**For PostgreSQL/PGLite (if DATABASE_URL is set to postgres://... or empty):**
```bash
bun run db:push
```

This creates all necessary database tables. Without this step, the bot will fail to start!

### 🐘 Switching to PostgreSQL / PGLite?  

If you update your `DATABASE_URL` in `.env` to use **Postgres** later, you must run the command below.  
This is necessary to generate the PostgreSQL-compatible schema and apply it to the new database.  
> [!WARNING]
Existing data in SQLite will not be automatically transferred to Postgres.

```bash
bun run db:push
```

### 6. Launch the Bot!
Build and run:
```bash
bun run build
bun run start
```

### 7. Welcome Lavamusic to Your Server
Click here to invite: **[🎉 Add to Server 🎉](https://mintone.tech/invite)**

Or craft the link manually:
> [!NOTE] Replace
> - `YOUR_CLIENT_ID` with your Bot Client ID  
> - `REDIRECT_URI` with your Bot Redirect URI  
```
https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=279209954560&response_type=code&redirect_uri=REDIRECT_URI&integration_type=0&scope=bot+guilds+applications.commands
```

### 8. Sync Commands (Optional Step)
In any server channel, type `!deploy` or `/deploy` to activate slash commands.