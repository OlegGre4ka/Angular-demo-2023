import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from '../models/Photo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(map(data => {

        let photos: IPhoto[] = [];

        if (data) {
          photos = data.slice(0, 10)
        }
        console.log(photos, "photos in pipe")
        return photos;
      }))
    //  {params: new HttpParams().append("limit", 10)})
  }
}
