# Reserva de Veículos - Backend

Clone o repositório usando o comando abaixo:

```sh
git clone https://github.com/momanhaes/reserva-de-veiculos-backend
```

Caso queria consumir a API por uma URL pública, use [https://reserva-de-veiculos.herokuapp.com](https://reserva-de-veiculos.herokuapp.com).

Caso prefira rodar localmente na sua máquina, siga os procedimentos abaixo.

O projeto foi desenvolvido com as tecnologias: NodeJS, TypeScript, MongoDB e Docker. 
É necessário ter o NodeJS e, caso use Windows, o Docker Desktop instalado no seu computador para poder configurar API e o banco de dados. 

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

Na GUI do Mongo (Robo 3T) crie uma nova conexão com os parâmetros abaixo:

`Vá em Connections > Create > Name: nodeapi > Address: localhost > Porta: 27017 > Save`

Caso não tenha o Robo 3T instalado, é necessário fazer sua instalação para obter o resultado visual da persistência dos dados.

## Inicialização da API

Digite os comandos abaixo e verifique se tudo foi conectado corretamente:

```sh
npm install
```

```sh
npm start
```

## Documentação da API

### Endpoint de Usuários

#### Login

**[POST]** `/users/login` 
* email: string;
* password: string;
  
#### Criação de Usuário

**[POST]** `/users` 
* name: string;
* email: string;
* password: string;
* passwordConfirmation: string;

### Endpoint de Veículos

#### Criação de Veículo

**[POST]** `/vehicles` 
* name: string;
* externalCode: string;
* description: string;
* status: string;
* category: string;
* dailyValue: number;
* imageUrl: string;
* year: string;
* conservation: string;
* fuel: string;
* rentedBy: string;

#### Edição de Veículo

**[PATCH]** `/vehicles:externalCode` 
* name: string;
* externalCode: string;
* description: string;
* status: string;
* category: string;
* dailyValue: number;
* imageUrl: string;
* year: string;
* conservation: string;
* fuel: string;
* rentedBy: string;
  
#### Deleção de Veículo por ID

**[DELETE]** `/vehicles:externalCode`

#### Busca de Veículo por ID

**[GET]** `/vehicles:externalCode`

#### Busca de Veículo por Keyword

**[GET]** `/vehicles?keyword=carro`

#### Listagem de Veículos

**[GET]** `/vehicles` 


