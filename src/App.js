import React, { Component } from 'react';
import './App.css';
import { Footer } from './Components/footer/footer';
import { Main } from './Components/main/main';
import { AppNav } from './Components/app-nav/app-nav';
import store from './Redux/store';
import { asyncLocalStorage } from 'redux-persist/storages'
import { persistStore } from 'redux-persist';

class App extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        persistStore( store, {
                          storage  : asyncLocalStorage,
                          whitelist: [ 'locations', 'categories' ],
                          blacklist: []
                      },
                      () => {
                          this.setState( { isReady: true } )
                      } );
    }

    render() {
        const { isReady } = this.state;

        if ( !isReady ) {
            return <h1>Loading...</h1>
        }
        return (
            <div className="App">
                <AppNav/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
