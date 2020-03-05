import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

class RestoDetail extends React.Component {
    render() {
        console.log('ini', this.props.detail.restaurant.photos_url)
        return (
            <View style={{ flex: 1 }}>
                <Header

                    leftComponent={{
                        icon: 'arrow-back',
                        style: { color: 'black', fontSize: 18, fontWeight: '700' },
                        onPress: () => this.props.navigation.goBack(),
                    }}
                    centerComponent={{
                        text: this.props.detail.restaurant.name,
                        style: { color: 'black', fontSize: 15, fontWeight: '700' },

                    }}

                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        borderBottomWidth: 0.5
                    }}
                />
                <Image source={{ uri: this.props.detail.restaurant.photos[0].photo.url }} style={{ height: 200, flex: 1 }} />
                <Text>Rating: {this.props.detail.restaurant.user_rating.aggregate_rating}</Text>
                <Text>Address: {this.props.detail.restaurant.location.address}</Text>
                <Text>Cuisine: {this.props.detail.restaurant.cuisines}</Text>
                <Text>Open: {this.props.detail.restaurant.timings}</Text>
                <Text>Cost: {this.props.detail.restaurant.average_cost_for_two}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ detail }) => {
    return { detail }
}

export default connect(mapStateToProps)(RestoDetail);