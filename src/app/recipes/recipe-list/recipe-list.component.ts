import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe [] = [
    new Recipe('Test Recipe','Hii this is my first Recipe','https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg'),
    new Recipe('Test Recipe','Hii this is my first Recipe','https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
