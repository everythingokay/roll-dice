import React, { Component } from 'react';
import Dice from './Dice';

class Roll extends Component {
    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one" };
    }
    render() {
        return (
            <div>
                <Dice face="this.state.die1"/>
                <Dice face="this.state.die2"/>
            </div>
        )
    }
};

export default Roll;