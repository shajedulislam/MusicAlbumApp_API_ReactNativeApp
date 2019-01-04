import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class Albumlist extends Component {

    state = { albums: [] };

     componentWillMount() {
         console.log('componentWillMount in Albumlist');
         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data })); 
     }

    //  renderAlbums() {
    //     return this.state.albums.map(album => 
           
    //        <Text key={album.title}>{album.title}</Text>);
    // }

    renderAlbums() {
         return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
     }

    render() {
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>

    );
    }
}

export default Albumlist;
