import axios from "axios";
import React from "react";
import {stage} from '../enviroments/stage'
import { Album } from "../Models/album";
import { AlbumTrack, AlbumTrackResponce } from "../Models/albumTrack";
import { ArtistsResponce } from "../Models/artists";
import { GenreResponce } from "../Models/genre";
import { SearchArtistResponce } from "../Models/searcArtist";
import { singleArtist, singleArtistResponce } from "../Models/singleArtist";
const {baseUrl}=stage


    const getArtistById=(id:number)=>axios.get<singleArtistResponce > (`${baseUrl}/artist/${id}/top?limit=50`);
    const getAlbumById=(id:number)=>axios.get<Album>(`${baseUrl}/album/${id}`);
    const getAlbumTracksById=(id:number)=>axios.get<AlbumTrackResponce>(`${baseUrl}/album/${id}/tracks`);
    const searchArtist=(name:string)=>axios.get<SearchArtistResponce>(`${baseUrl}/search?q=${name}`);
    const getAllArtistsByGenre=(id:number)=>axios.get<ArtistsResponce>(`${baseUrl}/genre/${id}/artists`);
    const getAllGenre=()=>axios.get<GenreResponce>(`${baseUrl}/genre`);

export  {getAlbumById, getAlbumTracksById, getAllArtistsByGenre, getArtistById, searchArtist, getAllGenre}