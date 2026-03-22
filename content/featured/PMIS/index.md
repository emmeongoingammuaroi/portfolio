---
date: '1'
title: 'FlowMaster'
cover: './demo.png'
github: ''
external: 'https://youtu.be/C7ijIPnHug4'
tech:
  - Django
  - PostgreSQL
  - Nuxt.js
  - Celery
  - Redis
  - AWS
  - Docker
---

Multi-tenant construction management SaaS serving 1,000+ users across multiple organizations. Designed a tenant-isolated architecture using schema-based multi-tenancy in PostgreSQL, ensuring strict data separation and per-tenant scalability. Handled high-concurrency workflows by combining WebSocket-based real-time updates with Celery and Redis for distributed background processing. Implemented idempotent task execution and retry strategies to ensure reliability in long-running operations such as BIM/IFC processing and document workflows. Covers full project lifecycle — contracts, bidding, EVM-based progress tracking, drawing collaboration, 360° site reporting, and procurement.
