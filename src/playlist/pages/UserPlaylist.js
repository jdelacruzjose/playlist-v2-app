import React from 'react';
import { useParams } from 'react-router-dom';
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
  const userId = useParams().userId;
  const loadedPlaylist = DUMMY_PLAYLIST.filter(playlist => playlist.creator === userId);
  return <PlaylistList items={loadedPlaylist} />;

};

export default UserPlaylist;