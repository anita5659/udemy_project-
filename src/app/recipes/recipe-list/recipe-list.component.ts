import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe [] = [
    new Recipe('Test Recipe','Hii this is my first Recipe','https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg'),
    new Recipe('Another Test Recipe','Hii this is my first Recipe','https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg')  
  ];
  @Output() recipe_was_selected = new EventEmitter<Recipe>();
  constructor() { }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipe_was_selected.emit(recipe);
  }

  ngOnInit() {
  }

}
