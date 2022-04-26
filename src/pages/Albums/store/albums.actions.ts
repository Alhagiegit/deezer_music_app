import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { Album } from "../../../Models/album";
import { singleArtist } from "../../../Models/singleArtist";



export const remove = createAction<number>("album/remove");
//export const clear = createAction("album/clear");
export const add = createAction< singleArtist>("album/add");
