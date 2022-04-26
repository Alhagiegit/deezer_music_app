import React, { FC } from 'react';
import { Artist } from '../../Models/artists';
import { Genre } from '../../Models/genre';
import "./MusicCard.scss";

interface IMusicCard {
 item:Genre | Artist;
 goTo:(_:number, genre:string)=>void
}

const MusicCard: FC<IMusicCard> = ({item, goTo}) => {
return (
    <div onClick={()=>goTo(item.id, item.name)} className="card music-card bg-dark text-white">
        <img  className="card-img" src={item.picture} alt="Card image"/>
        <div className="card-img-overlay d-flex ">
            <h4 className="card-title text-center m-auto">{item.name}</h4>
        </div>
    </div>
)
};

export default MusicCard;