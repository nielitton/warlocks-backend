
# Warlocks Back-End

Esse é o backend para o projeto Warlocks Notes, aqui você vai aprender a iniciar o projeto localmente

Caso você não queira inicia-lo localmente, você pode testar online, através do Swagger, no link abaixo, esta aplicação está hospedada no render.

https://warlocks-backend.onrender.com/api

## Instalação

Para instalar o  projeto, você precisará instalar algumas dependências, sendo elas

- Node (https://nodejs.org/en).
- Docker (https://www.docker.com/)
- Npm (Normalmente vem junto com o node)
- Git (https://git-scm.com/downloads)

Após isso, você deve clonar o repositório na sua maquina com o git

digite o comando no seu terminal
```bash
git clone git@github.com:nielitton/warlocks-backend.git
```

Após o repo clonado, você deve instalar as dependências do projeto, mas antes você deve entrar na pasta do projeto, com o comando.
```bash
cd warlocks-backend
```
Agora vamos instalar as dependências do  projeto.
```bash
npm install 
```

Logo após isso devemos criar um container docker, com o comando
```bash
docker compose up -d
```    

Caso seja a primeira vez que você esteja usando docker, ele irá baixar automaticamente a imagem do postgres, isso pode demorar um  pouco.

Com o container rodando, você deve criar um arquivo na raiz do projeto, com o nome ".env"

Dentro do arquivo, você deve colar o seguinte:
```bash
DATABASE_URL="postgresql://warlocks:warlocks@localhost:5432/warlocks_db?schema=public"
APP_PORT=3333
JWT_SECRET="secretKey"
# Aqui você coloca o tempo em segundos por exemplo 24 horas = 86400
JWT_EXPIRES_IN="86400"
```

Feito isso, agora podemos rodar as primeiras configurações com o prisma, digite o seguinte comando no seu terminal

```bash
npx prisma migrate dev
```

Isso irá rodar as migrations do projeto, com o prismaOrm.

com tudo isso feito, e completo, você pode iniciar o projeto, com o comando

```bash
npm run start:dev
```

Estara rodando o seu backend, após isso você pode acessar as os endpoints de forma fácil, acessando o Swagger local clicando no link.

http://localhost:3333/api

Assim você verá toda a documentação da API. (Endpoints, Dtos, Models e etc...).


## Stack utilizada

**Back-end:** Node, NestJs, PrismaOrm, Swagger, Bcrypt, Jwt, Passport, TypeScript

## Ponto importante

Depois de rodar o backend, você pode iniciar o frontend.

Url do repo frontend: https://github.com/nielitton/warlocks-frontend

