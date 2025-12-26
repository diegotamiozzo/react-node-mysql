# Sistema CRUD Full-Stack - Cadastro de Pessoas

Um projeto completo de CRUD (Create, Read, Update, Delete) com arquitetura cliente-servidor, demonstrando boas práticas de desenvolvimento full-stack com **React**, **Node.js/Express**, **MySQL** e **Sequelize ORM**.

---

## Arquitetura do Projeto

```
project-root/
├── client/                    # Frontend React
│   ├── public/
│   │   └── index.html
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

- **Node.js** v14 ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn**
- **MySQL** v5.7 ou superior ([Download](https://dev.mysql.com/downloads/))

---

## Guia de Instalação e Execução

### Clone o Repositório

```bash
git clone <seu-repositorio>
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

### **GET** `/people`
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

### **GET** `/people/:id`
Retorna uma pessoa específica.

**cURL:**
```bash
curl http://localhost:8080/api/people/1
```

### **POST** `/people`
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

### **PUT** `/people/:id`
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

### **DELETE** `/people/:id`
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
- ✅ Formulário de cadastro com validação em tempo real
- ✅ Lista de pessoas em tabela responsiva
- ✅ Edição inline de registros
- ✅ Exclusão com confirmação modal
- ✅ Mensagens de feedback (sucesso/erro)
- ✅ Interface responsiva (mobile-first)
- ✅ Estados de carregamento e erro

### Backend
- ✅ API REST completa (CRUD)
- ✅ Padrão MVC com Sequelize ORM
- ✅ Validações de dados no controller
- ✅ Tratamento global de erros
- ✅ CORS configurado
- ✅ Pool de conexões gerenciado pelo Sequelize
- ✅ Migrations para versionamento do schema
- ✅ Timestamps automáticos (createdAt/updatedAt)

---

## Segurança Implementada

- ✅ Variáveis sensíveis em `.env` (não commitadas)
- ✅ Validação no backend **e** frontend
- ✅ Tratamento de erros sem exposição de dados sensíveis
- ✅ CORS configurado adequadamente
- ✅ Sequelize protege contra SQL injection automaticamente
- ✅ Email único com constraint no banco de dados

---

## Estrutura do Banco de Dados

### Tabela: `people`

| Coluna      | Tipo           | Descrição                          |
|-------------|----------------|------------------------------------|
| id          | INT            | Identificador único (PK, AUTO_INCREMENT) |
| name        | VARCHAR(150)   | Nome completo da pessoa            |
| email       | VARCHAR(150)   | Email único (UNIQUE constraint)    |
| phone       | VARCHAR(20)    | Telefone (opcional)                |
| createdAt   | TIMESTAMP      | Data de criação automática         |
| updatedAt   | TIMESTAMP      | Data de atualização automática     |

**Índices:**
- `PRIMARY KEY` em `id`
- `UNIQUE` em `email`
- `INDEX idx_email` para buscas rápidas por email
- `INDEX idx_name` para buscas rápidas por nome

---

## Teste Rápido

### Verificar Backend
```bash
curl http://localhost:8080/api/health
```

**Resposta esperada:**
```json
{ "status": "API is running" }
```

### Verificar Frontend
Acesse `http://localhost:3000` no navegador.

---

## Troubleshooting

### Erro: "Cannot connect to database"
**Soluções:**
- Verifique se MySQL está rodando: `systemctl status mysql` (Linux) ou verifique Services (Windows)
- Confirme credenciais no arquivo `.env`
- Verifique se o banco `people_db` foi criado

### Erro: "CORS error"
**Soluções:**
- Certifique-se que o backend está rodando na porta 8080
- Verifique se o `REACT_APP_API_URL` no frontend está correto

### Frontend não conecta ao backend
**Soluções:**
- Verifique se `REACT_APP_API_URL` está definido corretamente
- Confirme que a porta 8080 está disponível
- Reinicie o servidor backend

### Porta já em uso
```bash
# Linux/Mac - Encontrar processo usando a porta
lsof -i :3000   # ou :8080
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Ou use portas diferentes
PORT=8081 npm start   # Backend
PORT=3001 npm start   # Frontend
```

### Erro do Sequelize: "SequelizeConnectionError"
**Soluções:**
- Verifique se as variáveis `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`, `DB_HOST` estão corretas no `.env`
- Certifique-se que o usuário MySQL tem permissões adequadas

---

## Arquivos para Remover (Desnecessários)

Se você está usando apenas o frontend em `/client`, remova:

```bash
# Remover estrutura TypeScript/Vite não utilizada
rm -rf src/
rm eslint.config.js
rm postcss.config.js
rm tailwind.config.js
rm tsconfig.*.json
rm vite.config.ts
rm index.html  # da raiz (mantenha apenas o de client/public/)
```

---

## Estrutura de Código

### Padrão MVC (Backend com Sequelize)

**Models** - Definição de entidades e operações:
```javascript
// personModel.js
export const getAllPeople = async () => {
  return await Person.findAll({ order: [['createdAt', 'DESC']] });
};
```

**Controllers** - Lógica de negócio:
```javascript
// peopleController.js
export const getAllPeople = async (req, res) => {
  try {
    const people = await PersonModel.getAllPeople();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

**Routes** - Definição de rotas:
```javascript
// peopleRoutes.js
router.get('/people', PeopleController.getAllPeople);
router.post('/people', PeopleController.createPerson);
```

### Componentes React

**PersonForm** - Formulário reutilizável com validação
**People** - Página principal com CRUD completo

---

## Scripts Disponíveis

### Raiz do Projeto
```bash
npm run install-all   # Instala todas as dependências
npm run server        # Inicia o backend
npm run server:dev    # Backend em modo desenvolvimento
npm run client        # Inicia o frontend
```

### Backend (`/server`)
```bash
npm start             # Inicia o servidor
npm run dev           # Modo desenvolvimento (auto-reload)
```

### Frontend (`/client`)
```bash
npm start             # Inicia o app React
npm run build         # Build para produção
npm test              # Executa testes
```

---

## Próximas Melhorias Sugeridas

- [ ] Implementar autenticação JWT
- [ ] Adicionar paginação na listagem
- [ ] Sistema de busca e filtros avançados
- [ ] Ordenação dinâmica de colunas
- [ ] Validação de email único no formulário (antes do submit)
- [ ] Testes unitários (Jest + React Testing Library)
- [ ] Testes E2E (Cypress ou Playwright)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Containerização com Docker
- [ ] Documentação Swagger/OpenAPI
- [ ] Cache com Redis
- [ ] Rate limiting
- [ ] Logging estruturado (Winston/Pino)

---

**Desenvolvido por Diego Tamiozzo** 
