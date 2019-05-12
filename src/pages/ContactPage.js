import React from 'react'
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom'

class ContactPage extends React.Component {
    state = { 
        value: ""
     }
handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        value:"",
        isEmpty: true
    })
}

handlechange = (e) => {
    if (e.target.value.length > 0) {
        this.setState({
            value: e.target.value,
            isEmpty: false
        })
    } else {
        this.setState({
            value: e.target.value,
            isEmpty: true
        })
    }
}

    render() { 
        return ( 
            <div className= "contact">
            <form onSubmit = {this.handleSubmit}> 
                <h3>Write to us</h3>
                <textarea value={this.state.value} onChange={this.handlechange} placeholder="write message..." ></textarea>
                <button>Sent</button>
                </form>
                <Prompt 
                when={this.state.value}
                message= "Fill the form before leaving"/>
                
                </div>
         );
    }
}
 
export default ContactPage;