package blog.food.story.food.controller;

import blog.food.story.food.service.FoodService;
import blog.food.story.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
