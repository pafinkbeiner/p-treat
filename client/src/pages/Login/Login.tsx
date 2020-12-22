import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import { connect } from "react-redux";
import { setActionButton, setLoading } from "../../redux/actions/frontActions";
 
export interface State {
    email: string,
    password: string,
    err: boolean,
    redirect: boolean | undefined;
}
 
class Login extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            err: false,
            redirect: undefined
          };

          this.onSubmit = this.onSubmit.bind(this);
          this.canLogin = this.canLogin.bind(this)
    }

    canLogin() {
        return this.state.email.length === 0 || this.state.password.length === 0;
      }
    
      onSubmit = (e: any) => {
        e.preventDefault();
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/login`, {
            email: this.state.email,
            password: this.state.password,
          })
          .then((auth) => {
            if (auth) {
              localStorage.setItem("key", auth.data.key);
              this.setState({ redirect: true });

              //Redux front changes
              this.props.setLoading(true);
              this.props.setActionButton(false);

            } else {
              this.setState({
                redirect: undefined,
                email: "",
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
          return <Redirect to={"/"} />;
        } else {
          return (
            <div className="background">
              <Link color="white" to="/register" title="Register">
                Go to Register
              </Link>
    
              <div className="login">
                <form className="login-form" onSubmit={this.onSubmit}>
                  <h1 className="mb-3">Login</h1>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      value={this.state.email}
                      placeholder="Email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="form-control"
                      aria-label="Email"
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
    
                  <input className="btn btn-primary" value="Login" type="submit"></input>
                </form>
              </div>
              { this.state.err && <Alert message="Error occured while performing login"/>}
            </div>
          );
        }
    }
}
 
const mapStateToProps = (state:any) => ({
  front: state.front
});

const mapDispatchToProps = {
  setActionButton: setActionButton,
  setLoading: setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);