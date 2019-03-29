import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.recipeForm = this.fb.group({
      // name: new FormControl('', Validators.required),
    });
  }

}
