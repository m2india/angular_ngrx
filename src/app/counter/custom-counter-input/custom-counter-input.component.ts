import { Component, OnInit } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

value: number;
// testText : string;
testText$ :  Observable<string>;

  constructor( private store: Store <{ counter: counterState }> ){}

  ngOnInit(): void {
    // this.store.select('counter').subscribe( (data) => {

    // this.store.select(getChannelName).subscribe( (testText) => {
    //   console.log("change channel name");
    //   this.testText = testText
    // })

   this.testText$ = this.store.select(getChannelName);
  }

  onAdd(){
    //console.log(this.value);
    this.store.dispatch( customIncrement( { value: +this.value}) );
  }

  onChangeChannelName(){
    this.store.dispatch( changeChannelName() )
  }
}
