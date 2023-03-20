import { Component, OnInit } from '@angular/core';
import { IPhoto } from './../../models/Photo.model';
import { PhotosService } from './../../services/photos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  title = 'angular-demo-2023';
  chosenId: number;
  // photosData: IPhoto[] = [];
  photosData$: Observable<IPhoto[]>

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosData$ = this.photosService.getAllPhotos();
    // this.photosService.getAllPhotos().subscribe(
    //   photos => {
    //     this.photosData = photos.slice(0, 20)
    //     console.log(photos, "photos")
    //   }
    // )
  }

  getChosenPhotoId = (id: number) => {
    this.chosenId = id;
  }

}
