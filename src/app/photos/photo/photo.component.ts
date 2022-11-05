import { Component, Input } from '@angular/core';

const CLOUD = 'https://alurapic-backend.herokuapp.com/imgs/'

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    private _url = '';
    
    @Input() description='';
    
    @Input() set url(url: string) {
        if (!url.startsWith('data')) {
            this._url = CLOUD + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}