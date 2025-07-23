import { createSlice ,PayloadAction} from "@reduxjs/toolkit";


const  initialState:StateTypes={
    loading:false,
    results:[],
    words:[]
}
const rootslice= createSlice({
    name:"roots",
    initialState,
    reducers:{
getwordRequest:(state)=>{
    state.loading=false;
},
getSucess:(state,action:PayloadAction<Words[]>)=>{
    state.loading=false;
    state.words= action.payload
},
getFail:(state,action:PayloadAction<string>)=>{
    state.loading=false;
    state.error=action.payload
}
,
getResult:(state,action:PayloadAction<string[]>)=>{
    state.loading=false
    state.results= action.payload
},
cleatState:(state)=>{
    state.loading=false;
    state.error=undefined;
    state.results=[]
    state.words=[]
}
    },
})
export const {cleatState,getFail,getResult,getSucess,getwordRequest}=rootslice.actions;
export default rootslice.reducer