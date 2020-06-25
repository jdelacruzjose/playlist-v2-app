import React from 'react';
import PlaylistList from '../components/PlaylistList';

const DUMMY_PLAYLIST = [
  {
    id: 'p1',
    title: 'Art Deco',
    description: 'Miami Art',
    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_751,c_fill,g_auto,h_422,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170113165157-art-deco-ocean-drive.jpg',
    creator: 'u1'
  },

  {
    id: 'p2',
    title: 'Art Deco',
    description: 'Miami Art',
    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_751,c_fill,g_auto,h_422,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170113165157-art-deco-ocean-drive.jpg',
    creator: 'u2'
  }
];


const UserPlaylist = () =>{
  return <PlaylistList items={DUMMY_PLAYLIST} />;

};

export default UserPlaylist;