# 📋 Sistema CRUD Full-Stack - Cadastro de Pessoas

Um projeto completo de CRUD (Create, Read, Update, Delete) com arquitetura cliente-servidor, demonstrando boas práticas de desenvolvimento full-stack.

## 🏗️ Arquitetura do Projeto

```
project-root/
├── client/                    # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── PersonForm.js
│   │   ├── pages/
│   │   │   └── People.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
│
├── server/                    # Backend Express + Node.js
│   ├── controllers/
│   │   └── peopleController.js
│   ├── models/
│   │   └── personModel.js
│   ├── routes/
│   │   └── peopleRoutes.js
│   ├── utils/
│   │   └── db.js
│   ├── index.js
│   ├── package.json
│   └── README.md
│
├── database/
│   └── schema.sql
│
├── .env.example
├── README.md (este arquivo)
└── package.json
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.2** - Biblioteca UI moderna
- **Axios** - Cliente HTTP para requisições
- **CSS3** - Estilização customizada

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4.18** - Framework web
- **MySQL2/Promise** - Conector MySQL assíncrono
- **CORS** - Controle de origem cruzada
- **dotenv** - Gerencimento de variáveis de ambiente

### Banco de Dados
- **MySQL** - Banco de dados relacional

## 📋 Pré-requisitos

Certifique-se de ter instalados:

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**
- **MySQL** (v5.7 ou superior)

## 🚀 Guia de Instalação e Execução

### 1️⃣ Configuração do Banco de Dados

```bash
# Abra o terminal do MySQL
mysql -u root -p

# Execute o script SQL
source /caminho/para/database/schema.sql
```

Ou copie e execute manualmente:

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

CREATE INDEX idx_email ON people(email);
CREATE INDEX idx_name ON people(name);
```

### 2️⃣ Configuração do Backend

```bash
# Navegue para a pasta server
cd server

# Instale as dependências
npm install

# Copie o arquivo .env.example para .env
# No Windows:
copy ..\\.env.example .env

# No macOS/Linux:
cp ../.env.example .env

# Edite o arquivo .env com suas credenciais MySQL
# DB_HOST=localhost
# DB_USER=seu_usuario
# DB_PASSWORD=sua_senha
# DB_NAME=people_db
# PORT=8080
```

**Inicie o servidor:**

```bash
# Produção
npm start

# Desenvolvimento (com auto-reload)
npm run dev
```

O backend estará rodando em: `http://localhost:8080`

### 3️⃣ Configuração do Frontend

```bash
# Navegue para a pasta client
cd client

# Instale as dependências
npm install

# Copie as variáveis de ambiente
# No Windows:
copy ..\\.env.example .env.local

# No macOS/Linux:
cp ../.env.example .env.local

# Ou crie um .env.local com:
# REACT_APP_API_URL=http://localhost:8080/api
```

**Inicie a aplicação React:**

```bash
npm start
```

A aplicação abrirá automaticamente em: `http://localhost:3000`

## 📡 Endpoints da API

### GET /api/people
Lista todas as pessoas cadastradas.

**cURL:**
```bash
curl http://localhost:8080/api/people
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "phone": "(11) 99999-9999",
    "email": "joao@email.com",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### GET /api/people/:id
Retorna uma pessoa específica.

**cURL:**
```bash
curl http://localhost:8080/api/people/1
```

### POST /api/people
Cria uma nova pessoa.

**cURL:**
```bash
curl -X POST http://localhost:8080/api/people \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@email.com",
    "phone": "(21) 98888-8888"
  }'
