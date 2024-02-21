import React from "react";
import Header from "./header";
import Order from "./order";
import Inventory from "./inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./fish";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    
    addFish = fish => {
        //1. take a copy of state
        const fishes = { ...this.state.fishes }
        //2. add a new fish to our fishes 
        fishes[`fish${Date.now()}`] = fish;
        //3.set new fishes object to state
        this.setState({ fishes })

    }
    loadSampleFishes = () =>{
        this.setState({ fishes: sampleFishes })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                <Header />
                <ul className="fishes">
                {Object.keys(this.state.fishes).map(key => <p>{key}</ p>)}               

                </ul>
                </div>
                <Order />
                <Inventory 
                addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} 
                />
                
            </div>
        )
    }
}

export default App;