import Axios from 'axios';
import React from 'react';
import { Site } from '../models/Site';

export interface Props {
    
}
 
export interface State {
    sites: Site[];
}
 
class Overview extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { sites: [] };
    }

    componentDidMount() {
        
        Axios.get<Site[]>(`${process.env.REACT_APP_API_URL}/sites`)
        .then(res =>  this.setState({sites: res.data}))
        .catch( err => console.log("(Overview.tsx) Error while fetching all Sites..."));

    }
    
    render() { 
        return (
            <>
                {/* Enabled on Mobile */}
                <div className="row hide-on-large-only">
                    <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                </div>

                {/* Enabled on Desktop */}
                <div className="row hide-on-med-and-down">
                    {  
                        this.state.sites && this.state.sites.map((site: Site) => {
                            return ( <div key={site.name} className="col s3">
                                        <div className="col">
                                        <div className="card">
                                            <div className="card-image">
                                            <img src={site.thumbs[0]} alt=""/>
                                            <span className="card-title">{site.name}</span>
                                            </div>
                                            <div className="card-content">
                                            <p>{site.description}</p>
                                            </div>
                                            <div className="card-action">
                                            <a href={site.name}>Link</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div> )
                        })
                    }
                    <div className="col s3">6-columns (one-half)</div>
                    <div className="col s3">6-columns (one-half)</div>
                    <div className="col s3">6-columns (one-half)</div>
                </div>
            </>
        );
    }
}
 
export default Overview;