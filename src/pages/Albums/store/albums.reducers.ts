import { createReducer } from "@reduxjs/toolkit";
import React from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { singleArtist } from "../../../Models/singleArtist";
import { add, remove } from "./albums.actions";

export const albumsReducer=createReducer([] as singleArtist[], builder=>{
    let {setLocalStorageByName, removeLocalStorageByName}=useLocalStorage()
    builder
    .addCase(remove,(state, action)=>{
        removeLocalStorageByName(action.payload.toString())
   return state.filter((album)=>album.id !== action.payload)
})
    //.addCase(clear,()=>[] as )
    .addCase(add, (state, action)=>{
        console.log(state);
        
        setLocalStorageByName(action.payload.album.id.toString() , action.payload.album.id)
   return  state.map(({id})=>id).includes(action.payload.id) ? state :  [...state, action.payload]
})
})