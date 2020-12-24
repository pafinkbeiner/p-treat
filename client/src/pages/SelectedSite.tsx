import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import { refreshJWT } from '../helper/jwtHelper';
import {Site} from "../models/Site"

export interface Props {

}
 
export interface State {
    site: Site | undefined;
}
 
class SelectedSite extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = { site: undefined };
    }

    fetchData = () => {
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/sites/byId/${this.props.match.params.id}`)
        .then(res =>  this.setState({ site: res.data }) )
        .catch( err => console.log("(Site.tsx) Error while fetching a Site...", err));
    }

    componentDidMount() {
        this.fetchData()
    }

    onLike = () => {
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/exec/like/${this.props.match.params.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
        }).then(res => {this.fetchData(); refreshJWT()})
        .catch( err => console.log("(Site.tsx) Error while fetching a Like...", err));

    }

    onDislike = () => {
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/exec/dislike/${this.props.match.params.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
        }).then(res => {this.fetchData(); refreshJWT()})
        .catch( err => console.log("(Site.tsx) Error while fetching a Dislike...", err));
    }

    executeRef = () => {

        //TODO Send Axios request and increment site.clicks by 1

        let url:string = this.state.site?.url || "";

        if( !( url.includes("https://") || url.includes("http://") ) ){

            url = "https://"+url;            
            window.location.href = url;

        }else{

            window.location.href = url;

        }

    }

    render() { 
        return ( 
            <>
                { this.state.site && 
                    <>
                        <div className="row">
                            <h1>{this.state.site.name}</h1>
                        </div>
                        <div className="row">
                            <div className="col s8">
                                <Slideshow images={this.state.site.thumbs}/>
                            </div>
                            <h5 className="white-text">{this.state.site.subname}</h5>
                            <p className="white-text">{this.state.site.description}</p>
                            <p className="white-text">{this.state.site.review}</p>
                            <button className="btn btn-primary red" onClick={ this.executeRef }>{this.state.site.name}... <i className="material-icons white-text">send</i></button>                          
                            <p className="white-text">Clicks: {this.state.site.clicks}</p>

                        </div>


                        <div className="row">
                            <div className="col s12">
                                    <button className="green btn btn-floating" onClick={this.onLike}><i className="material-icons white-text">thumb_up</i></button>
                                    <button className="red btn btn-floating ml-1" onClick={this.onDislike}><i className="material-icons white-text">thumb_down</i></button>
                                    <div className="white-text"><h5>Likes: {this.state.site.rating.like}</h5></div>
                            </div>

                        </div>

                    </>
                }
            </>
        );
    }
}
 
export default SelectedSite;