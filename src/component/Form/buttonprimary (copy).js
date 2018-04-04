import React, { Component } from 'react';
import './button.css';

class ButtonPrimary extends Component {
    constructor(props) {
        super(props)

        this.state={
            test:"demo"
        }

        this.clickTrigger = this.clickTrigger.bind(this);
    }

    clickTrigger(){
        this.setState({
            test:'demo1'
        })
    }
   
    
    render() {
        const {test} = this.state;
         return(
            <div className="demo">
                <p>{test}</p>
                <input type="submit" value="click" onClick={this.clickTrigger} />
            </div>
        );   
    }
}

export default ButtonPrimary;