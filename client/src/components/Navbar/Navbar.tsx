import React from 'react';
import { Link } from 'react-router-dom';
 
class Navbar extends React.Component {

    render() { 
        return (  
            <nav>
                <div className="nav-wrapper orange">
                    <div className="row">
                        <div className="col"><a href="/" className="brand-logo">pTreat</a></div>
                        {/* Enabled on Mobile */}
                        <ul className="right hide-on-large-only">
                            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                        {/* Enabled on Desktop */}
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html"><i className="material-icons">home</i></a></li>
                            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                            <li><a href="collapsible.html"><i className="material-icons">wb_incandescent</i></a></li>
                            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
            
                </div>
            </nav>
        );
    }
}
 
export default Navbar;