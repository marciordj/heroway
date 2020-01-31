const hero = {
  id: 1,
  name: 'spider-man',
  company: 'Marvel'
};

// function showHero({ name }) {       //puxando assim, fica menos verboso. spread operator
//     console.log(name);
// }

// showHero(hero)

const hero2 = {
  ...hero,         //com esses 3 pontos, vai copiar todas as props de hero
  name: 'Homem Aranha',
}


