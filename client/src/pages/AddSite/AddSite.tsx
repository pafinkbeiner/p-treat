import Axios from "axios";
import React from "react"
import { Redirect } from "react-router-dom";
import { Site } from "../../models/Site";
import "./AddSite.css"

export interface Props {
    
}
 
export interface State {
    err: boolean;
    redirect: boolean|undefined;
    name: string;
    subname: string;
    category: string;
    thumbs: string[];
    description: string;
    score: number;
    keywords: string[];
    review:string;
    exclusive: boolean;
    tempValues: {
        keyword: string;
        thumb: string;    
    }
}
 
class AddSite extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            err: false,
            redirect: undefined,
            name: "",
            subname: "",
            category: "",
            thumbs: [],
            description: "",
            score: 0,
            keywords: [],
            review:"",
            exclusive: false,
            tempValues: {
                keyword: "",
                thumb: ""
            }
         };
    }

    onSubmit = (e:any) => {
        e.preventDefault();

        Axios
        .post(`${process.env.REACT_APP_API_URL}/sites/add`, { 
            name: this.state.name,
            subname: this.state.subname,
            category: this.state.category,
            thumbs: this.state.thumbs,
            description: this.state.description,
            score: this.state.score,
            keywords: this.state.keywords,
            review:this.state.review,
            exclusive: this.state.exclusive,
         },{
            headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
        })
        .then((auth) => {
            this.setState({redirect: true});
        })
        .catch((err) => {
          this.setState({err: true})
        });

    }

    render() { 
        return ( 
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name} id="name" type="text" className="validate"/>
                            <label htmlFor="name">Name</label>
                        </div>
  
                        <div className="input-field col s6">
                            <input onChange={(e) => {this.setState({subname: e.target.value})}} value={this.state.subname} id="subname" name="subname" type="text" className="validate"/>
                            <label htmlFor="subname">Subname</label>
                        </div>

                        <div className="input-field col s12">
                            <input onChange={(e) => {this.setState({category: e.target.value})}} value={this.state.category} id="category" name="category" type="text" className="validate"/>
                            <label htmlFor="category">Category</label>
                        </div>
      
                        <div className="input-field col s4">
                            <input onChange={ (e) => { this.setState( (state: State) => { return { ...state, tempValues: { ...state.tempValues, thumb: e.target.value } } } ) } } value={this.state.tempValues.thumb} id="thumbs" name="thumbs" type="text" className="validate"/>
                            <label htmlFor="thumbs">Thumbs</label>
                        </div> 

                        <div className="input-field col s2">
                            <input onClick={ (e) => { 
                                
                                this.setState((state:State) => {
                                    return{
                                        thumbs: [...state.thumbs, this.state.tempValues.thumb]
                                    }
                                    
                                });

                                this.setState( (state: State) => { return { ...state, tempValues: { ...state.tempValues, thumb: "" } } })

                             } } className="btn btn-primary red" type="button" value="Add"/>
                        </div>

                        <div className="input-field col s6">
                            <textarea className="white-text" readOnly={true} value={this.state.thumbs.toString()}></textarea>
                        </div>

                        <div className="input-field col s12">
                            <input onChange={(e) => {this.setState({description: e.target.value})}} value={this.state.description} id="description" name="description" type="text" className="validate"/>
                            <label htmlFor="description">Description</label>
                        </div>

                        <div className="input-field col s12">
                            <input onChange={(e) => {this.setState({score: parseInt( e.target.value ) })}} value={this.state.score} id="score" name="score" type="number" className="validate"/>
                            <label htmlFor="score">Score</label>
                        </div>
      
                        <div className="input-field col s4">
                            <input onChange={ (e) => { this.setState( (state: State) => { return { ...state, tempValues: { ...state.tempValues, keyword: e.target.value } } } ) } } value={this.state.tempValues.keyword} id="keywords" name="keywords" type="text" className="validate"/>
                            <label htmlFor="keywords">Keywords</label>
                        </div> 

                        <div className="input-field col s2">
                            <input onClick={ (e) => { 
                                
                                this.setState((state:State) => {
                                    return{
                                        keywords: [...state.keywords, this.state.tempValues.keyword]
                                    }
                                    
                                });

                                this.setState( (state: State) => { return { ...state, tempValues: { ...state.tempValues, keyword: "" } } })

                             } } className="btn btn-primary red" type="button" value="Add"/>
                        </div>

                        <div className="input-field col s6">
                            <textarea className="white-text" readOnly={true} value={this.state.keywords.toString()}></textarea>
                        </div>
        

                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => {this.setState({review: e.target.value})}} value={this.state.review} id="review" name="review" type="text" className="validate"/>
                            <label htmlFor="review">Review</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <label htmlFor="exclusive">Exclusive </label>
                        <div className="switch">
                            <label>
                            false
                            <input onChange={ (e) => e.target.checked ? this.setState({exclusive: true}) : this.setState({exclusive: false}) } type="checkbox" name="exclusive" id="exclusive"/>
                            <span className="lever"></span>
                            true
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <input className="btn btn-primary red ml-1" type="submit" value="Submit"></input>
                    </div>

                    </div>

                </form>
                { this.state.redirect && <Redirect to="/"/> }
            </div>
        );
    }
}
 
export default AddSite;