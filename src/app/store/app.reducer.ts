import { createReducer, on } from "@ngrx/store";
import * as AppActions from './app.actions'

export interface AppState {
  headerTitle:string
}

const initState ={
  headerTitle:'المواد'
}

export const appReducer = createReducer(initState,
  on(AppActions.setHeaderTitle,(state:AppState,action)=>{
    return{
      ...state,
      headerTitle:action.title
    }
  })
)
