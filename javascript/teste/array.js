function heroes (hero) {
    const heroesName = ['spider-man', 'black panther', 'super-man'];

    let hero = heroesName;

    let addHero = (heroAdd) => {
        return hero.push(heroAdd)
    }

    let consult = (consultHero) => {
        for (let i = 0; i < hero.length; i++) {
            const element = hero[i];
        }

        return element;
    }

    return {
        addHero: addHero,
        consult: consult
    }
}

heroes('Iron Man').addHero;

console.log(heroes().consult)