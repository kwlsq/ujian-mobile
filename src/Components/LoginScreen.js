import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import {
    onInputText,
    onUserLogin,
    loginCheck
} from '../Redux/Actions';
import { StackActions } from '@react-navigation/native';

class LoginScreen extends React.Component {
    componentDidMount() {
        this.props.loginCheck()
        // AsyncStorage.removeItem('username')
    }

    componentDidUpdate() {
        if (AsyncStorage.getItem('username')) {
            this.props.navigation.dispatch(StackActions.replace('tabMenu'))
        }
    }

    onBtnLogin = () => {
        this.props.onUserLogin(this.props.username)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{ color: 'tomato', fontSize: 36, fontWeight: '700' }}>TomatoApp</Text>
                <Icon
                    name="food"
                    type="material-community"
                    size={80}
                    color="tomato"
                />
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='user'
                            type='antdesign'
                            color='tomato'
                            size={24}
                        />
                    }
                    value={this.props.user}
                    onChangeText={(val) => this.props.onInputText(val)}
                />
                <Text>{this.props.username}</Text>
                <Button
                    title='Enter'
                    containerStyle={{ width: '95%', margin: 10 }}
                    buttonStyle={{ backgroundColor: 'tomato', marginTop: 30, borderRadius: 5 }}
                    onPress={this.onBtnLogin}
                />
            </ View>
        )
    }
}

const mapStateToProps = ({ username }) => {
    return { ...username }
}

export default connect(mapStateToProps, { onInputText, onUserLogin, loginCheck })(LoginScreen);