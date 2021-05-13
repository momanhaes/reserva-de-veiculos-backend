# Reserva de Veículos - Backend

Clone o repositório usando o comando abaixo:

```sh
git clone https://github.com/momanhaes/reserva-de-veiculos-backend
```

O projeto foi desenvolvido com as tecnologias: NodeJS, TypeScript, MongoDB e Docker. 
É necessário ter o Docker Desktop instalado no seu computador, caso use Windows, para poder configurar o banco de dados. 

## Configuração do Banco de Dados

Verifique se o Docker está instalado no seu computador usando o comando abaixo:

```sh
docker
```

Se o Docker estiver instalado no seu computador, baixe o container do Mongo usando o comando abaixo:

```sh
docker pull tutum/mongodb
```

Suba um container com a instalação do Mongo usando o comando abaixo:

```sh
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
```

O comando abaixo irá listar os containers que estão disponíveis para execução:

```sh
docker ps -a
```

Copie o CONTAINER ID do Mongo e execute o comando abaixo:

```sh
docker start { CONTAINER ID }
```

## Inicialização da API

Digite os comandos abaixo e verifique se tudo foi conectado corretamente

```sh
npm install
```

```sh
npm start
```

## Documentação da API
