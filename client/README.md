# Frontend - People CRUD React

Interface React para gerenciar o cadastro de pessoas.

## Estrutura do Projeto

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── PersonForm.js     # Componente do formulário
│   ├── pages/
│   │   └── People.js         # Página principal
│   ├── services/
│   │   └── api.js            # Serviço de requisições HTTP
│   ├── App.js                # Componente principal
│   ├── App.css               # Estilos da aplicação
│   ├── index.js              # Ponto de entrada
│   └── index.css             # Estilos globais
└── package.json
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure o arquivo `.env` (opcional, baseado em `.env.example`):
```
REACT_APP_API_URL=http://localhost:8080/api
```

## Rodando a Aplicação

```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`

## Construir para Produção

```bash
npm run build
```

## Funcionalidades

### Cadastro de Pessoas

- **Formulário**
  - Nome (obrigatório)
  - Email (obrigatório, com validação)
  - Telefone (opcional)
  - Validação em tempo real

### Lista de Pessoas

- **Visualização**
  - Tabela com todos os registros
  - Exibição de ID, nome, email, telefone e data de cadastro
  - Contador de registros

- **Ações**
  - **Editar**: Seleciona um registro para atualização
  - **Remover**: Deleta um registro com confirmação
  - **Cancelar Edição**: Cancela a edição em andamento

### Feedback ao Usuário

- Mensagens de sucesso (verde)
- Mensagens de erro (vermelho)
- Estados de carregamento
- Validação de formulário

## Estrutura de Componentes

### PersonForm.js
Componente reutilizável de formulário:
- Validação de campos obrigatórios
- Validação de email
- Suporte a edição (recebe dados iniciais)
- Estados de erro

**Props:**
- `onSubmit`: Função chamada ao submeter
- `initialData`: Dados iniciais para edição
- `isLoading`: Estado de carregamento

### People.js
Página principal que contém:
- Gerenciamento de estado da aplicação
- Chamadas à API
- Lógica de CRUD
- Exibição da lista e do formulário

## Serviço de API (api.js)

Funções disponíveis:
- `fetchPeople()` - GET lista de pessoas
- `fetchPersonById(id)` - GET pessoa específica
- `createPerson(data)` - POST nova pessoa
- `updatePerson(id, data)` - PUT atualizar pessoa
- `deletePerson(id)` - DELETE remover pessoa

## Styling

- CSS customizado sem dependências externas
- Design responsivo
- Paleta de cores profissional
- Transições suaves
- Compatível com dispositivos móveis

## Variáveis de Ambiente

```
REACT_APP_API_URL=http://localhost:8080/api
```

Se não definida, usa como padrão `http://localhost:8080/api`

## Dependências Principais

- **react**: 18.2.0 - Biblioteca UI
- **react-dom**: 18.2.0 - Renderização do React
- **axios**: 1.6.0 - Cliente HTTP
- **react-scripts**: 5.0.1 - Scripts e configuração do CRA

## Tratamento de Erros

A aplicação fornece feedback claro para:
- Erros de validação do formulário
- Erros de conexão com a API
- Confirmação de exclusão

## Responsividade

A aplicação é totalmente responsiva com breakpoints em:
- Desktop: 1400px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## Próximos Passos (Sugestões de Melhorias)

- Implementar paginação
- Adicionar busca/filtro
- Ordenação de colunas
- Autenticação
- Persistência de estado
- Testes unitários
