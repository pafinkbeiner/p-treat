import React from 'react';
import { Link } from 'react-router-dom';
import { Site } from '../../models/Site';

import "./CustomCard.css"

export interface Props {
    site: Site;
}
 
export interface State {
    
}
 
class CustomCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <div className="custom-card">
        
            <div className="custom-card-description">
              {this.props.site.description}
            </div>

            <img className="custom-card-image" src={this.props.site.thumbs[0]} alt=""/>

            <h3 className="custom-card-title">
                  {this.props.site.name}
            </h3>

            <i className=" custom-card-rating-thumb material-icons red-text">thumb_up</i>

            <p className={`custom-card-rating-text ${ (this.props.site.score < 40) && "red-text"} ${ (this.props.site.score >= 40 && this.props.site.score < 75) && "yellow-text"} ${ (this.props.site.score >= 75) && "green-text"}`}>{this.props.site.score+"%"}</p>

            <Link to={`/site/${this.props.site._id}`} className="custom-card-href">
              <i className="material-icons red-text">send</i>
            </Link>

          </div>
        );
    }
}
 
export default CustomCard;