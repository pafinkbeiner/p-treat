import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./Navbar.css";

export interface Props {}

export interface State {
    actionButton: boolean;
    redirect: boolean;
}
 
class Navbar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { actionButton: false, redirect: false };
    }

    toggleActionButton = () => {
        if(this.state.actionButton){
            this.setState({ actionButton: false });
        }else{
            this.setState({ actionButton: true });
        }
    }


    onSubmit = (e: any) => {
        e.preventDefault();
    
        localStorage.removeItem("key");
    
        this.setState({ redirect: true });
      };

    render() { 
        if (this.state.redirect !== false) {
            return <Redirect to={"/"} />;
          } else {
        return (  
            <nav>
                <div className="nav-wrapper red">
                    <div className="row">
                        <div className="col"><Link to="/" className="brand-logo black-text center">pTreat</Link></div>
                        {/* Enabled on Mobile */}
                        {
                            localStorage.getItem("key") &&
                            <ul className="right hide-on-large-only">
                                {/* <li><a href="badges.html"><i className="material-icons">person</i></a></li>*/}
                                <li onClick={this.onSubmit}><i className="material-icons black-text">exit_to_app</i></li>
                            </ul>
                        }
                        {/* Enabled on Desktop */}
                        {
                             localStorage.getItem("key") &&
                            <ul className="right hide-on-med-and-down">
                                {/* <li><a href="badges.html"><i className="material-icons">person</i></a></li>*/}
                                <li><a href="mobile.html"><i className="material-icons">exit_to_app</i></a></li> 
                            </ul>
                        }

                        <div className="fixed-action-btn">
                        <button onClick={this.toggleActionButton} className="btn-floating btn-large red">
                            <i className="large material-icons">menu</i>
                        </button>
                    
                        {

                            this.state.actionButton &&
                            <div className="bottom-row">
                            
                                <div className="row">
                                    <div className="col s12">                        
                                        <Link to="/kajsdlkj" className="btn-floating btn-large grey">
                                            <i className="large material-icons">person</i>
                                        </Link>
                                    </div>
                                    <div className="col s12">  
                                        <Link to="/kajsdlkj" className="btn-floating btn-large grey">
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
    }
}
 
export default Navbar;