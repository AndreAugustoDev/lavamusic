## 🐳 Docker Lovers' Shortcut (One-Click Setup!)

Prefer containers? We've got you! Docker automatically handles database setup and keeps your environment clean.

1. 📥 Install [Docker](https://docs.docker.com/get-started/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install) if you haven't.  

2. ⚙️ Copy configs:
   ```bash
   cp .env.example .env
   cp Lavalink/example.application.yml Lavalink/application.yml
   ```

3. 🔧 Set up your `.env` file (Docker will use PostgreSQL by default).

4. 🚀 Launch everything:
```bash
docker compose up -d
```

🎉 Boom! Bot, Lavalink, and PostgreSQL database—all running automatically with no extra setup needed!

### ⬆️ Want to update later?
```bash
docker compose pull
docker compose up -d --force-recreate
```

> [!NOTE]
If you prefer SQLite with Docker, set `DATABASE_URL="file:./lavamusic.db"` in your `.env` and run the database setup command manually before starting Docker.