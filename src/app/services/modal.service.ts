import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModal$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isModal$.next(true);
    document.body.style.overflow = "hidden"; 
  }

  close() {
    this.isModal$.next(false)
    document.body.style.overflow = ""; 
  }
}