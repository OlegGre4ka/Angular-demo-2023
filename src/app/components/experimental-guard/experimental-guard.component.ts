import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDate } from 'src/app/reducers/count/count.selectors';

@Component({
  selector: 'app-experimental-guard',
  templateUrl: './experimental-guard.component.html',
  styleUrls: ['./experimental-guard.component.scss']
})
export class ExperimentalGuardComponent {

  count$: Observable<number> = this.store$.pipe(select(selectCount));
  date$: Observable<number> = this.store$.pipe(select(selectDate));


  constructor(private store$: Store) {

  }
  increase() {
    // this.count++;
  }
  decrease() {
    // this.count--;
  }
  clear() {
    // this.count = 0;
  }

}
