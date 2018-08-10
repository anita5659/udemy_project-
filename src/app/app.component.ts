import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  feature_loaded='recipe';
  onClick(feature : string)
  {
    this.feature_loaded=feature;
  }
  
}
