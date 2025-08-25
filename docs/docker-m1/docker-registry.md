---
id: docker-registry
title: Docker Registry
sidebar_position: 80
---

# Docker Registry

A registry stores and distributes Docker images.

---

## Public Registry

- **Docker Hub** (default).  
- Other cloud registries (AWS ECR, GCP Artifact Registry, Azure ACR).  

```bash
docker pull nginx
```

---

## Private Registry

Run your own:

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

Push image:

```bash
docker tag myapp localhost:5000/myapp
docker push localhost:5000/myapp
```

---

## Authentication

```bash
docker login
```

- Required for private repositories.  

---

## Questions & Answers

**Q1. Why run a private registry?**  
For security and speed (host images inside company).  

**Q2. Can I make Docker Hub repos private?**  
Yes, with Docker Hub Pro/Team plans.  

---
