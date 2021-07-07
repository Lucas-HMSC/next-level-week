## NLW #06 - Trilha ReactJS
<p align="center">
    <img alt="Letmeask" title="Letmeask" src="./images/letmeask.svg" width="220px" />
</p>
<p align="center">
    <img alt="Letmeask" title="Letmeask" src="./images/letmeask.png" width="100%" />
</p>

### Sobre o Projeto
Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.

### Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-009de1?style=for-the-badge&logo=firebase&logoColor=ffc234)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

### Como executar

- Clone o repositório
- Acesse a pasta `letmeask`, e instale as dependências com `yarn` ou `npm install`.
- Inicie a aplicação Web com `npm run start` ou `yarn start`.
- Será necessário criar uma conta no Firebase e um projeto para disponibilizar um Realtime Database. Em seguida, defina no arquivo .env as configurações do seu projeto (remova o `.example` do arquivo `.env.example`).
```cl
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
```

## NLW #06 - Trilha React Native
<p align="center">
    <img alt="GamePlay" title="GamePlay" src="./images/gameplay.svg" width="220px" />
</p>
<p align="center">
    <img alt="GamePlay" title="GamePlay" src="./images/gameplay.png" width="100%" />
</p>

### Sobre o Projeto
Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.

### Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ReactNative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)

### Como executar

- Clone o repositório
- Acesse a pasta `gameplay`, e instale as dependências com `yarn` ou `npm install`.
- Execute `expo start` (ative a opção Tunnel).
- Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o `.example` do arquivo `.env.example`).
```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## NLW #06 - Trilha NodeJS
<p align="center">
    <img alt="nlwValoriza" title="nlwValoriza" src="./images/nlwValoriza.png" width="100%" />
</p>

### Sobre o Projeto
Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

### Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JWT](https://img.shields.io/badge/JSONWebToken-000000?style=for-the-badge&logo=jwt&logoColor=000000)

### Como executar

- Clone o repositório
- Acesse a pasta `nlwValoriza`, e instale as dependências com `yarn` ou `npm install`.
- Execute `yarn typeorm migration:run` ou `npm run typeorm migration:run` para criar as tabelas do banco de dados.
- Inicie a aplicação com `yarn dev` ou `npm run dev`.
