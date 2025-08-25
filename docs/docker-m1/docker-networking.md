---
id: docker-networking
title: Networking in Docker
sidebar_position: 77
---

# Networking in Docker

Containers need to communicate with each other and the outside world.

---

## Default Networks

- **bridge** (default) – Containers get internal IPs (172.x.x.x).  
- **host** – Shares host’s network stack.  
- **none** – No networking.  

```bash
docker network ls
```

---

## Custom Networks

```bash
docker network create --driver bridge mynet
docker run -d --network=mynet --name=db mysql
docker run -d --network=mynet --name=app myapp
```

- Containers resolve each other by **name**.  

---

## Port Mapping

```bash
docker run -p 8080:80 nginx
```

- Maps port 80 in container → port 8080 on host.  

---

## Advanced: DNS & Isolation

- Docker has built-in **DNS server** at `127.0.0.11`.  
- Containers in same network resolve by name.  
- For isolation, create multiple networks.  

---

## Questions & Answers

**Q1. Why use a custom network?**  
For service discovery (name-based resolution) and better isolation.  

**Q2. Can I run two containers on same port?**  
Yes, but map them to different host ports.  

---
