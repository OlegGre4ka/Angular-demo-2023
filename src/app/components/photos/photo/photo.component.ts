import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPhoto } from '../../../models/Photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: IPhoto;
  @Output() showId = new EventEmitter();

  isPhoto = false;

  showPhoto = (id: number) => {
    this.isPhoto = !this.isPhoto

    this.showId.emit(id);
  }

}
