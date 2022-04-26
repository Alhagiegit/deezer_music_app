import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleArtist } from '../../Models/singleArtist';
import "./TableList.scss";
import * as PlaylistAction from '../../pages/SingleArtist/store/playlists/playlists.actions';
import  * as FavouriteAction from '../../pages/SingleArtist/store/favourites/favourites.actions';
import { selectFavorite } from '../../pages/SingleArtist/store/favourites/favourites.selector';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { selectPlaylist } from '../../pages/SingleArtist/store/playlists/playlists.selector';
import { setTrack } from '../../musicPlayer/musicPlayer.reducers';


interface ITableList {
    track:singleArtist
}

const TableList: FC<ITableList> = ({track}) => {

    const favourites=useSelector(selectFavorite);
    const playlists=useSelector(selectPlaylist);
    let [isPlaying, setIsPlaying]=useState<boolean>(false)
    const dispatch=useDispatch()
    let {getLocalStorageByName,clearLocalStorage}=useLocalStorage()

    const checkClick=(id:number, name:'favourite' | 'playlist', trackLocal?:string)=>{
        if(name==='favourite'){
            if(!getLocalStorageByName(id.toString())){
                dispatch(FavouriteAction.add(track))
            }else{
                dispatch(FavouriteAction.remove(id))
            }
        }else if(name==='playlist'){
            if(!getLocalStorageByName(trackLocal)){
                console.log(getLocalStorageByName(track.title));
                
                dispatch(PlaylistAction.addList(track))
            }else{
                dispatch(PlaylistAction.removeList(id))
            }
        }else{
            return
        }
    }


    const checkRefresh=(id:number, name:'favourite' | 'playlist', trackLocal?:string)=>{ 
        if(name==='favourite'){
            if(getLocalStorageByName(track.id.toString()) && favourites.length >0){
                return 'red'
            }else if(getLocalStorageByName(track.id.toString()) && favourites.length <=0){       
                dispatch(FavouriteAction.remove(id))
                clearLocalStorage() 
                return 'lightgray'   
            }else{
                return 'lightgray'
            }
        }else if(name==='playlist'){
            if(getLocalStorageByName(trackLocal) && playlists.length > 0){
                return 'red'
            }else if(getLocalStorageByName(trackLocal) && playlists.length <= 0){       
                dispatch(PlaylistAction.removeList(id))
                clearLocalStorage()
                return  'lightgray'
            }else{
                return  'lightgray'
            }
        }
    }

    const playpause=(url:string) =>{
        dispatch(setTrack(url));
    }


 

return (
        <tr>
            <th scope="row">
                <div className="d-flex flex-nowrap" >
                    <span className="mr card">
                        <img className='rounded-circle card-img' src={track.album.cover_small} alt="artist" />
                        <span id='audioT' className='card-img-overlay' >D</span>
                    </span>
                    <a className='mt-auto mb-auto track-title' ><h5 onClick={()=>{playpause(track.preview)}} >{track.title}</h5></a>
                </div>
            </th>
            <td>{track.artist.name}</td>
            <td><Link to={`/album/${track.album.id}`}> {track.album.title}</Link> </td>
            <td>{track.rank}</td>
            <td >
                <span onClick={()=>checkClick(track.id, 'favourite')} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color={ checkRefresh(track.id, 'favourite') } className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>               
                </span>
            </td>
            <td >
                <span onClick={()=>checkClick(track.id, 'playlist', track.title)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color={ checkRefresh(track.id, 'playlist', track.title) } className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>               
                </span>
            </td>   
            <td>{track.duration}</td>
            <td>{track.explicit_content_cover}</td>
        </tr>
)
};

export default TableList;