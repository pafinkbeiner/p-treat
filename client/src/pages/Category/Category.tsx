import Axios from "axios";
import React from "react";
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

        console.log("Props: ", this.props);

        Axios.get<Site[]>(`${process.env.REACT_APP_API_URL}/sites/byCategory/${this.props.match.params.category}`)
        .then((res) => this.setState({ sites: res.data }) )
        .catch((err) =>
          console.log("(Category.tsx) Error while fetching all Sites...", err)
        );

    }

    render() { 
        return ( <></> );
    }
}
 
export default Category;