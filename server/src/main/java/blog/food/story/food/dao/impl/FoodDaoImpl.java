package blog.food.story.food.dao.impl;

import blog.food.story.food.dao.FoodDao;
import blog.food.story.model.Category;
import blog.food.story.support.MyBatisSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FoodDaoImpl extends MyBatisSupport implements FoodDao {

    @Override
    public List<Category> loadAllCategories() {
        return getSqlSession().selectList("blog.food.story.food.loadCategoriesWithSubCategories");
    }
}
