# Sistema CRUD Full-Stack - Cadastro de Pessoas

Um projeto completo de CRUD (Create, Read, Update, Delete) com arquitetura cliente-servidor, demonstrando boas práticas de desenvolvimento full-stack com React, Node.js/Express, MySQL e Sequelize ORM.

---

## Arquitetura do Projeto

```
project-root/
├── client/                    # Frontend React
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── PersonForm.jsx
│   │   ├── pages/
│   │   │   └── People.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                    # Backend Node.js + Express
│   ├── controllers/
│   │   └── peopleController.js
│   ├── models/
│   │   └── personModel.js
│   ├── routes/
│   │   └── peopleRoutes.js
│   ├── utils/
│   │   └── db.js
│   ├── config/
│   │   └── config.cjs
│   ├── migrations/
│   │   └── 20251223153642-create-people.cjs
│   ├── index.js
│   └── package.json
│
├── database/
│   └── schema.sql             # Schema SQL alternativo
│
├── .gitignore
├── README.md
└── package.json               # Scripts auxiliares raiz
```

---

## Tecnologias Utilizadas

### Frontend
- **React 18.2** - Biblioteca UI moderna
- **Axios 1.6** - Cliente HTTP para requisições
- **CSS3** - Estilização customizada e responsiva

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4.18** - Framework web minimalista
- **Sequelize 6.37** - ORM para MySQL
- **MySQL2 3.16** - Driver MySQL com Promises
- **CORS** - Controle de origem cruzada
- **dotenv** - Gerenciamento de variáveis de ambiente

### Banco de Dados
- **MySQL 5.7+** - Banco de dados relacional

---

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js v14 ou superior
- npm ou yarn
- MySQL v5.7 ou superior

---

## Guia de Instalação e Execução

### Clone o Repositório

```bash
git clone https://github.com/diegotamiozzo/react-node-mysql.git
cd project-root
```

### Configuração do Banco de Dados

#### Opção A: Via Sequelize (Recomendado)

```bash
# Entre no diretório do servidor
cd server

# Configure as variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com suas credenciais MySQL:
# DB_HOST=
# DB_USERNAME=
# DB_PASSWORD=
# DB_DATABASE=
# DB_PORT=
# PORT=8080

# Execute as migrations do Sequelize
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### Instalação de Dependências

#### Instalar tudo de uma vez (raiz do projeto):
```bash
npm run install-all
```

#### Ou instalar separadamente:

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### Executar a Aplicação

#### Terminal 1 - Backend:
```bash
cd server
npm start          # Produção
# ou
npm run dev        # Desenvolvimento (auto-reload com --watch)
```

O backend estará rodando em: **http://localhost:8080**

#### Terminal 2 - Frontend:
```bash
cd client
npm start
```

O frontend abrirá automaticamente em: **http://localhost:3000**

---

## Endpoints da API

### Base URL
```
http://localhost:8080/api
```

### GET /people
Lista todas as pessoas cadastradas.

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999",
    "createdAt": "2025-12-23T15:30:00.000Z",
    "updatedAt": "2025-12-23T15:30:00.000Z"
  }
]
```

### GET /people/:id
Retorna uma pessoa específica.

**CURL:**
```bash
curl http://localhost:8080/api/people/1
```

### POST /people
Cria uma nova pessoa.

**Body (JSON):**
```json
{
  "name": "Maria Santos",
  "email": "maria@email.com",
  "phone": "(21) 98888-8888"
}
```

**CURL:**
```bash
curl -X POST http://localhost:8080/api/people \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@email.com",
    "phone": "(21) 98888-8888"
  }'
```

**Resposta (201 Created):**
```json
{
  "id": 2,
  "name": "Maria Santos",
  "email": "maria@email.com",
  "phone": "(21) 98888-8888"
}
```

### PUT /people/:id
Atualiza dados de uma pessoa.

**cURL:**
```bash
curl -X PUT http://localhost:8080/api/people/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos Updated",
    "email": "maria.updated@email.com",
    "phone": "(21) 97777-7777"
  }'
```

### DELETE /people/:id
Remove uma pessoa.

**cURL:**
```bash
curl -X DELETE http://localhost:8080/api/people/1
```

**Resposta (200 OK):**
```json
{
  "message": "Person deleted successfully"
}
```

---

## Funcionalidades Principais

### Frontend
- Formulário de cadastro com validação em tempo real
- Lista de pessoas em tabela responsiva
- Edição inline de registros
- Exclusão com confirmação modal
- Mensagens de feedback (sucesso/erro)
- Interface responsiva (mobile-first)
- Estados de carregamento e erro

### Backend
- API REST completa (CRUD)
- Padrão MVC com Sequelize ORM
- Validações de dados no controller
- Tratamento global de erros
- CORS configurado
- Pool de conexões gerenciado pelo Sequelize
- Migrations para versionamento do schema
- Timestamps automáticos (createdAt/updatedAt)

---

## Segurança Implementada

- Variáveis sensíveis em .env (não commitadas)
- Validação no backend e frontend
- Tratamento de erros sem exposição de dados sensíveis
- CORS configurado adequadamente
- Sequelize protege contra SQL injection automaticamente
- Email único com constraint no banco de dados

---

## Estrutura do Banco de Dados

### Tabela: people

| Coluna      | Tipo           | Descrição                                |
|-------------|----------------|------------------------------------------|
| id          | INT            | Identificador único (PK, AUTO_INCREMENT) |
| name        | VARCHAR(150)   | Nome completo da pessoa                  |
| email       | VARCHAR(150)   | Email único (UNIQUE constraint)          |
| phone       | VARCHAR(20)    | Telefone (opcional)                      |
| createdAt   | TIMESTAMP      | Data de criação automática               |
| updatedAt   | TIMESTAMP      | Data de atualização automática           |

**Índices:**
- PRIMARY KEY em id
- UNIQUE em email
- INDEX idx_email para buscas rápidas por email
- INDEX idx_name para buscas rápidas por nome


### Erro do Sequelize: "SequelizeConnectionError"
**Soluções:**
- Verifique se as variáveis DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST estão corretas no .env
- Certifique-se que o usuário MySQL tem permissões adequadas


**Desenvolvido por Diego Tamiozzo**