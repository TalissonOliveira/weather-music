## :information_source: Como utilizar

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) v10.16 ou superior + Yarn instalado em seu computador.

É necessário as KEYS da API [OpenWeather](https://openweathermap.org/) e [Spotify](https://developer.spotify.com/)

Para conseguir a KEY do OpenWeather crie uma conta em [OpenWeather](https://openweathermap.org/) e acesse [suas keys](https://home.openweathermap.org/api_keys) (após criado/solicitado, demora alguns minutos para a key começar funcionar)

Para conseguir o Client ID e Secrect ID do Spotify acesse o [painel de controle](https://developer.spotify.com/dashboard/), crie uma nova aplicação, selecione ele, e copie o Client ID e Secrect ID

Com tudo em mãos, crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis

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