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
        .catch( err => console.log("(Site.tsx) Error while fetching a Site...", err));

    }

    onDislike = () => {
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/exec/dislike/${this.props.match.params.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
        })
        .catch( err => console.log("(Site.tsx) Error while fetching a Site...", err));
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
                                <img width="100%" src={this.state.site.thumbs[0]} alt={"img-"+this.state.site.name}/>
                            </div>
                            <div className="col s4">
                                <button className="green btn btn-primary" onClick={this.onLike}>Like</button>
                                <button className="red btn btn-primary ml-1" onClick={this.onDislike}>Dislike</button>
                            </div>
                            <div className="white-text col s6">{this.state.site.rating.like}</div>
                        </div>
                    </>
                }
            </>
        );
    }
}
 
export default SelectedSite;