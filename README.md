<p align="center">
    <img src="assets/icon-app.png" alt="Logotipo do projeto" width="300">
</p>

# TÁ DE BOA, é só um README

O intuito desse projeto é criar um aplicativo que possa ser utilizado para promover maior proteção e tranquilidade para os cidadãos.

O desenvolvimento desse aplicativo foi feito na [Residência de Software](https://www.restic36.cepedi.org.br/) proposto pela [CEPEDI](https://www.cepedi.org.br/). O desafio em questão foi motivado pelos dados alarmantes sobre criminalidade em Feira de Santana, Bahia, destacada como uma das cidades mais violentas do País.

Os conceitos-chaves que nortearam o desenvolvimento do aplicativo incluem segurança pública, baseada em dados, prevenção colaborativa e o uso de tecnologias como ciência de dados, serviços em nuvem e desenvolvimento mobile.

## Desenvolvimento

O desenvolvimento do "Tá de Boa" começou com a definição de funcionalidades e requisitos do aplicativo. A cidade de Feira de Santana foi escolhida como foco do projeto, e a partir disso, permitindo o uso de Algortimos de ciência de dados para prever locais de maior risco de criminalidade. 

Além disso, a aplicação será capaz de receber denúncias de crimes e acidentes. Os registros incluirão detalhes como localização, tipo de crime, detalhes sobre o ocorrido, uso de armas de fogo, entre outros.

## Tecnologias

O aplicativo foi desenvolvido utilizando as seguintes tecnologias:

<ul>
    <li>
        <a href="https://nextjs.org/">
             React <img src="assets/react.png" alt="React" width="15" style="vertical-align: middle;"> + Next.js <img src="assets/nextjs.png" alt="Next.js" width="15" style="vertical-align: middle;">
        </a>
    </li>
    <li>
        <a href="https://www.postgresql.org/">
            PostgreSQL <img src="assets/postgresql.png" alt="PostgreSQL" width="15" style="vertical-align: middle;">
        </a>
    </li>
    <li>
        <a href="https://www.prisma.io/">
            Prisma <img src="assets/prisma.png" alt="Prisma" width="15" style="vertical-align: middle;">
        </a>
    </li>
    <li>
        <a href="https://nodejs.org/en/">
            Node.js <img src="assets/nodejs.png" alt="Node.js" width="15" style="vertical-align: middle;">
        </a>
    </li>
</ul>

## Instalação

Para instalar o aplicativo, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone
```

2. Instale as dependências em ambas as pastas `server` e `web`:
```bash
cd server
npm install
cd ../web
npm install
```
obs: siga as instruções no README de cada subpasta.

3. Inicie o servidor:
```bash
cd server
npm run dev
```

4. Inicie o aplicativo:
```bash
cd web
npm run dev
```