import Axios from 'axios';
import React from 'react';
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
        }).then(res => {this.fetchData()})
        .catch( err => console.log("(Site.tsx) Error while fetching a Like...", err));

    }

    onDislike = () => {
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/exec/dislike/${this.props.match.params.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
        }).then(res => {this.fetchData()})
        .catch( err => console.log("(Site.tsx) Error while fetching a Dislike...", err));
        this.fetchData()
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
                                <img className="br-5" width="100%" src={this.state.site.thumbs[0]} alt={"img-"+this.state.site.name}/>
                            </div>
                            <h5 className="white-text">{this.state.site.subname}</h5>
                            <p className="white-text">{this.state.site.description}</p>
                            <p className="white-text">{this.state.site.review}</p>

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