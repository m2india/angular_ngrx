import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNERT_STATE_NAME } from './state/counter.selectors';



const routes: Routes = [
  {
  path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNERT_STATE_NAME,counterReducer)
  ],
})
export class CounterModule { }
