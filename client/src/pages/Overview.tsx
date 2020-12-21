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
                <div key={category} className="row">
                  <h3>{category}</h3>
                  {this.state.sites &&
                    this.state.sites
                      .filter(item => item.category === category)
                      .slice(0, 3).map((site: Site) => {
                        return (
                          <div key={site._id} className="col s12">
                            <div className="card">
                              <div className="card-image">
                                <img src={site.thumbs[0]} alt="" />
                                <span className="card-title">{site.name}</span>
                              </div>
                              <div className="card-content">
                                <p>{site.description}</p>
                              </div>
                              <div className="card-action">
                              <Link to={`/site/${site._id}`}>Link</Link>
                              </div>
                            </div>
                          </div>
                        );
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
        <div className="hide-on-med-and-down">
          {this.state.categories &&
            this.state.categories.map((category: string) => {
              return (
                  <div key={category} className="row">
                    <div className="own">
                      <h3>{category}</h3>
                      {this.state.sites &&
                        this.state.sites
                          .filter((item) => item.category === category)
                          .slice(0, 3)
                          .map((site: Site) => {
                            return (
                              <div key={site._id} className="col s4">
                                <div className="card small">
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
                                  <Link to={`/site/${site._id}`}>Link</Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      <div className="col hover-arrow">
                        <Link to={`/category/${category}`}>
                          <i className="large material-icons white-text">
                            chevron_right
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default Overview;
