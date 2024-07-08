import { createReducer, on } from "@ngrx/store";
import * as AppActions from './app.actions'

export interface AppState {
  headerTitle:string;
  toggleSidebar:boolean;
}

const initState ={
  headerTitle:'المواد',
  toggleSidebar:false
}

export const appReducer = createReducer(initState,
  on(AppActions.setHeaderTitle,(state:AppState,action)=>{
    return{
      ...state,
      headerTitle:action.title
    }
  }),
  on(AppActions.toggleSidebar,(state:AppState)=>{
    return{
      ...state,
      toggleSidebar:!state.toggleSidebar
    }
  })
)
