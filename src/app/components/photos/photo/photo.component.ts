import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPhoto } from '../../../models/Photo.model';
import { setFirstLetterUppercase } from './../../../helpers/setTitileUppercase';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: IPhoto;
  @Output() showId = new EventEmitter();

  setFirstLetterUppercase = setFirstLetterUppercase;
  isPhoto = false;

  showPhoto = (id: number) => {
    this.isPhoto = !this.isPhoto

    this.showId.emit(id);
  }

}
