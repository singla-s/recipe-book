import { Recipe } from '../recipes/recipe.model'

export class RecipeService {
    private recipes: Recipe[] = [];

    constructor() {
        this.recipes.push(new Recipe("Banana Shake", "Banana Shake description", "https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg"));
        this.recipes.push(new Recipe("Pav Bhaji", "Pav Bhaji description", "https://media.istockphoto.com/photos/indian-mumbai-food-pav-bhaji-from-vegetables-with-bread-closeup-in-a-picture-id1057140522?k=6&m=1057140522&s=612x612&w=0&h=JqbUoiQ7usEWOdsuaBqcqbRkDuIYXCg6qbyhsid8cmo="));
    }

    getRecipes() {
        return this.recipes.slice();
    }
}