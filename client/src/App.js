import React from 'react';
import Order from "./pages/order/order";
import './app.scss';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Order />
            </div>
        )
    }
}

export default App;