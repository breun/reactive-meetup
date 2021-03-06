package nl.craftsmen.workshops.reactivemeetup.exercises.one;

import static nl.craftsmen.workshops.reactivemeetup.util.Utils.*;

import nl.craftsmen.workshops.reactivemeetup.domain.cooking.Cake;
import nl.craftsmen.workshops.reactivemeetup.domain.cooking.IngredientType;
import nl.craftsmen.workshops.reactivemeetup.domain.cooking.Ingredient;
import nl.craftsmen.workshops.reactivemeetup.util.ExampleStreams;
import rx.Observable;

public class Exercise08 {

	public static void main(String[] args) {
		Observable<Ingredient> ingredient$ = ExampleStreams.ingredient$();

		// ASSIGNMENT: Make a cake using the only fruits from the ingredient$ stream. After having added all ingredients, make sure to bake
		// the cake, so it's actually edible.
		//
		// HINT: Start by selecting the ingredients that you are going to use for the cake.
		//
		// HINT: Use the following expression to check if an ingredient is fruit:
		//
		//   IngredientType.FRUIT.equals(ingredient.getType())
		//
		// HINT: When making the cake start with an "empty" cake: new Cake("Fruitcake")
		//
		// HINT: You can add an ingredient to a cake using the addIngredient(Ingredient ingredient) method.
		//
		// HINT: To bake the cake, use the bake() method of the Cake class.
		
		Observable<Cake> cake$ = ingredient$
			.filter(ingredient -> IngredientType.FRUIT.equals(ingredient.getType()))
			.reduce(new Cake("Fruitcake"), Cake::addIngredient)
			.map(Cake::bake);
		
		// If you've followed the recipe then you should end up with one baked delicious and healthy strawberry pineapple cake.
		
		cake$.subscribe(System.out::println);

		waitForStreamToComplete(cake$);
	}
}
