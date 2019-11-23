import React from 'react';
import { View, Text } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './app/reducers';

const rootReducer = combineReducers({ ...reducers });
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    console.log(store.getState())
    return <Provider store={store}>
      <View>
        <Text>Hi there</Text>
      </View>
    </Provider>
  }

};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 10,
//     backgroundColor: '#ecf0f1',
//   },
//   button: {
//     marginVertical: 10,
//   },
// });
