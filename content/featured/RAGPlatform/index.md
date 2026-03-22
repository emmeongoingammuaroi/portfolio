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
  - Redis
  - Celery
  - Qdrant
  - OpenAI
  - Docker
---

AI backend platform implementing Retrieval-Augmented Generation with async FastAPI, JWT authentication, and distributed task processing. Documents are ingested in the background via Celery, chunked using a semantic splitting strategy, and embedded for vector storage in Qdrant with HNSW indexing for fast retrieval. Streaming responses are delivered via Server-Sent Events (SSE), enabling real-time token delivery from LLM APIs. Includes retry and fallback strategies for embedding and LLM calls, Redis-based caching for frequent queries, and structured logging for production observability.
