import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Site } from "../../models/Site";
import "./Category.css";
 
export interface State {
    sites: Site[];
}
 
class Category extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { sites: [] };
    }

    componentDidMount(){

        Axios.get<Site[]>(`${process.env.REACT_APP_API_URL}/sites/byCategory/${this.props.match.params.category}`)
        .then((res) => this.setState({ sites: res.data }) )
        .catch((err) =>
          console.log("(Category.tsx) Error while fetching all Sites...", err)
        );

    }

    render() { 
        return ( 
            <>
            {/* Enabled on Mobile */}
            <div className="hide-on-large-only row">
              <div className="own">
                <h3>{this.props.match.params.category}</h3>
                {this.state.sites &&
                      
                    <div className="col s12">
                       <CustomCard site={this.state.sites[0]}/>
                    </div>
                } 
                {this.state.sites &&
                  this.state.sites
                    .slice(1).map((site: Site) => {
                      return (
                        <div key={site._id} className="col s6">
                         <CustomCard site={site}/>
                      </div>
                      );
                    })} 
              </div>
            </div>
    
            {/* Enabled on Desktop */}
            <div className="hide-on-med-and-down row">
              <div className="own">
                <h3>{this.props.match.params.category}</h3>
                {this.state.sites &&
                      
                    <div className="col s6">
                       <CustomCard site={this.state.sites[0]}/>
                    </div>
                } 
                {this.state.sites &&
                  this.state.sites
                    .slice(1).map((site: Site) => {
                      return (
                        <div key={site._id} className="col s3">
                         <CustomCard site={site}/>
                      </div>
                      );
                    })} 
              </div>
            </div>
          </>
        );
    }
}
 
export default Category;