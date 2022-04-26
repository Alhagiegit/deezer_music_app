import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { singleArtist } from '../../Models/singleArtist';
import { remove } from '../../pages/Albums/store/albums.actions';
import "./PreferedAlbumCard.scss";

interface IPreferedAlbumCard {
 album:singleArtist
}

const PreferedAlbumCard: FC<IPreferedAlbumCard> = ({album}) => {
    const dispatch=useDispatch()
return (
    <div key={album.id} className="card" style={{width: '18rem'}}>
    <img src={album.album.cover_medium} className='card-img-top' alt="" />
    <div className="card-body">
        <h5 className="card-title">{album.album.title}</h5>
        <span onClick={()=>dispatch(remove(album.id))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{color:'red'}} className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg> 
        </span> 
    </div>
</div>
)
};

export default PreferedAlbumCard;