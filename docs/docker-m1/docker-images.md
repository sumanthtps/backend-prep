---
id: docker-images
title: Docker Images
sidebar_position: 75
---

# Docker Images

Docker images are the **blueprints** used to create containers.

---

## What is a Docker Image?

- A **read-only template** containing application code, libraries, dependencies, and configuration.  
- Containers are **running instances** of images.  

Think of:
- **Image** = Class (definition).  
- **Container** = Object (instance).  

---

## Building an Image with Dockerfile

A Dockerfile is a text file with instructions.

**Example:**

```dockerfile
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y python3
COPY . /app
WORKDIR /app
ENTRYPOINT ["python3", "app.py"]
```

Build:

```bash
docker build -t myapp:1.0 .
```

Run:

```bash
docker run myapp:1.0
```

---

## Layers in Images

- Each line in a Dockerfile = one **layer**.  
- Layers are cached and reused.  
- Speeds up rebuilds.  

```bash
docker history myapp:1.0
```

---

## Publishing Images

- Push to **Docker Hub** or a private registry.  

```bash
docker push my-dockerhub-user/myapp:1.0
```

---

## Questions & Answers

**Q1. Why do images use layers?**  
To optimize rebuilds and save disk space.  

**Q2. How do you share an image with others?**  
Push it to Docker Hub or any registry.  

---
