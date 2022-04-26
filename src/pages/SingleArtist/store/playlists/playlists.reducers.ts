import { createReducer } from "@reduxjs/toolkit";
import React from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { singleArtist } from "../../../../Models/singleArtist";
import { addList, removeList } from "./playlists.actions";


export const playlistReducer=createReducer([] as singleArtist[], builder=>{
    let {setLocalStorageByName, removeLocalStorageByName}=useLocalStorage()
    builder
    .addCase(removeList ,(state, action)=>{
            let obj= state && state.find((item)=>item.id===action.payload)
            obj && removeLocalStorageByName(obj.title)
        return  state.filter((track)=>track.id !== action.payload)
})
    //.addCase(clear,()=>[] as )
    .addCase(addList, (state, action)=>{
            setLocalStorageByName(action.payload.title , action.payload.title)
        return state.map(({id})=>id).includes(action.payload.id) ? state :  [...state, action.payload]
})
})