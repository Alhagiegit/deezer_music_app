import React, { FC } from 'react';
import "./PreferedAlbums.scss";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectAlbum } from '../Albums/store/album.selector';
import PreferedAlbumCard from '../../components/PreferedAlbumCard/PreferedAlbumCard';

interface IPreferedAlbums {

}

const PreferedAlbums: FC<IPreferedAlbums> = () => {
    const navigate=useNavigate()
    let preferedAlbums=useSelector(selectAlbum)

    const goToAlbums=()=>{
        navigate(`/albums`)
    }  


 
    
return (
    <main className='m-auto w-100'>
        <section className=' w-100 container-fluid d-flex flex-column align-items-center p-5'>
            <div className='row  m-5'>
                <div className='align-self-start p-5'>
                    <h4 >{`${preferedAlbums.length} Albums`}</h4>
                </div>
                    { preferedAlbums.length>0 ?
                            preferedAlbums && preferedAlbums.map((album)=>{
                                return(
                                    <PreferedAlbumCard album={album}/>
                                )
                            })
                    :
                    <div className='align-items-center'>
                        <div className='addAlbumButton'>
                            <button onClick={()=>goToAlbums()} className='addAlbumButtonItem'>AGGIUNGI ALBUM</button>  
                        </div>
                    </div>
                    }
            </div>
        </section>
    </main>
)
};

export default PreferedAlbums;