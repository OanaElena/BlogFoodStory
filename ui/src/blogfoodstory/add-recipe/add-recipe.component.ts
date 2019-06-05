import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../model/ingredient";
import {FoodService} from "../services/food.service";
import {MatSelectChange} from "@angular/material";
import {debounceTime} from "rxjs/operators";
import {StepRecipes} from "../model/step-recipes";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  ingredientsList: Ingredient[] = [];
  alreadyExistingIngredients: Ingredient[];
  items: FormArray;

  constructor(private fb: FormBuilder,
              private foodService: FoodService) { }

  get formRecipe() { return <FormArray>this.recipeForm.get('stepsList'); }

  ngOnInit() {

    this.foodService.loadIngredients().subscribe(ingredients => this.alreadyExistingIngredients = ingredients);

    this.recipeForm = this.fb.group({
      ingredientList : new FormGroup({
        ingredientId: new FormControl(),
        ingredientName: new FormControl(),
        ingredientQuantity: new FormControl(),
        ingredientUnitName: new FormControl()
      }),
      stepsList : this.fb.array([])
    });

    this.recipeForm.get('ingredientList').valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
          setTimeout((self) => {
            self.ingredientsList.find(ingr => ingr.id == value.ingredientId).quantity = value.ingredientQuantity;
           },100, this);
        });
  }

  foodSelectionChange($event: MatSelectChange) {
    this.foodService.loadIngredientById($event.value)
      .subscribe(ingredient => {
        if(!this.ingredientsList.find(ingred => ingred.id == ingredient.id)){

          setTimeout((self) => {
            self.ingredientsList.push(ingredient);
           self.recipeForm.get('ingredientList').controls.ingredientName.value = ingredient.name;
           self.recipeForm.get('ingredientList').controls.ingredientId.value = ingredient.id;
           self.recipeForm.get('ingredientList').controls.ingredientQuantity.value = ingredient.quantity;
           self.recipeForm.get('ingredientList').controls.ingredientUnitName.value = ingredient.unit.name;
          }, 100, this);

        }else{
          alert("Ingredient "+ingredient.name + " already added. Please modify quantity of the existing one.");
        }
      });
  }


  deleteIngredient(id: number) {
    this.ingredientsList = this.ingredientsList.filter(ingred => ingred.id != id);
  }

  addNewStep() {
    let recipeFormLength = this.formRecipe.controls.length;
    if(recipeFormLength == 0){
      this.addStep();
      this.formRecipe.controls[recipeFormLength].get('stepOrderId').setValue(recipeFormLength+1);
    }else{
      if(this.formRecipe.controls[recipeFormLength-1].get('stepDescription').value != null || this.formRecipe.controls[recipeFormLength-1].get('coverPhoto').value != null){
        this.addStep();
        this.formRecipe.controls[recipeFormLength].get('stepOrderId').setValue(recipeFormLength+1);
      }
    }
  }

  addStep(){
    this.items = this.recipeForm.get('stepsList') as FormArray;
    this.items.push(this.createItem());
  }

  private createItem(): FormGroup {
    return this.fb.group({
      stepOrderId: new FormControl(),
      stepDescription: new FormControl(),
      coverPhoto: new FormControl(),
      photoStepName: new FormControl()
    })
  }
}
