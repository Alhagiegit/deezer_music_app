import React, { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import "./SingleGenreMusicList.scss";
import {Artist, ArtistsResponce} from '../../Models/artists'
import { getAllArtistsByGenre } from '../../Services/music';
import MusicCard from '../../components/MusicCard/MusicCard';
import { genreAll } from '../../Mocks/GenreAllArtist';

interface ISingleGenreMusicList {

}

const SingleGenreMusicList: FC<ISingleGenreMusicList> = () => {
    let { id}= useParams() as {id:number | undefined};
    let [searchParam]=useSearchParams()
        const [singleGenre, setSingleGenre]=useState<Artist[]>([])
        let navigate=useNavigate()

    const loadData=useCallback((()=>{
        getAllArtistsByGenre(id as number).then(({data})=>setSingleGenre(data.data));
        //setSingleGenre(genreAll) //mock data
    }),[])
    const goToArtist=(id:number)=>{
        navigate(`/playlist/${id}`);
    }

    useEffect(()=>{
        loadData();
    },[])

return (
    <>
        <main>
            <div className='container-fluid genre'>
                <div className='row m-5'>
                    <h1>Genre {searchParam.get('genre')}</h1>
                    {
                        singleGenre && singleGenre.map((Artist)=>
                            <div   className="col-md-3 mt-3 col col-lg-2">
                                <MusicCard  key={Artist.id}  goTo={goToArtist}  item={Artist}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    </>
)
};

export default SingleGenreMusicList;