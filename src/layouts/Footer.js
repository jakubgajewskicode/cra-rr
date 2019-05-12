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
                    <>
                    <p>you are on  <span>
                        {props.match.params.page}</span></p>
                        <p>Jesteś na <span>{props.match.url}</span></p>
                        <p>Jesteś na <span>{props.match.path}</span></p>
                        </>
                )
            }}/>

                <Route path="/:page/:idProduct" exact render={(props) => {
        console.log(props);
        return (
          <>
            <p>You are on <span>{props.match.params.idProduct}</span></p>
            <p>You are on<span>{props.match.url}</span></p>
            <p>You are on <span>{props.match.path}</span></p>
          </>
        )
      }} />

        </div>
     );
}
 
export default Footer ; 