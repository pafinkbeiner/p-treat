import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
 
export interface State {
    categories: string[];
}
 
class CatOverview extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {categories: [] };
    }

    componentDidMount(){

        Axios.get<string[]>(`${process.env.REACT_APP_API_URL}/sites/categories`)
        .then((res) => this.setState({ categories: res.data }))
        .catch((err) =>
          console.log("(Overvie.tsx) Error while fetching all Categories", err)
        );

    }

    render() { 
        return ( 
          <>
          {/* Enabled on Mobile */}
          <div className="hide-on-large-only row">
          {this.state.categories && this.state.categories.map(category => {
                return (
                    <div className="col s6">
                        <Link to={`/category/${category}`}><p className="white-text">{category}</p></Link>
                    </div>
                )
            })}
          </div>
        
          {/* Enabled on Desktop */}
          <div className="hide-on-med-and-down row">
          {this.state.categories && this.state.categories.map(category => {
                return (
                    <div className="col s4">
                        <Link to={`/category/${category}`}><p className="white-text">{category}</p></Link>
                    </div>
                )
            })}
          </div>
        </>
        );
    }
}
 
export default CatOverview;