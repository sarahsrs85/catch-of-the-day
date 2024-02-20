import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    goToStore(e) {
        // stop form from submitting
        e.preventDefault();
        console.log('go to store');
        // get text from input
        
        // change page to store input

    }
    render() {
        return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" required defaultValue={getFunName()} />
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;