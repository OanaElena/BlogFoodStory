package blog.food.story.food.service;

import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;

import java.util.List;

public interface FoodService {
    List<Category> loadAllCategories();
    List<Ingredient> loadAllIngredients();
    Ingredient loadIngredientById(Long id);
}
