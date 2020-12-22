import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Navbar.css";
 
const Navbar = () => {

    let history = useHistory();

    const [actionButton, setActionButton] = useState(false)
    const [refresh, setRefresh] = useState(false);


    const toggleActionButton = () => {
        if(actionButton){
            setActionButton(false);
        }else{
            setActionButton(true);
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
    
        localStorage.removeItem("key");
    
        setRefresh(true)

        history.push("/");
      };

        return (  
            <nav>
                <div className="nav-wrapper red">
                    <div className="row">
                        <div className="col"><Link to="/" className="brand-logo black-text center">pTreat</Link></div>
                        {/* Enabled on Mobile */}
                        {
                            localStorage.getItem("key") !== undefined &&
                            <ul className="right hide-on-large-only mr-1">
                                <li onClick={onSubmit}><a><i className="material-icons black-text">exit_to_app</i></a></li>
                            </ul>
                        }
                        {/* Enabled on Desktop */}
                        {
                             localStorage.getItem("key") &&
                            <ul className="right hide-on-med-and-down mr-1">
                                <li onClick={onSubmit}><a><i className="material-icons black-text">exit_to_app</i></a></li> 
                            </ul>
                        }

                        <div className="fixed-action-btn">
                        <button onClick={toggleActionButton} className="btn-floating btn-large red">
                            <i className="large material-icons">menu</i>
                        </button>
                    
                        {

                            actionButton &&
                            <div className="bottom-row">
                            
                                <div className="row">

                                    {/* Login Redirect */}

                                    {localStorage.getItem("key") ? 

                                    <div className="col s12">                        
                                        <button onClick={onSubmit} className="btn-floating btn-large grey">
                                            <i className="large material-icons">exit_to_app</i>
                                        </button>
                                    </div>
                                    :
                                    <div className="col s12">                        
                                        <Link to="/login" className="btn-floating btn-large grey">
                                            <i className="large material-icons">person</i>
                                        </Link>
                                    </div>
                                    }
  
                                    <div className="col s12">  
                                        <Link to="/favorites" className="btn-floating btn-large grey">
                                            <i className="large material-icons">favorite</i>
                                        </Link>
                                    </div>
                                    <div className="col s12">  
                                        <Link to="/kajsdlkj" className="btn-floating btn-large grey">
                                            <i className="large material-icons">share</i>
                                        </Link>
                                    </div>
                                    <div className="col s12">  
                                        <Link to="/kajsdlkj" className="btn-floating btn-large grey">
                                            <i className="large material-icons">settings</i>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        }

                        </div>

                    </div>
            
                </div>
            </nav>
        );
}
 
export default Navbar;