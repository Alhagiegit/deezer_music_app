import React, { FC, HtmlHTMLAttributes, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import TableList from '../../components/TableList/TableList';
import { singleArtistMock } from '../../Mocks/singleArtist';
import { singleArtist } from '../../Models/singleArtist';
import { getArtistById } from '../../Services/music';
import "./SingleArtist.scss";

interface ISingleArtist {

}

const SingleArtist: FC<ISingleArtist> = () => {
    let { id}= useParams() as {id:number | undefined};
    let [tracks, setTracks]=useState<singleArtist[]>([])



    const loadData=useCallback((()=>{
        getArtistById(id as number).then(({data})=>setTracks(data.data));
        //setTracks(singleArtistMock) //mock data

    }),[])
  

    useEffect(()=>{
        loadData()
    },[])

return (<>
    <MusicPlayer />
    <main className='artist'>
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
                    {
                        tracks.map((track)=>{
                            return(
                            <TableList key={track.id} track={track}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    </main>
    </>
)
};

export default SingleArtist;