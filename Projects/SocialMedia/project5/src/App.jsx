
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import CreatePost from './Components/CreatePost';

import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './Store/Post-list-store';
function App() {
  const  [selectedTab, setSelactedTab]= useState("");
  

  return (
    <>
    <PostListProvider>
    <div className='app-container'>
    <Sidebar selectedTab={selectedTab} setSelectedTab ={setSelactedTab}></Sidebar>
    <div className='content'>
    <Header></Header>
    {selectedTab==="Home"?( <PostList></PostList>):(<CreatePost></CreatePost>)}
    
   <Footer></Footer>
   </div>
  
   </div>
   </PostListProvider>
    </>
  )
}

export default App
