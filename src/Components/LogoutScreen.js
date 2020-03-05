import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { onUserLogout } from '../Redux/Actions';


class LogoutScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button
                    title="LOGOUT"
                    titleStyle={{ color: 'white' }}
                    onPress={this.props.onUserLogout}
                />
            </View>
        )
    }
}


export default connect(null, { onUserLogout })(LogoutScreen);