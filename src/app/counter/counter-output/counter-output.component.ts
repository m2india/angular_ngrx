import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() fcounter: any;

  counter: number;
  counter$: Observable<{ counter: number }>;
  counterSubscription: Subscription;

  constructor( private store: Store<{ counter : counterState }>){}

  ngOnInit(): void {
    this.counterSubscription = this.store
    .select('counter')
    .subscribe( (data) => {
      this.counter = data.counter;
    });

    this.counter$ = this.store.select('counter')
  }

  ngOnDestroy(){
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
