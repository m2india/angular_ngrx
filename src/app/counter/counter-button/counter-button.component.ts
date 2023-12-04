import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  /*
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  */
  constructor(private store: Store<{ counter: counterState} >){}

  ngOnInit(): void {
    
  }

  /*
    onIncrement(){
      this.increment.emit();
    }

    onDecrement(){
      this.decrement.emit();
    }

    onReset(){
      this.reset.emit();
    }
  */

    onIncrement(){
      this.store.dispatch(increment())
    }

    onDecrement(){
      this.store.dispatch(decrement())
    }

    onReset(){
      this.store.dispatch(reset())
    }

}
