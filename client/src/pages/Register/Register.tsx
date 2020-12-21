import React from 'react';
import Alert from '../../components/Alert/Alert';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export interface Props {
    
}
 
export interface State {
    username: string,
    password: string,
    mail: string,
    redirect: boolean | undefined,
    err: boolean
}
 
class Register extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          mail: "",
          redirect: undefined,
          err: false
        };
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      canLogin() {
        return this.state.username.length === 0 || this.state.password.length === 0;
      }
    
      onSubmit = (e:any) => {
        e.preventDefault();
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            username: this.state.username,
            password: this.state.password,
            mail: this.state.mail,
          })
          .then((auth) => {
            if (auth) {
              localStorage.setItem("key", auth.data.key);
              this.setState({ redirect: true });
            } else {
              this.setState({
                redirect: undefined,
                username: "",
                password: "",
              });
            }
          })
          .catch((err) => {
            this.setState({err: true})
          });
      };
    render() {
        if (this.state.redirect) {
          return <Redirect to={"/items"} />;
        } else {
          return (
            <div className="background">
              <Link to="/login" title="Login">
                Go to Login
              </Link>
              <div className="login">
                <form className="login-form" onSubmit={this.onSubmit}>
                  <h1 className="mb-3">Register</h1>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      value={this.state.username}
                      placeholder="Username"
                      onChange={(e) => this.setState({ username: e.target.value })}
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
    
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      value={this.state.password}
                      placeholder="Password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                      className="form-control"
                      aria-label="Password"
                      aria-describedby="basic-addon2"
                    />
                  </div>
    
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      value={this.state.mail}
                      placeholder="Mail"
                      onChange={(e) => this.setState({ mail: e.target.value })}
                      className="form-control"
                      aria-label="mail"
                      aria-describedby="basic-addon3"
                    />
                  </div>
    
                  <input className="btn btn-outline-primary" value="Register" type="submit"></input>
                </form>
              </div>
              { this.state.err && <Alert />}
            </div>
          );
        }
      }
}
 
export default Register;