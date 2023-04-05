import { Component } from '@angular/core';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {from, of} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-template-vars';

  addNewPicture(gallery : GalleryComponent) {
    console.log('added new picture');
    of(gallery.pictures).pipe(
      map(pics => [...pics, gallery.generateImage()]),
      tap(val => gallery.pictures = val)
    ).subscribe(val => console.log(val))
    // gallery.pictures.unshift(gallery.generateImage())
  }

  removeFirstPicture(gallery : GalleryComponent) {
    console.log('removed first picture');
    of(gallery.pictures).pipe(
      tap(_ => gallery.pictures.pop())
    ).subscribe()
    // gallery.pictures.shift();
  }
}
