import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return ( 
        <div>
            <span><h2>Footer</h2></span>
            <Route path="/" exact render={(props) => (
                
                    <p>Main Page</p>
                
    )}/>
                  <Route path="/:page" exact render={(props) => {
                return (
                    <p>you are on  <span>
                        {props.match.params.page}</span></p>
                )
            }}/>
        </div>
     );
}
 
export default Footer ; 