import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { getZomato, zomatoDetail } from '../Redux/Actions'
import Card from './Card';

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getZomato()
    }

    onCardClick = (item) => {
        console.log('terpencet')
        this.props.zomatoDetail(item)
        this.props.navigation.navigate('Detail')
    }

    renderCard = () => {
        return this.props.zomato.map((item, index) => {
            console.log('item nih')
            console.log(item.restaurant.name)
            return (
                <TouchableWithoutFeedback
                    onPress={() => this.onCardClick(item)}
                    key={index}

                >
                    <View>
                        <Card val={item.restaurant} />
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'ticket', type: 'entypo', color: 'white' }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : -25,
                        elevation: 2
                    }}
                    rightComponent={{ text: `Hallo,${this.props.username.user}`, style: { color: 'white', fontWeight: '700' } }}
                >
                </Header>
                <View style={styles.iconwrapper}>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="credit-card"
                        />
                        <Text>Credit</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="local-drink"
                        />
                        <Text>Variant</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="restaurant"
                        />
                        <Text>Recipe</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="location-on"
                        />
                        <Text>Location</Text>
                    </View>

                    <View style={styles.iconStyle}>
                        <Icon
                            name="shopping-cart"
                        />
                        <Text>Cart</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="local-pizza"
                        />
                        <Text>Pizza</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="hamburger"
                            type="material-community"
                        />
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon
                            name="more-horiz"
                        />
                        <Text>More</Text>
                    </View>
                </View>
                <ScrollView
                >
                    {this.renderCard()}
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        borderColor: 'tomato',
        borderWidth: 1,
        width: 50,
        borderRadius: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'

    },
    iconwrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    }
})

const mapStateToProps = ({ username, zomato }) => {
    return { username, zomato }
}

export default connect(mapStateToProps, { getZomato, zomatoDetail })(HomeScreen);