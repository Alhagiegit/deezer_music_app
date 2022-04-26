import React, { FC, useEffect, useState } from 'react';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import { genreAll } from '../../Mocks/GenreAllArtist';
import { singleArtistMock } from '../../Mocks/singleArtist';
import { Album } from '../../Models/album';
import { Artist } from '../../Models/artists';
import { singleArtist, singleArtistResponce } from '../../Models/singleArtist';
import { getAllArtistsByGenre, getArtistById } from '../../Services/music';
import "./Albums.scss";

interface IAlbums {

}

const Albums: FC<IAlbums> = () => {
    let [artists, setArtists]=useState<singleArtist[]>([])

    const loadData=(()=>{
        getArtistById(7371074).then(({data:{data}})=>setArtists(data));
        //setArtists(singleArtistMock) //mock data
    })

    useEffect(()=>{
        loadData()
    }, [])
return (
    <section className='container albums'>
        <div className='row  m-5'>
                    <h1>Albums</h1>
                    { 
                    artists && artists.map((item)=>{
                    return( 
                            <div   className="col-md-3 mt-3 col col-lg-2">
                                
                                <AlbumCard key={item.id} track={item}/>
                            </div>
                            )

                    }) 
                    }
        </div>
    </section>
)
};

export default Albums;