import { createAction, props } from "@ngrx/store";

export const setHeaderTitle = createAction('[App] Set Header Title',props<{title:string}>())
export const toggleSidebar = createAction('[App] Toggle Sidebar')
