import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { Appstate } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() fcounter: any;

  // counter: number;

  counter$ : Observable<number>
  
 // counter$: Observable<{ counter: number }>;

  // counterSubscription: Subscription;

  // constructor( private store: Store<{ counter : counterState }>){}

  constructor( private store: Store<Appstate>){}

  ngOnInit(): void {
    // this.counterSubscription = this.store
    // .select('counter')
    // .subscribe( (data) => {
    //   this.counter = data.counter;
    // });

    // this.counter$ = this.store.select('counter')   

    // this.store.select('counter').subscribe( (data) => {

    // this.store.select(getCounter).subscribe( (counter) => {
    //   console.log("count called");
    //   this.counter = counter
    // })

    this.counter$ = this.store.select(getCounter);

  }

  ngOnDestroy(){
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe();
    // }
  }

}
