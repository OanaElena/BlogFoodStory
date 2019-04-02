package blog.food.story.food.service.impl;

import blog.food.story.food.dao.FoodDao;
import blog.food.story.food.service.FoodService;
import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodDao foodDao;

    @Autowired
    public FoodServiceImpl(FoodDao foodDao) {
        this.foodDao = foodDao;
    }

    @Override
    public List<Category> loadAllCategories() {
        return foodDao.loadAllCategories();
    }

    @Override
    public List<Ingredient> loadAllIngredients() {
        return foodDao.loadAllIngredients();
    }

    @Override
    public Ingredient loadIngredientById(Long id) {
        return foodDao.loadIngredientById(id);
    }
}
