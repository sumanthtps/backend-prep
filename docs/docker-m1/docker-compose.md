---
id: docker-compose
title: Docker Compose
sidebar_position: 79
---

# Docker Compose

Docker Compose helps manage **multi-container applications**.

---

## Why Compose?

Instead of running multiple `docker run` commands, define everything in one YAML file.

---

## Example

**docker-compose.yml**

```yaml
version: "3"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

Run stack:

```bash
docker-compose up
```

---

## Features

- Define multiple services.  
- Manage networks and volumes.  
- Build images automatically.  
- Scale containers with one command.  

```bash
docker-compose up --scale web=3
```

---

## Questions & Answers

**Q1. What is the difference between Dockerfile and Compose?**  
- Dockerfile → How to build an image.  
- Compose → How to run containers together.  

**Q2. Is Compose production-ready?**  
It’s mainly for dev/test; for production use **Swarm** or **Kubernetes**.  

---
