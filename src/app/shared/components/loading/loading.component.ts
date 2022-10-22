import { LoadingType } from './loading-type';
import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./loading.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'ap-loading',
    templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit{

    loading$: Observable<string>;

    constructor(private loadingServcie: LoadingService) {}

    ngOnInit(): void {
        this.loading$ = this.loadingServcie
            .getLoading()
            .pipe(map(loadingType => loadingType.valueOf()))
    }
}