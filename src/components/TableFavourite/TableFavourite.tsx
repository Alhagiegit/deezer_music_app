import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleArtist } from '../../Models/singleArtist';
import * as FavouriteAction from '../../pages/Albums/store/albums.actions';
import "./TableFavourite.scss";

interface ITableFavourite {
    track:singleArtist
}

const TableFavourite: FC<ITableFavourite> = ({track}) => {
    const dispatch=useDispatch()
    let [isPlaying, setIsPlaying]=useState<boolean>(false)
    
    const checkClick=(id:number)=>{
         dispatch(FavouriteAction.remove(id))
    }


    const playpause=(url:string) =>{
        let audio =new Audio(url);
        if(!isPlaying){
            setIsPlaying(true)
            audio.play();
            console.log(isPlaying)
        }else{
            setIsPlaying(false)
            audio.pause();
            console.log(isPlaying)
        }
    }

    
return (
    <tr>
    <th scope="row">
        <div className="d-flex flex-nowrap" >
            <span className="mr card">
                <img className='rounded-circle card-img' src={track.album.cover_small} alt="artist" />
                <a id='audioT' className='card-img-overlay' >D</a>
            </span>
            <a className='mt-auto mb-auto track-title'><h5 onClick={()=>{playpause(track.preview)}} >{track.title}</h5></a>
        </div>
    </th>
    <td>{track.artist.name}</td>
    <td><Link to={`/album/${track.album.id}`}> {track.album.title}</Link> </td>
    <td>{track.rank}</td>
    <td >
        <span  >
            <svg onClick={()=>checkClick(track.id)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" color={'red'} className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>               
        </span>
    </td> 
    <td>{track.duration}</td>
    <td>{track.explicit_content_cover}</td>
</tr>
)
};

export default TableFavourite;