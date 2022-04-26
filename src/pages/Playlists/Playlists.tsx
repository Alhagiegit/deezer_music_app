import React, { FC} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPlaylist } from '../SingleArtist/store/playlists/playlists.selector';
import "./Playlists.scss";

interface IPlaylists {

}

const Playlists: FC<IPlaylists> = () => {
    const navigate=useNavigate()
    const playlists = useSelector(selectPlaylist)

    const goToArtists=()=>{
        navigate('/genres/0')
    }

    
return (
    <section className='container-fluid p-4'>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">SONG</th>
                    <th scope="col">ARTIST</th>
                    <th scope="col">ALBUM</th>
                    <th scope="col">RANK</th>
                    <th scope="col">DURATION</th>
                    <th scope="col">COVER</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        playlists.length<=0 ?  
                    
                    <div className="playList-add">
                        <button onClick={()=>goToArtists()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#D3D3D3" className=" bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </button>
                        <p>Crea una playlist</p>
                    </div>
                    :
                        playlists && playlists.map((track)=>{
                            return(
                            <tr key={track.id}>
                                <th scope="row">
                                    <div className="d-flex flex-nowrap" >
                                        <span className="mr card">
                                            <img className='rounded-circle card-img' src={track.album.cover_small} alt="artist" />
                                        </span>
                                        <a className='mt-auto mb-auto track-title'><h5  >{track.title}</h5></a>
                                    </div>
                                </th>
                                <td>{track.artist.name}</td>
                                <td>{track.album.title}</td>
                                <td>{track.rank}</td>
                                <td>{track.duration}</td>
                                <td>{track.explicit_content_cover}</td>
                            </tr>
                            )
                        })             
                    }
                
                </tbody>
            </table>
    </section>
)
};

export default Playlists;