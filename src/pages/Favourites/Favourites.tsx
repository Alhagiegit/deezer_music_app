import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TableFavourite from '../../components/TableFavourite/TableFavourite';
import { selectFavorite } from '../SingleArtist/store/favourites/favourites.selector';

import "./Favourites.scss";

interface IFavourites {

}

const Favourites: FC<IFavourites> = () => {
    const favourites=useSelector(selectFavorite);
    const navigate=useNavigate()

    const goToArtists=()=>{
        navigate('/genres/0')
    }

return (
    <section className='container m-5'>
        <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">SONG</th>
                    <th scope="col">ARTIST</th>
                    <th scope="col">ALBUM</th>
                    <th scope="col">RANK</th>
                    <th scope="col">FAVOURITES</th>
                    <th scope="col">PLAYLIST</th>
                    <th scope="col">DURATION</th>
                    <th scope="col">COVER</th>
                    </tr>
                </thead>
                <tbody>
                    { favourites.length<=0 ?
                    
                    <div className="playList-add">
                        <button onClick={()=>goToArtists()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#D3D3D3" className=" bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </button>
                        <p>Aggiungi dei preferiti</p>
                    </div>
                    :
                    favourites && favourites.map((item)=>
                    { 
                    return (<TableFavourite key={item.id} track={item}/>)
                    })
                    }
                </tbody>
            </table>

    </section>
)
};

export default Favourites;