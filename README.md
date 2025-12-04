# Supermarket‑React

Aplicação **frontend** criada com **React + Vite**, representando um
sistema de supermercado com listagem de produtos, categorias, consumo de
API, componentes reutilizáveis e organização profissional de pastas.

------------------------------------------------------------------------

## 📌 Objetivo do Projeto

Este frontend foi desenvolvido para servir como interface visual do
sistema **Supermarket**, integrando com o backend (Node/Express) para
exibir produtos e demais informações.

O foco é demonstrar: - Organização de componentes - Requisições HTTP a
uma API real - Tratamento de estados - Fluxo básico de um e-commerce -
Arquitetura limpa e escalável

------------------------------------------------------------------------

## 🧰 Tecnologias Utilizadas

-   **React 18**
-   **Vite**
-   **JavaScript (ES6+)**
-   **Axios** ou *fetch* (dependendo do repositório)
-   **CSS modules / CSS puro** (descrição conforme o projeto)
-   **React Hooks** (useState, useEffect)
-   (Adicione caso exista: React Router, Context API, etc.)

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

    Supermarket-React/
    │
    ├── public/               # Arquivos estáticos
    │   └── vite.svg
    │
    ├── src/
    │   ├── components/       # Componentes reutilizáveis
    │   ├── pages/            # Páginas principais
    │   ├── services/         # Arquivos de conexão com API
    │   ├── styles/           # Estilização global
    │   ├── App.jsx           # Arquivo principal
    │   └── main.jsx          # Renderização base
    │
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    └── README.md

------------------------------------------------------------------------

## 🔗 Comunicação com o Backend

O frontend consome os endpoints da API:

-   `GET /products` --- lista produtos\
-   `GET /categories` --- lista categorias

A URL pode ser configurada em um arquivo como `src/services/api.js`:

``` js
export const API_URL = "http://localhost:5000";
```

------------------------------------------------------------------------

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/Ewersonc/Supermarket-React
```

### 2. Acessar o diretório

``` bash
cd Supermarket-React
```

### 3. Instalar dependências

``` bash
npm install
```

### 4. Rodar o servidor de desenvolvimento

``` bash
npm run dev
```

### 5. Acessar no navegador

Geralmente abre em:

    http://localhost:5173/

------------------------------------------------------------------------

## 📸 Caso tenha prints do projeto

Você pode adicioná-los assim:

    ![Preview do projeto](./src/assets/preview.png)

------------------------------------------------------------------------

## 📦 Melhorias Futuras

-   Carrinho de compras
-   Sistema perfil de usuários
-   Painel administrativo
-   Sistema de favoritos
-   Layout totalmente responsivo
-   Testes automatizados (Jest / React Testing Library)

------------------------------------------------------------------------

## 👨‍💻 Autor

**Ewerson Costa**

------------------------------------------------------------------------
