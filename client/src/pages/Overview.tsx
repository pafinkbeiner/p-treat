import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Site } from "../models/Site";
import "./Overview.css";

export interface Props {}

export interface State {
  sites: Site[] | undefined;
  categories: string[];
}

class Overview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { sites: undefined, categories: [] };
  }

  componentDidMount() {
    Axios.get<Site[]>(`${process.env.REACT_APP_API_URL}/sites`)
      .then((res) => this.setState({ sites: res.data }))
      .catch((err) =>
        console.log("(Overview.tsx) Error while fetching all Sites...", err)
      );

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
        <div className="hide-on-large-only">
          {this.state.categories &&
            this.state.categories.map((category: string) => {
              return (
                <div className="row">
                  <h1>{category}</h1>
                  {this.state.sites &&
                    this.state.sites.splice(0,3).map((site: Site) => {
                      if (site.category === category) {
                        return (
                          <div key={site.name} className="col s12">
                              <div className="card">
                                <div className="card-image">
                                  <img src={site.thumbs[0]} alt="" />
                                  <span className="card-title">
                                    {site.name}
                                  </span>
                                </div>
                                <div className="card-content">
                                  <p>{site.description}</p>
                                </div>
                                <div className="card-action">
                                  <a href={site.name}>Link</a>
                                </div>
                              </div>
                          </div>
                        );
                      }
                    })}
                    <div className="col s12">
                      <Link to={`/category/${category}`}>
                      <div className="card">
                      <div className="card-content">
                        <p>{">"}</p>
                      </div>
                      </div>
                      </Link>
                    </div>
                </div>
              );
            })}
        </div>

        {/* Enabled on Desktop */}
        {/* <div className="row"></div>
        {this.state.categories && this.state.categories.map((category:string)=> {
            this.renderSites(category).map((element) => {
                if(typeof element === "string"){
                    return(
                    <h1>{element}</h1>
                    );
                } else {
                    return (
                        <div key={element.name} className="col s3">
                          <div className="col">
                            <div className="card">
                              <div className="card-image">
                                <img src={element.thumbs[0]} alt="" />
                                <span className="card-title">{element.name}</span>
                              </div>
                              <div className="card-content">
                                <p>{element.description}</p>
                              </div>
                              <div className="card-action">
                                <a href={site.name}>Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                }
            })
        })} */}

      </>
    );
  }
}

export default Overview;
