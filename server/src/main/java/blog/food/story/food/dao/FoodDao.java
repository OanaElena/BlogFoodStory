package blog.food.story.food.dao;

import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;
import blog.food.story.model.Tag;

import java.util.List;

public interface FoodDao {
    List<Category> loadAllCategories();
    List<Ingredient> loadAllIngredients();
    Ingredient loadIngredientById(Long id);
    List<Tag> loadTags();
}
