---
date: '3'
title: 'reviewflow'
cover: './demo.png'
github: 'https://github.com/emmeongoingammuaroi/reviewflow'
external: ''
tech:
  - Python
  - LangGraph
  - FastAPI
  - OpenAI
  - Qdrant
  - PostgreSQL
  - MCP
  - Docker
---

Built a 6-node LangGraph StateGraph (fetch_diff → retrieve_standards → review_code → format_response → human_review → log_eval) with PostgreSQL checkpointing and interrupt/resume human-in-the-loop cycle. Architected a load-bearing MCP server with dual transports (SSE for the LangGraph agent, stdio for Claude Desktop) as the exclusive data access path for agent nodes. RAG pipeline embeds domain coding standards into Qdrant and retrieves semantically relevant documents at review time to ground GPT-4o structured feedback. Eval framework persists prompt/response pairs, per-node latency, and LLM scores to PostgreSQL for model quality tracking over time.
