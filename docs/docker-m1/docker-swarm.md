---
id: docker-swarm
title: Docker Swarm
sidebar_position: 85
---

# Docker Swarm

Docker Swarm is Docker’s native clustering and orchestration tool.

---

## Creating a Swarm

```bash
docker swarm init
```

Join workers:

```bash
docker swarm join --token <token> <manager-ip>
```

---

## Deploying a Service

```bash
docker service create --replicas 3 -p 80:80 nginx
```

- Runs 3 instances of Nginx.  
- Auto-distributed across nodes.  

---

## Features

- Rolling updates.  
- Service discovery.  
- Built-in load balancing.  

---

## Questions & Answers

**Q1. Is Swarm still used today?**  
Yes, but Kubernetes has become more dominant.  

**Q2. Why use Swarm?**  
It’s simpler to learn, great for small clusters.  

---
