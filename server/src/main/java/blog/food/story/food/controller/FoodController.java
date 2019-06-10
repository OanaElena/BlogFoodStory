package blog.food.story.food.controller;

import blog.food.story.food.service.FoodService;
import blog.food.story.model.Category;
import blog.food.story.model.Ingredient;
import blog.food.story.model.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * I have added a comment for git rebase master into branch --with conflicts
 */
@RestController
@RequestMapping("/food")
public class FoodController {

    private FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService){
        this.foodService = foodService;
    }

    @GetMapping("/categories")
    public List<Category> loadCategoriesList(){
        return foodService.loadAllCategories();
    }

    @GetMapping("/ingredients")
    public List<Ingredient> loadIngredientList(){
        return foodService.loadAllIngredients();
    }

    @GetMapping("/ingredient/{id}")
    public Ingredient loadIngredientById(@PathVariable Long id){
        return foodService.loadIngredientById(id);
    }

    @GetMapping("/tags")
    public List<Tag> loadTagsList(){
        return foodService.loadAllTags();
    }
}
