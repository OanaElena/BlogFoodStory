import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from "../model/category";
import {Ingredient} from "../model/ingredient";
import {Tag} from "../model/tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {
  }

  loadCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/server/food/categories');
  }

  loadIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/server/food/ingredients');
  }

  loadIngredientById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`/server/food/ingredient/${id}`);
  }

  loadTags(id: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`/server/food/tags`);
  }
}
