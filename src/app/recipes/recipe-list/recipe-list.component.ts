import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test recipe', 'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg'),
    new Recipe('A Test Recipe', 'This is a simple test recipe', 'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}