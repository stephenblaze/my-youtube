import youtubeImg from '../src/image/yp.jpg';
import './App.css'
import SearchBar from './components/searchBar'
import React from 'react';
import Header from './components/Header';
import './components/Header.css';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import './components/Sidebar.css';
import './components/RecommendedVideos.css';
import './components/SidebarRow';
import './components/SidebarRow.css';
import VideoCard from './components/VideoCard';
import './components/VideoCard.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';
import './components/SearchPage.css';
import ChannelRow from './components/ChannelRow';

function App() {
  return (
     <div classname='App'>
       <Router>
         <Header />

         <Switch>
           <Route path="/search/:searchTerm">
           <div className="app_page">
       <Sidebar/>
       <SearchPage />
       </div>
           </Route>
           <Route path="/">
       <div className="app_page">
       <Sidebar/>
       <RecommendedVideos />
       </div>
        </Route>
         </Switch>
       </Router>
       </div>
        
);
}
export default App;
