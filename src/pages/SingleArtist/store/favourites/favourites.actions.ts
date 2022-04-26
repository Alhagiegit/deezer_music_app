import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { singleArtist } from "../../../../Models/singleArtist";



export const remove = createAction<number>("favorites/remove");
//export const clear = createAction("favorites/clear");
export const add = createAction< singleArtist >("favorite/add");