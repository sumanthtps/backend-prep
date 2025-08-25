---
id: docker-installation
title: Installing Docker
sidebar_position: 73
---

# Installing Docker

Docker is available in two main editions:
- **Community Edition (CE):** Free and open-source.  
- **Enterprise Edition (EE):** Paid with enterprise support.  

---

## Installing on Linux

Quick installation script:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Verify installation:

```bash
docker version
```

Run a test container:

```bash
sudo docker run hello-world
```

---

## Installing on Mac and Windows

1. **Docker Desktop** – official GUI tool.  
2. **Docker Toolbox (legacy)** – only for older systems without virtualization support.  

---

## Cloud Options

Docker is also available pre-installed on:  
- AWS EC2 AMIs  
- Azure VM Marketplace images  
- GCP VM images  

---

## Questions & Answers

**Q1. What’s the difference between Docker Desktop and Docker Toolbox?**  
- Docker Desktop uses modern virtualization (Hyper-V on Windows, HyperKit on Mac).  
- Docker Toolbox is for older systems (VirtualBox-based).  

**Q2. Do I need Docker on my machine to take this course?**  
No, you can use cloud-hosted labs (like Play with Docker, Katacoda, or CodeCloud labs).  

---
