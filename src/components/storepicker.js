import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
   
    myInput = React.createRef();

    goToStore = event => {
        // stop form from submitting
        event.preventDefault();
        console.log('go to store');
        // get text from input
        const storeName = this.myInput.current.value;
        // change page to store id from input
        this.props.history.push(`/store/${storeName}`);

    }
    render() {
        return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
                type="text" 
                ref={this.myInput}
                required 
                defaultValue={getFunName()}
            />
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;