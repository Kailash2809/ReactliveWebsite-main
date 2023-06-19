import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <div>

                <footer className="text-light py-2 fixed-bottom" style={{backgroundColor:"#00FF00", width:"100%"}}>

                    <div className="footer-copyright text-center">© 2022 Copyright :
                        <Link to={"https://www.linkedin.com/in/kailash-kumar-sahu-589109212/"} style={{color: "white"}} className='mx-1'>kailash Kumar Sahu</Link>
                    </div>

                </footer>
            </div>
        )
    }
}