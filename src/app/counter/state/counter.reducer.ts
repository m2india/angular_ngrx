import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";
import { createReducer, on } from "@ngrx/store";


const _counterReducer = createReducer(
    initialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncrement, (state, action) => {
        // console.log(action);
       return {
        ...state,
        counter: state.counter + action.value
       }; 
    }),
    on(changeChannelName, (state) =>{
        return{
            ...state,
            testText : "Change text"
        }
    })
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}