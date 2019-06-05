package blog.food.story.food.dao.impl;

import blog.food.story.food.dao.FoodDao;
import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;
import blog.food.story.model.Tag;
import blog.food.story.support.MyBatisSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FoodDaoImpl extends MyBatisSupport implements FoodDao {

    @Override
    public List<Category> loadAllCategories() {
        return getSqlSession().selectList("blog.food.story.food.loadCategoriesWithSubCategories");
    }

    @Override
    public List<Ingredient> loadAllIngredients() {
        return getSqlSession().selectList("blog.food.story.food.loadAllIngreidnets");
    }

    @Override
    public Ingredient loadIngredientById(Long id) {
        return getSqlSession().selectOne("blog.food.story.food.loadIngredientById", id);
    }

    @Override
    public List<Tag> loadTags() {
        return getSqlSession().selectList("blog.food.story.food.loadAllTags");
    }
}
