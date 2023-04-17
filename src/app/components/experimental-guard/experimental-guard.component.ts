import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getCount, getDate } from 'src/app/reducers/count/count.selectors';
import { increment, decrement, reset } from './../../reducers/count/count.actions';
@Component({
  selector: 'app-experimental-guard',
  templateUrl: './experimental-guard.component.html',
  styleUrls: ['./experimental-guard.component.scss']
})
export class ExperimentalGuardComponent {

  // count$: Observable<number> = this.store$.pipe(select(getCount));
  // date$: Observable<number> = this.store$.pipe(select(getDate));
  count$: Observable<number> = this.store.select(getCount);
  date$: Observable<number> = this.store.select(getDate);
  disabled$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {

  }
  onIncrement() {

    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
