# 13ª IPR Cidade Nova — Monorepo

```
/
├── nextjs-13ipr-site/   → Site público (Next.js 14)
├── studio-13ipr-site/   → Painel de conteúdo (Sanity Studio v3)
└── docker-compose.yml   → Orquestração local
```

---

## Pré-requisitos

- Docker + Docker Compose (v2+)
- Projeto criado em [sanity.io/manage](https://sanity.io/manage)

---

## 1. Configurar variáveis de ambiente

### Next.js
```bash
cp nextjs-13ipr-site/.env.local.example nextjs-13ipr-site/.env.local
```
Preencha com os dados do seu projeto Sanity:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu_token
REVALIDATION_SECRET=sua_chave
```

### Sanity Studio
```bash
cp studio-13ipr-site/.env.example studio-13ipr-site/.env
```
Preencha:
```env
SANITY_STUDIO_PROJECT_ID=seu_project_id
SANITY_STUDIO_DATASET=production
```

---

## 2. Subir o ambiente

```bash
# Na raiz do projeto
docker compose up
```

| Serviço | URL |
|---------|-----|
| Site (Next.js) | http://localhost:3000 |
| Studio (Sanity) | http://localhost:3333 |

---

## Outros comandos úteis

```bash
# Rebuild após alterar dependências
docker compose up --build

# Rodar em background
docker compose up -d

# Ver logs de um serviço específico
docker compose logs -f nextjs
docker compose logs -f studio

# Parar tudo
docker compose down

# Parar e limpar volumes (cache do Next.js)
docker compose down -v

# Rodar apenas o Next.js (sem o Studio)
docker compose up nextjs

# Rodar apenas o Studio
docker compose up studio
```

---

## Deploy

- **Next.js** → Vercel (conecte o repositório `nextjs-13ipr-site`)
- **Studio** → `cd studio-13ipr-site && npx sanity deploy`
  - O Studio ficará disponível em `https://13ipr.sanity.studio`
  - Gratuito, hospedado pelo próprio Sanity
