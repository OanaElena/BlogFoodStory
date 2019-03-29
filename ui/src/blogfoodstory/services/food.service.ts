import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {
  }

  loadCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/server/food/categories');
  }
}
