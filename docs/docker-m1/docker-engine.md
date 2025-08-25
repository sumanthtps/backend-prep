---
id: docker-engine
title: Docker Engine Architecture
sidebar_position: 81
---

# Docker Engine Architecture

Docker Engine is the runtime that runs and manages containers.

---

## Components

- **Docker Daemon (`dockerd`)** → Background service.  
- **REST API** → Communication layer.  
- **Docker CLI** → Command line interface.  

---

## How Containers Work

- **Namespaces** → Isolate processes (PID, NET, MNT).  
- **cgroups** → Control resources (CPU, memory).  
- **Union File System** → Layered images.  

---

## Remote Access

Run Docker CLI on laptop, connect to remote host:

```bash
docker -H 192.168.1.10:2375 ps
```

---

## Questions & Answers

**Q1. What provides isolation in Docker?**  
Linux namespaces.  

**Q2. How do you limit CPU usage for a container?**  
```bash
docker run --cpus=".5" nginx
```  

---
