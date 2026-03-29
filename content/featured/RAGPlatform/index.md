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

Production AI backend with a full async document ingestion pipeline: upload → text extraction → chunking → embedding → Qdrant upsert via Celery background tasks, with real-time token-streaming RAG chat responses. Dual LLM support (OpenAI and Anthropic) with semantic search over Qdrant, JWT OAuth2 authentication, Redis caching, and Pydantic v2 validation throughout. CI/CD pipeline via GitHub Actions: runs pytest, builds and pushes Docker image to GHCR, then deploys via SSH with zero-downtime docker compose rollout and automatic Alembic migrations.
