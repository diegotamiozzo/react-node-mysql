# Backend - People CRUD API

API REST desenvolvida com Node.js + Express para gerenciar cadastro de pessoas.

## Estrutura do Projeto

```
server/
├── controllers/
│   └── peopleController.js    # Lógica dos endpoints
├── models/
│   └── personModel.js         # Operações do banco de dados
├── routes/
│   └── peopleRoutes.js        # Definição das rotas
├── utils/
│   └── db.js                  # Configuração do banco
├── index.js                   # Arquivo principal
└── package.json
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure o arquivo `.env` na raiz do projeto (copie de `.env.example`):
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=people_db
PORT=8080
```

## Configuração do Banco de Dados

1. Certifique-se que MySQL está rodando
2. Execute o script SQL:
```bash
mysql -u root -p < ../database/schema.sql
```

3. Ou execute manualmente no MySQL:
```sql
CREATE DATABASE people_db;
USE people_db;

CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Rodando a API

```bash
npm start
```

Ou em modo desenvolvimento com auto-reload:
```bash
npm run dev
```

A API estará disponível em `http://localhost:8080`

## Endpoints da API

### GET /api/people
Lista todas as pessoas cadastradas.

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "phone": "(11) 99999-9999",
    "email": "joao@email.com",
    "created_at": "2025-01-15T10:30:00.000Z"
  }
]
```

### GET /api/people/:id
Retorna dados de uma pessoa específica.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "João Silva",
  "phone": "(11) 99999-9999",
  "email": "joao@email.com",
  "created_at": "2025-01-15T10:30:00.000Z"
}
```

**Resposta (404 Not Found):**
```json
{ "error": "Person not found" }
```

### POST /api/people
Cria uma nova pessoa.

**Body (JSON):**
```json
{
  "name": "João Silva",
  "phone": "(11) 99999-9999",
  "email": "joao@email.com"
}
```

**Resposta (201 Created):**
```json
{
  "id": 1,
  "name": "João Silva",
  "phone": "(11) 99999-9999",
  "email": "joao@email.com"
}
```

### PUT /api/people/:id
Atualiza os dados de uma pessoa.

**Body (JSON):**
```json
{
  "name": "João Silva Atualizado",
  "phone": "(11) 98888-8888",
  "email": "joao.novo@email.com"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "João Silva Atualizado",
  "phone": "(11) 98888-8888",
  "email": "joao.novo@email.com"
}
```

### DELETE /api/people/:id
Remove uma pessoa do banco de dados.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "message": "Person deleted successfully"
}
```

## Validações

- **name** e **email** são obrigatórios
- **phone** é opcional
- Emails devem ser únicos (recomendação: adicionar validação)

## Tratamento de Erros

Todos os endpoints retornam mensagens de erro claras:

```json
{ "error": "Name and email are required" }
```

## CORS

O backend está configurado para aceitar requisições de qualquer origem. Ajuste conforme necessário em `index.js`.
