import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { singleArtist } from '../../Models/singleArtist';
import { selectAlbum } from '../../pages/Albums/store/album.selector';
import * as albumAction from '../../pages/Albums/store/albums.actions';
import "./AlbumCard.scss";

interface IAlbumCard {
    track:singleArtist;

}

const AlbumCard: FC<IAlbumCard> = ({track}) => {
let preferedAlbum=useSelector(selectAlbum)
    let {getLocalStorageByName,clearLocalStorage}=useLocalStorage()
    const dispatch=useDispatch()


    const checkClick=(id:number, albumId:number)=>{
            if(!getLocalStorageByName(albumId.toString())){
                dispatch(albumAction.add(track))
            }else{
                dispatch(albumAction.remove(id))
            }
    }

    const checkRefresh=(id:number, albumId:number)=>{ 
            if(getLocalStorageByName(albumId) && preferedAlbum.length >0){
                return 'red'
            }else if(getLocalStorageByName(albumId) && preferedAlbum.length <=0){       
                dispatch(albumAction.remove(id))
                clearLocalStorage() 
                return 'lightgray'   
            }else{
                return 'lightgray'
            }
        }




return (
    <div  className="card  bg-dark text-white">
        <img  className="card-img" src={track.album.cover_medium} alt="Card image"/>
        <div className="card-body">
        <h4 className="card-title">{track.album.title}</h4>
            <h5 className="card-title">{track.album.type}</h5>
            <span onClick={()=>checkClick( track.id, track.album.id)}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color={checkRefresh(track.id, track.album.id)} className="bi bi-heart" viewBox="0 0 16 16">
                    <path fillRule='evenodd' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
            </span>
        </div>
    </div>
)
};

export default AlbumCard;