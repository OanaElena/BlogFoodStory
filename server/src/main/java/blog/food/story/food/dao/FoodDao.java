package blog.food.story.food.dao;

import blog.food.story.model.Category;

import java.util.List;

public interface FoodDao {
    public List<Category> loadAllCategories();
}
