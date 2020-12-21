import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export interface Props {}

export interface State {
    actionButton: boolean;
}
 
class Navbar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { actionButton: false };
    }

    toggleActionButton = () => {
        if(this.state.actionButton){
            this.setState({ actionButton: false });
        }else{
            this.setState({ actionButton: true });
        }

    }

    render() { 
        return (  
            <nav>
                <div className="nav-wrapper orange">
                    <div className="row">
                        <div className="col"><Link to="/" className="brand-logo">pTreat</Link></div>
                        {/* Enabled on Mobile */}
                        <ul className="right hide-on-large-only">
                            <li><a href="badges.html"><i className="material-icons">person</i></a></li>
                            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                        {/* Enabled on Desktop */}
                        <ul className="right hide-on-med-and-down">
                            <li><a href="badges.html"><i className="material-icons">person</i></a></li>
                            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                        </ul>

                        <div className="fixed-action-btn">
                        <button onClick={this.toggleActionButton} className="btn-floating btn-large orange">
                            <i className="large material-icons">more_vert</i>
                        </button>
                    
                        {

                            !this.state.actionButton &&
                            <div className="bottom-row">
                            
                                <div className="row">
                                    <div className="col s12">                        
                                        <button onClick={this.toggleActionButton} className="btn-floating btn-large red">
                                            <i className="large material-icons">more_vert</i>
                                        </button>
                                    </div>
                                    <div className="col s12">  
                                        <button onClick={this.toggleActionButton} className="btn-floating btn-large yellow">
                                            <i className="large material-icons">more_vert</i>
                                        </button>
                                    </div>
                                    <div className="col s12">  
                                        <button onClick={this.toggleActionButton} className="btn-floating btn-large green">
                                            <i className="large material-icons">more_vert</i>
                                        </button>
                                    </div>
                                    <div className="col s12">  
                                        <button onClick={this.toggleActionButton} className="btn-floating btn-large blue">
                                            <i className="large material-icons">more_vert</i>
                                        </button>
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
 
export default Navbar;