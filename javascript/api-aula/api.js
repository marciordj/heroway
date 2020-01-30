//jeito novo com Async Await

async function getHeroesWithAsyncAwait() {
  try {

    const get = await fetch(
      'https://akabab.github.io/superhero-api/api/all.json',
      { method: 'GET' }
    );
  
    const heroes = await get.json()
    
    const thenFirstHeroes = heroes.filter((hero) => {
      if (hero.id <= 10) {
        return true;
      } else {
        return false;
      }
    });

    console.log(thenFirstHeroes);
    
  } catch(erro) {
    console.log('erro', erro)
  }
  
}

getHeroesWithAsyncAwait();




















//Anotações 
