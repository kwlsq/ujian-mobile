import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/Navigations/MainNavigations';
import reducers from './src/Redux/Reducers';


class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;