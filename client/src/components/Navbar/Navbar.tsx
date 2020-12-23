import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {connect} from "react-redux"
import { setActionButton, setLoading } from "../../redux/actions/frontActions"
import { useParams } from 'react-router-dom';
import "./Navbar.css";
 
const Navbar = (props:any) => {

    const [breatcrums, setBreatcrums] = useState<string[]>([]);

    let params = useLocation();
    let history = useHistory();

    useEffect(() => {
        if(props.front.loading) props.setLoading(false);
    }, [props.front.loading])

    useEffect(() => {
        let array = params.pathname.split("/");
        array[0] = "home"
        setBreatcrums(array);
    }, [params])

    const toggleActionButton = () => {

        console.log(breatcrums);

        if(props.front.actionButtonOpen){
            props.setActionButton(false);
        }else{
            props.setActionButton(true);
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
    
        localStorage.removeItem("key");

        props.setLoading(false);

        history.push("/");
      };

        return (  
            <nav>
                <div className="nav-wrapper red">
                    <div className="row">
                        <div className="col"><Link to="/" className="brand-logo black-text center">pTreat {props.front.loading && <> - LOADING</>}</Link></div>

                        {
                            props.front.loading && 
                            <div className="progress black">
                                <div className="indeterminate red"></div>
                            </div>
                        }

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

                            props.front.actionButtonOpen &&
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
                                        <Link to="/share" className="btn-floating btn-large grey">
                                            <i className="large material-icons">share</i>
                                        </Link>
                                    </div>
                                    <div className="col s12">  
                                        <Link to="/settings" className="btn-floating btn-large grey">
                                            <i className="large material-icons">settings</i>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        }

                        </div>

                    </div>
            
                </div>
                {
                    breatcrums.length > 1 && breatcrums[1] !== "" &&                 
                    <nav>
                        <div className="nav-wrapper breat">
                        <div className="col s12">
                            {
                                breatcrums.map(crum => {
                                    return (
                                        <Link key={crum} className="breadcrumb" to={ crum == "home" ? "/" : "/"+crum}>
                                            {crum}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        </div>
                    </nav>
                }

            </nav>
        );
}

const mapStateToProps = (state:any) => ({
    front: state.front
});

const mapDispatchToProps = {
    setActionButton: setActionButton,
    setLoading: setLoading
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);