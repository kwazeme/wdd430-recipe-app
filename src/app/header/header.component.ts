import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component ({
    selector: 'app-header',
    templateUrl: './header.compnent.html'
})

export class HeaderComponent {
    // @Output()  FeatureSelected = new EventEmitter<string>();

    // onSelect(feature: string) {
    //     this. FeatureSelected.emit(feature);
    // }


    constructor(
        private dataStorageService: DataStorageService,
    ) { }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }



}