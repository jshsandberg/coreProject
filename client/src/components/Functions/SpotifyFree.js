import React, { useState } from "react";
import axios from "axios";

export const getSpotifyAccess = async (song) => {

    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";

    let data = {};

    await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => 
        axios("https://api.spotify.com/v1/search", {
          method: 'GET',
          params: {q: song, type: "track"},
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then(res => {
            data["track"] = res.data.tracks.items.slice(0, 6)
            })
       );
       await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => 
        axios("https://api.spotify.com/v1/search", {
          method: 'GET',
          params: {q: song, type: "album"},
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then(res => {
            data["albums"] = res.data.albums.items.slice(0, 6)
            })
       );
       await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => 
        axios("https://api.spotify.com/v1/search", {
          method: 'GET',
          params: {q: song, type: "artist"},
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then(res => {
            data["artist"] = res.data.artists.items.slice(0, 3)
            })
       );
     return data
};
 
