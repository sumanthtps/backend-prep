---
id: docker-windows
title: Docker on Windows
sidebar_position: 82
---

# Docker on Windows

Running Docker on Windows has two main approaches.

---

## 1. Docker Toolbox (Legacy)

- Uses **VirtualBox + Linux VM**.  
- Suitable for older Windows (7, 8).  
- Cannot run Windows containers.  

---

## 2. Docker Desktop for Windows

- Uses **Hyper-V** virtualization.  
- Supported on Windows 10 Pro/Enterprise, Windows Server 2016+.  
- Can run both **Linux containers (via VM)** and **Windows containers**.  

---

## Windows Containers

Two types:
1. **Windows Server Containers** – Share kernel.  
2. **Hyper-V Containers** – Each container in lightweight VM.  

---

## Base Images

- **Nano Server** (lightweight).  
- **Server Core** (fuller, larger).  

---

## Questions & Answers

**Q1. Can Windows run Linux containers?**  
Yes, but via a Linux VM in the background.  

**Q2. Can Windows containers run on Linux?**  
No, kernel types must match.  

---
