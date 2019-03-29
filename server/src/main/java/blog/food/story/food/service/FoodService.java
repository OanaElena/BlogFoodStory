package blog.food.story.food.service;

import blog.food.story.model.Category;

import java.util.List;

public interface FoodService {
    List<Category> loadAllCategories();
}
