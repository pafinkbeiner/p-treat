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

    componentDidMount() {

        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/sites/byId/${this.props.match.params.id}`)
        .then(res =>  this.setState({ site: res.data }) )
        .catch( err => console.log("(Site.tsx) Error while fetching a Site...", err));

    }

    render() { 
        return ( 
            <>
                { this.state.site && 
                    <h1>{this.state.site.name}</h1>
                }
            </>
        );
    }
}
 
export default SelectedSite;