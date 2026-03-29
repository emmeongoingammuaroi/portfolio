---
date: '2'
title: 'RAG Platform'
cover: './demo.png'
github: 'https://github.com/emmeongoingammuaroi/rag-platform'
external: 'https://youtu.be/-CuiDeb7EsE'
tech:
  - FastAPI
  - PostgreSQL
  - SQLAlchemy
  - Qdrant
  - OpenAI
  - Anthropic
  - Redis
  - Celery
  - Docker
---

- **Async document ingestion pipeline:** upload → text extraction → chunking → embedding → Qdrant upsert via Celery background tasks
- **Real-time token-streaming RAG chat** with dual LLM support (OpenAI and Anthropic) and semantic search over Qdrant
- **JWT OAuth2 authentication**, Redis caching, and Pydantic v2 validation throughout
- **CI/CD via GitHub Actions:** pytest → Docker build → GHCR push → SSH deploy with zero-downtime rollout and automatic Alembic migrations
