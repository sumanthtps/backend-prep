---
id: docker-cmd-entrypoint
title: CMD vs ENTRYPOINT
sidebar_position: 76
---

# CMD vs ENTRYPOINT in Docker

Both define what happens when a container starts.  

---

## CMD

- Provides **default command/arguments**.  
- Can be overridden at runtime.  

```dockerfile
CMD ["nginx", "-g", "daemon off;"]
```

Run container with override:

```bash
docker run nginx echo "Hello"
```

---

## ENTRYPOINT

- Defines a **fixed executable**.  
- Runtime arguments are appended.  

```dockerfile
ENTRYPOINT ["sleep"]
CMD ["5"]
```

- Default → `sleep 5`.  
- Override → `docker run myimage 10` → `sleep 10`.  

---

## Combined

- Use **ENTRYPOINT** for program.  
- Use **CMD** for default arguments.  

---

## Questions & Answers

**Q1. Which should I use?**  
- ENTRYPOINT if container is tied to a specific program.  
- CMD if you want flexible defaults.  

**Q2. How to override ENTRYPOINT?**  
```bash
docker run --entrypoint echo myimage hi
```

---
