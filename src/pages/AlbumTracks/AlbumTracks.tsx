import React, { FC, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { AlbumTrack } from '../../Models/albumTrack';
import { getAlbumTracksById } from '../../Services/music';
import "./AlbumTracks.scss";

interface IAlbumTracks {

}

const AlbumTracks: FC<IAlbumTracks> = () => {
    let { id }=useParams();
    const [albumTracks, setAlbumTracks]=useState<AlbumTrack[]>([])


    const loadTracks=(()=>getAlbumTracksById(Number(id)).then(({data:{data}})=>setAlbumTracks(data)))


    useEffect(()=>{
        loadTracks()
    },[])




return (
    <main className='artist'>
        <section className='container m-5'>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">SONG</th>
                    <th scope="col">ARTIST</th>
                    <th scope="col">RANK</th>
                    <th scope="col">DURATION</th>
                    <th scope="col">COVER</th>
                    <th scope="col">POSITION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albumTracks.map((track)=>{
                            return(
                            <tr>
                                <th scope="row">
                                    <div className="d-flex flex-nowrap" >
                                        <a className='mt-auto mb-auto track-title'><h5  >{track.title}</h5></a>
                                    </div>
                                </th>
                                <td>{track.artist.name}</td>
                                <td> {track.rank}</td>
                                <td>{track.rank}</td>
                                <td>{track.duration}</td>
                                <td>{track.explicit_content_cover}</td>
                                <td>{track.track_position}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    </main>
)
};

export default AlbumTracks;