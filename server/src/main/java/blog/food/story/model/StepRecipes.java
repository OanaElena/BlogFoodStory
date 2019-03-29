package blog.food.story.model;

public class StepRecipes {

    private Long id;
    private Long step_order_id;
    private String description;
    private byte[] photo;
    private String photo_name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStep_order_id() {
        return step_order_id;
    }

    public void setStep_order_id(Long step_order_id) {
        this.step_order_id = step_order_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhoto_name() {
        return photo_name;
    }

    public void setPhoto_name(String photo_name) {
        this.photo_name = photo_name;
    }
}
