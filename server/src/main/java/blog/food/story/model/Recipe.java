package blog.food.story.model;

import java.util.Date;
import java.util.List;

public class Recipe {
    private Long id;
    private String title;
    private SubCategory subcategory;
    private String observations;
    private Date addedDate;
    private byte[] coverPhoto;
    private List<Ingredient> ingredientsList;
    private List<Tag> tagsList;
    private List<StepRecipes> stepRecipeslist;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public SubCategory getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(SubCategory subcategory) {
        this.subcategory = subcategory;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public byte[] getCoverPhoto() {
        return coverPhoto;
    }

    public void setCoverPhoto(byte[] coverPhoto) {
        this.coverPhoto = coverPhoto;
    }

    public List<Ingredient> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<Ingredient> ingredientsList) {
        this.ingredientsList = ingredientsList;
    }

    public List<Tag> getTagsList() {
        return tagsList;
    }

    public void setTagsList(List<Tag> tagsList) {
        this.tagsList = tagsList;
    }

    public List<StepRecipes> getStepRecipeslist() {
        return stepRecipeslist;
    }

    public void setStepRecipeslist(List<StepRecipes> stepRecipeslist) {
        this.stepRecipeslist = stepRecipeslist;
    }
}
