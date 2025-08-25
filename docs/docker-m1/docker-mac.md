---
id: docker-mac
title: Docker on Mac
sidebar_position: 83
---

# Docker on Mac

Docker on macOS also has two options.

---

## 1. Docker Toolbox (Legacy)

- Uses **VirtualBox + Linux VM**.  
- Outdated, only for old macOS.  

---

## 2. Docker Desktop for Mac

- Uses **HyperKit** virtualization.  
- Supported on modern macOS.  
- Provides seamless CLI + GUI integration.  

---

## Important Note

- macOS does **not** have native Docker kernel support.  
- Docker Desktop always runs Linux VM under the hood.  

---

## Questions & Answers

**Q1. Are there Mac-based images?**  
No, Docker images are Linux or Windows only.  

**Q2. What does HyperKit do?**  
It’s Apple’s lightweight hypervisor to run Linux VM efficiently.  

---
