var Rx = require('rxjs/Rx');
var streams = require('../../util/example-streams.js');
var Ingredient = require('../../domain/cooking/ingredient');
var Cake = require('../../domain/cooking/cake');

const cake$ = streams.ingredient$
    .filter((ingredient) => ingredient.getType() === 'FRUIT')
    .scan((cake, ingredient) => cake.addIngredient(ingredient), new Cake("Fruitcake"));

cake$.subscribe((cake) => console.log(cake.createRecipe()));