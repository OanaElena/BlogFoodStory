package blog.food.story.model;

public class Ingredient {

    private Long id;
    private String name;
    private Unit unit;
    private Double cantity;
    private Double proteins;
    private Double carbohydrates;
    private Double lipids;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Double getCantity() {
        return cantity;
    }

    public void setCantity(Double cantity) {
        this.cantity = cantity;
    }

    public Double getProteins() {
        return proteins;
    }

    public void setProteins(Double proteins) {
        this.proteins = proteins;
    }

    public Double getCarbohydrates() {
        return carbohydrates;
    }

    public void setCarbohydrates(Double carbohydrates) {
        this.carbohydrates = carbohydrates;
    }

    public Double getLipids() {
        return lipids;
    }

    public void setLipids(Double lipids) {
        this.lipids = lipids;
    }
}
