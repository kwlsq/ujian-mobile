import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default ({ val }) => {
    console.log('ini vcal', val)
    console.log(val.photos_url)
    return (

        <Card style={{ width: '96%', alignSelf: 'center', flex: 1 }}>
            <CardItem>
                <Left>
                    <Body>
                        <Image source={{ uri: val.photos[0].photo.url }} style={{ height: 350, flex: 1 }} />
                        <View>
                            <Icon name="star" />
                            <Text>{val.user_rating.aggregate_rating}</Text>
                        </View>
                        <Text>{val.name}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    )
}