```

### PUT /api/people/:id
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

### DELETE /api/people/:id
Remove uma pessoa.

**cURL:**
```bash
curl -X DELETE http://localhost:8080/api/people/1
```

## ✨ Funcionalidades Principais

### Frontend
- ✅ Formulário de cadastro com validação
- ✅ Lista de pessoas em tabela
- ✅ Edição de registros
- ✅ Exclusão de registros com confirmação
- ✅ Mensagens de feedback (sucesso/erro)
- ✅ Interface responsiva
- ✅ Estados de carregamento

### Backend
- ✅ API REST completa
- ✅ Padrão MVC
- ✅ Tratamento de erros
- ✅ Validação de dados
- ✅ CORS configurado
- ✅ Pool de conexões MySQL
- ✅ Async/await com async/await

## 🔐 Segurança

- Variáveis sensíveis em `.env` (não commitado)
- Validação no backend e frontend
- Tratamento de erros sem exposição de dados
- CORS configurado
- Prepared statements para prevenir SQL injection

## 📊 Estrutura do Banco de Dados

### Tabela: people

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | INT | Identificador único (PK, AUTO_INCREMENT) |
| name | VARCHAR(100) | Nome completo da pessoa |
| phone | VARCHAR(20) | Telefone (opcional) |
| email | VARCHAR(100) | Email único |
| created_at | TIMESTAMP | Data de criação automática |

**Índices:**
- `idx_email` - Para buscas por email
- `idx_name` - Para buscas por nome

## 🧪 Teste Rápido

### Backend

```bash
# Verifique se o API está rodando
curl http://localhost:8080/api/health
```

Resposta esperada:
```json
{ "status": "API is running" }
```

### Frontend

Acesse `http://localhost:3000` no navegador.

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"
- Verifique se MySQL está rodando
- Confirme credenciais no `.env`
- Verifique se o banco `people_db` foi criado

### Erro: "CORS error"
- Certifique-se que o backend está rodando
- Verifique o URL da API no `.env` do frontend

### Frontend não conecta ao backend
- Verifique se `REACT_APP_API_URL` está correto
- Confirme que a porta 8080 está disponível
- Reinicie o servidor backend

### Porta 3000/8080 já em uso
```bash
# Encontre o processo
lsof -i :3000   # ou :8080

# Mate o processo (Linux/Mac)
kill -9 <PID>

# Ou use portas diferentes
PORT=8081 npm start   # Backend
PORT=3001 npm start   # Frontend
```

## 📚 Estrutura de Código

### Padrão MVC (Backend)

**Models** - Operações de banco:
```javascript
// personModel.js
export const getAllPeople = async () => { ... }
export const createPerson = async (name, phone, email) => { ... }
```

**Controllers** - Lógica de negócio:
```javascript
// peopleController.js
export const getAllPeople = async (req, res) => { ... }
```

**Routes** - Definição de rotas:
```javascript
// peopleRoutes.js
router.get('/people', PeopleController.getAllPeople);
```

### Componentes React

**PersonForm** - Formulário reutilizável com validação
**People** - Página principal com CRUD completo

## 🚀 Próximas Melhorias

- [ ] Autenticação e autorização
- [ ] Paginação na lista
- [ ] Busca e filtro
- [ ] Ordenação de colunas
- [ ] Validação de email único
- [ ] Testes unitários e E2E
- [ ] CI/CD pipeline
- [ ] Docker setup
- [ ] Documentação Swagger
- [ ] Cache com Redis

## 📄 Documentação Adicional

- [README do Backend](./server/README.md)
- [README do Frontend](./client/README.md)
- [Script SQL](./database/schema.sql)

## 📝 Licença

MIT License - Sinta-se livre para usar e modificar!

## 👨‍💻 Estrutura de Desenvolvimento

### Commits Sugeridos

```bash
git add .
git commit -m "feat: Setup database schema"
git commit -m "feat: Create Express API with CRUD endpoints"
git commit -m "feat: Build React frontend with forms and table"
git commit -m "docs: Add comprehensive documentation"
```

### Padrão de Código

- Nomes de variáveis descritivos
- Funções pequenas e focadas
- Tratamento de erros em todos os endpoints
- Comentários em lógicas complexas

## 🎓 Aprendizados

Este projeto demonstra:
- Arquitetura cliente-servidor
- Padrão MVC
- Operações CRUD completas
- Comunicação HTTP via APIs REST
- Validação de dados
- Tratamento de erros
- Design responsivo
- Boas práticas de JavaScript

---

**Pronto para rodar! Boa sorte!** 🚀
