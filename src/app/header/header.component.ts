import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.compnent.html'
})

export class HeaderComponent {
    @Output()  FeatureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this. FeatureSelected.emit(feature);
    }


    // constructor(parameters) {
        
    // }
}