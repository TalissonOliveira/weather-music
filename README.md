<h1 align="center">
  Weather Music
</h1>

<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/TalissonOliveira/weather-music?style=flat-square">

<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/TalissonOliveira/weather-music?style=flat-square">

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/TalissonOliveira/weather-music?style=flat-square">

<img alt="GitHub" src="https://img.shields.io/github/license/TalissonOliveira/weather-music?style=flat-square">
</p>

<p align="center">
    <a href="#book-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#information_source-como-utilizar">Como utilizar</a>
</p>

<p align="center">
    <img alt="Demo proffy home" src="https://ik.imagekit.io/imagens/weathermusic_vTE-OQBHA.png?updatedAt=1633838432362">
</p>

## :book: Sobre
A aplicação busca playlists de músicas de acordo com temperatura do tempo da cidade escolhida.

## :rocket: Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React.js]()
- [Next.js]()
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

#### Utilitários

- API de dados meteorológicos: [OpenWeather](https://openweathermap.org/)
- API do Spotify: [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

## :information_source: Como utilizar

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) v10.16 ou superior + Yarn instalado em seu computador.

> Atenção: as keys da API [OpenWeather](https://openweathermap.org/) e [Spotify](https://developer.spotify.com/) são necessárias.

Para conseguir a key do OpenWeather crie uma conta em [OpenWeather](https://openweathermap.org/) e acesse [suas keys](https://home.openweathermap.org/api_keys) (após criado/solicitado, demora alguns minutos para a key começar a funcionar).

Para conseguir o Client ID e Secrect ID do Spotify acesse o [painel de controle](https://developer.spotify.com/dashboard/), crie uma nova aplicação, selecione ele, e copie o Client ID e Secrect ID.

Com tudo em mãos, crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis:

```env
NEXT_PUBLIC_API_KEY=key_OpenWeather
NEXT_PUBLIC_CLIENT_ID=client_id_spotify
NEXT_PUBLIC_CLIENT_SECRET=secret_id_spotify
```

Na linha de comando:
```bash
# Clonar o repositório
$ git clone https://github.com/TalissonOliveira/weather-music.git

# Entrar no diretório
$ cd weather-music

# Baixar as dependências
$ yarn install

# Executar o servidor
$ yarn dev
```
Feito isso, abra o seu navegador e acesse http://localhost:3000/

---

Feito com :heart: por Talisson Oliveira
