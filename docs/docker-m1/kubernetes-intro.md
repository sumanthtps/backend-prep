---
id: kubernetes-intro
title: Kubernetes Introduction
sidebar_position: 86
---

# Kubernetes Introduction

Kubernetes (K8s) is the most popular container orchestration system.

---

## Why Kubernetes?

- Run 1000s of containers reliably.  
- Scale automatically.  
- Rolling updates, rollbacks.  
- Portable across cloud providers.  

---

## Core Components

- **Master Node** → API Server, etcd, Scheduler, Controllers.  
- **Worker Node** → kubelet, container runtime (Docker).  

---

## CLI: kubectl

```bash
kubectl run myapp --image=nginx --replicas=3
kubectl get pods
kubectl get nodes
```

---

## Features

- Self-healing.  
- Horizontal scaling.  
- Service discovery & networking.  
- Pluggable storage.  

---

## Questions & Answers

**Q1. Does Kubernetes require Docker?**  
No, it can use other runtimes (containerd, CRI-O).  

**Q2. Why is Kubernetes so popular?**  
It standardizes orchestration, widely adopted across all clouds.  

---
