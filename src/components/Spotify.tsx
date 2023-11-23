import React, { useEffect } from 'react'

export default function Spotify() {
    // useEffect(() => {
    //     const getSpotify = async (artistId: string) => {
    //       try {
    
    //         // const apiUrl = `/api/spotify?artistId=${artistId}`;
    //         const api = `/api/spotifyAPI/${artistId}`
    
    //         const response = await fetch(api, {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           }, 
    //         }); 
    
    //         if(response.ok){ 
    //           console.log( response.status, 'js dom status')
    //           console.log(await response.json(), 'js dom coming from ok ');
    //         }else{
    //           console.log(response.status, 'js dom coming from youtube fetch');
    //         }
           
    //       } catch (error) {
    //         console.error("Error in fetch:", error);
    //       } 
    //     };
    
    //     getSpotify("spotify")
        
    //   }, []);
       
    
    
    
  return (
    <div>Spotify</div>
  )
}
