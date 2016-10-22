import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount(){
        const config = {
        apiKey: "AIzaSyAKH-VqQvWmOqovJEzZgCVYIT4RQT0YQIU",
        authDomain: "manager-7f5e9.firebaseapp.com",
        databaseURL: "https://manager-7f5e9.firebaseio.com",
        storageBucket: "manager-7f5e9.appspot.com",
        messagingSenderId: "424838709892"
            };
        firebase.initializeApp(config);
    }


    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={ store }>
                <Router />
            </Provider>
        );
    }
}

export default App;