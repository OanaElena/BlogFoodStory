import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Category} from "../model/category";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'blog-food-story-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoriesList: Category[];
  clientX = null;
  clientY = null;
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.loadCategories().subscribe(categories => this.categoriesList = categories);
  }
}
