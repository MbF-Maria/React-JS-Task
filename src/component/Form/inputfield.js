import React, { Component } from 'react';
import './inputfield.css';

class TextFieldGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fieldNotEmpty: false,
    };
    this.keyUpEvent = this.keyUpEvent.bind(this);
  }
  keyUpEvent(e) {
    if (e.target.value !== '') {
      this.setState({
        fieldNotEmpty: true,
      });
    } else {
      this.setState({
        fieldNotEmpty: false,
      });
    }
  }
  render() {
  	const { placeholder, style, type, name, onChange, label} = this.props;
    return(
		  <div>
	       <input name={name} type={type} placeholder={placeholder} style={style} onChange={onChange}/>	
          <label>
            {label}
          </label>	     
	    </div>
    );   
  }
}

export default TextFieldGroup;