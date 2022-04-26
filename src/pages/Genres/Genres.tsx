import axios from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Artist, ArtistsResponce } from '../../Models/artists';
import "./Genres.scss";
import {getAllArtistsByGenre, getAllGenre}  from '../../Services/music'
import {Genre} from '../../Models/genre'
import MusicCard from '../../components/MusicCard/MusicCard';
import { useNavigate, } from 'react-router-dom';
import { genre } from '../../Mocks/singleGenre';

interface IHome {

}

const Home: FC<IHome> = () => {
    let [music, setMusisc]=useState<Artist[]>([])
    let [genres, setGenres]=useState<Genre[]>([])
    let navigate=useNavigate()


    const goToGenre=(id:number, genre:string)=>{
        navigate(`/genres/${id}?genre=${genre}`, {replace:true});
    }

    
    const getGenre= useCallback(()=>{
        getAllGenre().then(({data})=>setGenres(data.data))
        //setGenres(genre); //mock data
    },[])

  

    useEffect(()=>{
        getGenre()
    },[])

return (
    <>
        <main>
            <div className='container-fluid genre'>
                <div className='row m-5'>
                    <h1>Genres</h1>
                    {
                        genres && genres.map((genre, index)=>
                            <div key={index}  className="col-md-3 mt-3 col col-lg-2">
                                <MusicCard  key={genre.id} goTo={goToGenre}  item={genre}/>
                            </div>

                                // <div key={index}  className="col">
                                //    <MusicCard  key={genre.id} goTo={goToGenre}  item={genre}/>
                                // </div>


                        )
                    }
                </div>
            </div>
        </main>
    </>
)
};

export default Home;