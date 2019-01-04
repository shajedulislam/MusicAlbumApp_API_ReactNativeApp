import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
     } = styles;

    return (

        <Card>
            <CardSection>

            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>

            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>Title: {title}</Text>
                <Text>Name: {artist}</Text>
            </View>  
            </CardSection>

            
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
            
        </Card>

        // <Card>
        //     <CardSection>

        //     <View>
        //         <image source={{ uri: props.album.thumbnail_image }} />
        //     </View>

        //     <View style={styles.headerContentStyle}>
        //         <Text>Album Title: {props.album.title}</Text>
        //         <Text>Artist Name: {props.album.artist}</Text>
        //     </View>  
        //     </CardSection>
            
        // </Card>
    );  
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
