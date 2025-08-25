---
id: docker-storage
title: Docker Storage & Volumes
sidebar_position: 78
---

# Docker Storage & Volumes

Containers are **ephemeral** by default → data disappears when container is removed.

---

## Container Layers

- Image layers = **read-only**.  
- Container adds a **read-write layer**.  
- Deleted when container is removed.  

---

## Volumes

Persistent storage managed by Docker.

```bash
docker volume create mydata
docker run -v mydata:/var/lib/mysql mysql
```

---

## Bind Mounts

Use host directory directly.

```bash
docker run -v /host/data:/container/data myapp
```

---

## Types of Mounts

- **Volume mounts** → Managed by Docker (`/var/lib/docker/volumes`).  
- **Bind mounts** → Any host path.  

---

## Best Practices

- Use volumes for databases.  
- Use bind mounts for development (live code sync).  

---

## Questions & Answers

**Q1. What happens if container is deleted but volume exists?**  
Data persists in the volume.  

**Q2. Which is preferred in production?**  
Volumes, since they are portable and managed by Docker.  

---
