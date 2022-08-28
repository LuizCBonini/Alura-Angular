import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: object[] = [];

  constructor (photoServiceContainer: PhotoService) {

    photoServiceContainer
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
    
  }

}
