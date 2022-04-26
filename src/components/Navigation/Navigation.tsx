import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Favourites from '../../pages/Favourites/Favourites';
import Home from '../../pages/Genres/Genres';
import Playlists from '../../pages/Playlists/Playlists';
import Deezer_logo from "../../assets/deezer.png";
import "./Navigation.scss";
import SingleGenreMusicList from '../../pages/SingleGenreMusicList/SingleGenreMusicList';
import SingleArtist from '../../pages/SingleArtist/SingleArtist';
import AlbumTracks from '../../pages/AlbumTracks/AlbumTracks';
import PreferedAlbums from '../../pages/PreferedAlbums/PreferedAlbums';
import Albums from '../../pages/Albums/Albums';

interface INavigation {

}

const Navigation: FC<INavigation> = () => {
return (
<>
    <div className='main'>
        <div className=" d-flex navigation flex-column flex-shrink-0 p-3  bg-light" style={{width: 270, height: '100vh'}} >
            <div  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4"><img style={{width:'100%', height: 50}} src={Deezer_logo} alt="Deezer logo" /></span>
            </div>
            <hr />
            <ul className=" nav nav-pills flex-column mb-auto" >
                <li className="nav-item">
                    <span  className="nav-link" aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                        </svg>
                        <Link className='navLink' to="/genres">Home</Link>
                    </span>
                </li>   
                <li>
                    <span  className="nav-link ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-vinyl" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
                            <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <Link className='navLink' to="/preferedalbums">Album</Link>
                    </span>
                </li>
                <li>
                    <span  className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list-stars" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                            <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"/>
                        </svg>
                        <Link className='navLink' to="/playlist">Playlist</Link>
                    </span>
                </li>
                <li>
                    <span  className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        <Link className='navLink' to="/favourites">Favourites</Link>
                    </span>
                </li>
            </ul>
            <hr></hr>
        </div>
        <Routes>
                <Route  path='/genres'>
                    <Route index element={<Home />}/>
                    <Route path=':id' element={<SingleGenreMusicList />}/>
                </Route>
                <Route  path='*' element={<Home />}/>     
                <Route path="/favourites" element={<Favourites />}/>
                <Route path="/playlist" >
                    <Route index element={<Playlists/>}/>
                    <Route path=":id" element={<SingleArtist/>}/>
                </Route>
                <Route path="/preferedalbums">
                    <Route index element={<PreferedAlbums/>}/>
                    <Route path=":id" element={<AlbumTracks/>}/>
                </Route>
                <Route path="/albums" element={<Albums/>}/>
        </Routes>
    </div>
  </>
)
};

export default Navigation;