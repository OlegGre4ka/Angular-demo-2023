import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GuardModalService {

  isGuardModal$ = new BehaviorSubject<boolean>(false);
  confirmCode$ = new BehaviorSubject<string>('');


  openGuardModal() {
    this.isGuardModal$.next(true);
    document.body.style.overflow = "hidden"; 
  }

  closeConfirmGuardModal(code?: string) {
    this.isGuardModal$.next(false);
    code && this.confirmCode$.next(code);
    document.body.style.overflow = ""; 
  }

  closeGuardModal() {
    this.isGuardModal$.next(false);
    this.confirmCode$.next("");
    document.body.style.overflow = ""; 
  }

}