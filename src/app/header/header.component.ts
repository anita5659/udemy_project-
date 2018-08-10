import { Component, EventEmitter, Output } from '@angular/core';
@Component({
selector : "app-header",
templateUrl : "./header.component.html",
styleUrls : ["./header.component.css"]
})
export class HeaderComponent{

   @Output() feature_selected = new EventEmitter<string>();
    onSelect(feature: string)
    {
        this.feature_selected.emit(feature);
    }
}