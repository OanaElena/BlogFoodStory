package blog.food.story.food.dao;

import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;

import java.util.List;

public interface FoodDao {
    public List<Category> loadAllCategories();
    public List<Ingredient> loadAllIngredients();
    public Ingredient loadIngredientById(Long id);
}
