import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { singleArtist } from "../../../../Models/singleArtist";



export const removeList = createAction<number>("playlist/remove");
//export const clear = createAction("playlist/clear");
export const addList = createAction< singleArtist >("playlist/add");