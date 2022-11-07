# Front-end Challenge 🏅 2022 - Dictionary

## Sobre o Web App

O Web App foi desenvolvido para o desafio técnico da Coodesh de Novembro de 2022.

This is a challenge by [Coodesh](https://coodesh.com/)

### Descrição do desafio

Nesse desafio foi desenvolvido um aplicativo para listar palavras em inglês, utilizando como base a API [Free Dictionary API](https://dictionaryapi.dev/). O projeto a ser desenvolvido por você tem como objetivo exibir termos em inglês e gerenciar as palavras visualizadas, conforme indicado nos casos de uso que estão logo abaixo

#### Tecnologias utilizadas (Front-End):

- React com Nextjs e Typescript
- Styled Components e Radix-UI
- CSS Flexbox + CSS Grid
- Design Mobile First
- Gestão de dados com Context API e Localstorage
- Conceitos de Programação Funcional em JS

#### Tecnologias (Back-End):

- Strapi, SWR e Postgres

#### Organização:

- Foi utilizado o modelo do atomic design para a criação dos componentes e a convenção de nomenclatura dos arquivos de componentes inspirada no Angular
- Chamadas assíncronas com useSWR e useSWRInfinite para obtenção dos dados

### Modelo de Dados:

Conforme indicado na documentação da API, a estrutura de dados presente retorna as seguintes informações:

```json
[
  {
    "word": "hello",
    "phonetics": [
      {
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75797336",
        "license": {
          "name": "BY-SA 4.0",
          "url": "https://creativecommons.org/licenses/by-sa/4.0"
        }
      },
      {
        "text": "/həˈləʊ/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9021983",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/həˈloʊ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "\"Hello!\" or an equivalent greeting.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": ["greeting"],
        "antonyms": []
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "To greet with \"hello\".",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "interjection",
        "definitions": [
          {
            "definition": "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello, everyone."
          },
          {
            "definition": "A greeting used when answering the telephone.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello? How may I help you?"
          },
          {
            "definition": "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello? Is anyone there?"
          },
          {
            "definition": "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
            "synonyms": [],
            "antonyms": [],
            "example": "You just tried to start your car with your cell phone. Hello?"
          },
          {
            "definition": "An expression of puzzlement or discovery.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello! What’s going on here?"
          }
        ],
        "synonyms": [],
        "antonyms": ["bye", "goodbye"]
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": ["https://en.wiktionary.org/wiki/hello"]
  }
]
```

A lista de palavras passou por um dicionário verificador, para remover palavras inválidas ou escritas incorretamente.

### Front-End:

Todos os itens obrigatórios foram concluídos e também os itens diferenciais listados abaixo.

**Diferencial 2** - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 3** - Colocar na URL os parametros utilizados na busca, para que seja possível compartilhar a URL;

**Diferencial 4** - Implementar SSR no projeto;

**Diferencial 5** - Implementar o projeto com PWA.

## Instruções de uso

Primeiro faça o clone do repositório

```bash
git clone git@github.com:gustaelesbao/desafio-coodesh.git
```

Depois abra a pasta do projeto com o editor de sua preferência e instale as dependências

```bash
npm install
# ou
yarn
```

```bash
npm run dev
# ou
yarn dev
```

## Deploy Front-end

O front-end foi deployado na Vercel, você pode acessar o projeto de forma direta pelo link: https://desafio-coodesh.vercel.app/

## Deploy Back-end

O back-end feito pelo strapi foi deployado na heroku, você pode acessar o projeto de forma direta pelo link: https://coodesh-challenge-back.herokuapp.com/admin/

### Utilize as credenciais abaixo:

**E-mail:** gustaelesbao@gmail.com

**Password:** Admin123

Clique em **Content Manager > Word** para ver a lista de palavras
