function getHeroes() {

  const get = fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  const myHeroes = get.then((response) => {
    return response.json
  }).then((heroes) => {
    return heroes;
  }).catch((erro) => console.log('erro', erro));

}

getHeroes();