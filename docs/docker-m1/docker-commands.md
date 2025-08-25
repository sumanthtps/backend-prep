---
id: docker-commands
title: Core Docker Commands
sidebar_position: 74
---

# Core Docker Commands

Docker provides a CLI for interacting with images and containers.  
Here are the most commonly used commands.

---

## Running a Container

```bash
docker run nginx
```

- Starts an Nginx container.  
- Pulls the image from Docker Hub if not already available.  

---

## Listing Containers

```bash
docker ps        # Running containers
docker ps -a     # All containers (running + stopped)
```

---

## Stopping and Removing Containers

```bash
docker stop <container_id>
docker rm <container_id>
```

---

## Listing and Removing Images

```bash
docker images
docker rmi <image_id>
```

---

## Pulling Images

```bash
docker pull ubuntu
```

- Downloads the image without running it.  

---

## Executing Commands in a Running Container

```bash
docker exec -it <container_id> bash
```

- `-i` = interactive.  
- `-t` = allocate pseudo-terminal.  

---

## Logs

```bash
docker logs <container_id>
```

Shows the standard output of a container.

---

## Questions & Answers

**Q1. What happens when a container exits?**  
It stops but remains available (`docker ps -a` shows it). You can restart or remove it.  

**Q2. How do I run a container in background?**  
Use `-d` flag → `docker run -d nginx`.  

---
