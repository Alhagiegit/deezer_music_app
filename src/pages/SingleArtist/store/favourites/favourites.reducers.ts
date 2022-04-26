import { createReducer } from "@reduxjs/toolkit";
import React from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { singleArtist } from "../../../../Models/singleArtist";
import { add, remove } from "./favourites.actions";


export const favoriteReducer=createReducer([] as singleArtist[], builder=>{
    let {setLocalStorageByName, removeLocalStorageByName}=useLocalStorage()
    builder
    .addCase(remove,(state, action)=>{
        removeLocalStorageByName(action.payload.toString())
        return state.filter((track)=>track.id !== action.payload)
    })
    //.addCase(clear,()=>[] as)
    .addCase(add, (state, action)=>{
        setLocalStorageByName(action.payload.id.toString() , action.payload.id)
       return  state.map(({id})=>id).includes(action.payload.id) ? state :  [...state, action.payload]
    })
})