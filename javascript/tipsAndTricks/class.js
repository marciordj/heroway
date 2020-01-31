class myHero {
    constructor(name, superPower) {
        this.name = name;
        this.superPower = superPower;
    }

    throwPower() {
        console.log('KATCHAU', this.superPower);
    }
}

const hero = new myHero('spider-man', 'soltar teia');
console.log(hero)
hero.throwPower();