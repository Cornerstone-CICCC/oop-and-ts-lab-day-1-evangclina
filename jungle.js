class Animal {
    #name
    #species
    #energy
    static remainingAnimals = 0

    constructor(name, species, energy){
        Animal.remainingAnimals++

        this.#name = name
        this.#species = species
        this.#energy = energy
    }

    get name(){
        return this.#name
    }
    set name(newName){
        this.#name = newName
    }

    get species(){
        return this.#species
    }
    set species(newSpecies){
        this.#species = newSpecies
    }

    get energy(){
        return this.#energy
    }
    set energy(newEnergy){
        this.#energy = newEnergy
    }

    attack(target){
        if(target.energy === 0 || this.energy === 0){
            return `${this.#name} won. `
            Animal.remainingAnimals--
        }
        return `${this.#name} swoops in to attack ${target}!
        \n${target}'s energy: ${target.energy}
        \n${this.#name}'s energy: ${this.energy}`
    }

    eat(){
        return `${this.#name} eats and gains energy! ${this.#name}'s energy:`
    }

}

class Bird extends Animal {
    #canFly
    constructor(name, species, canFly, energy){
        super(name, species)
        this.#canFly = canFly
        this.energy = 100
    }

    get canFly(){
        return this.#canFly
    }
    set canFly(newCanFly){
        this.#canFly = newCanFly
    }

    attack(target){
        if(target.energy === 0 || this.energy === 0){
            return `${this.name} won. `
            Animal.remainingAnimals--
        }
        return `${this.name} swoops in to attack ${target.name}!
        ${target.name}'s energy: ${target.energy - 20}
        ${this.name}'s energy: ${this.energy - 20}`
    }

    eat(){
        return `${super.eat()} ${this.energy + 10}`
    }
}

class Mammal extends Animal {
    #furColor
    constructor(name, species, furColor, energy){
        super(name, species)
        this.#furColor = furColor
        this.energy = 200
    }

    get furColor(){
        return this.#furColor
    }

    set furColor(newFurColor){
        this.#furColor = newFurColor
    }

    attack(target){
        if(target.energy === 0 || this.energy === 0){
            return `${this.name} won. `
            Animal.remainingAnimals--
        }
        return `${this.name} lunges in to attack ${target.name}!
        ${target.name}'s energy: ${target.energy - 50}
        ${this.name}'s energy: ${this.energy - 50}`
    }

    eat(){
        return `${super.eat()} ${this.energy + 20}`
    }
}

class Reptile extends Animal {
    #coldBlooded

    constructor(name, species, coldBlooded, energy){
        super(name, species)
        this.#coldBlooded = coldBlooded
        this.energy = 100
    }

    set coldBlooded(newColdBlooded){
        this.#coldBlooded = newColdBlooded
    }

    get coldBlooded(){
        return this.#coldBlooded
    }

    attack(target){
        if(target.energy === 0 || this.energy === 0){
            return `${this.name} won. `
            Animal.remainingAnimals--
        }
        return `${this.name} lunges in to attack ${target.name}!
        ${target.name}'s energy: ${target.energy - 30}
        ${this.name}'s energy: ${this.energy - 30}`
    }
    eat(){
        return `${super.eat()} ${this.energy + 15}`
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
console.log(eagle.attack(lion))
lion.attack(snake);
console.log(lion.attack(snake))

// Display the remaining number of animals with energy
console.log("")
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
// eagle.eat();
// lion.eat();
// snake.eat();
console.log(eagle.eat())
console.log(lion.eat())
console.log(snake.eat())
