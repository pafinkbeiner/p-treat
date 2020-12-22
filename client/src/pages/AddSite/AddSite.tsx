import React from "react"
import "./AddSite.css"

export interface Props {
    
}
 
export interface State {
    
}
 
class AddSite extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }

    onSubmit = (e:any) => {
        e.preventDefaults();

    }

    render() { 
        return ( 
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate"/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="subname" name="subname" type="text" className="validate"/>
                            <label htmlFor="subname">Subname</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="category" name="category" type="text" className="validate"/>
                            <label htmlFor="category">Category</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="thumbs" name="thumbs" type="text" className="validate"/>
                            <label htmlFor="thumbs">Thumbs</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="description" name="description" type="text" className="validate"/>
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="score" name="score" type="number" className="validate"/>
                            <label htmlFor="score">Score</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="keywords" name="keywords" type="number" className="validate"/>
                            <label htmlFor="keywords">Keywords</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="review" name="review" type="number" className="validate"/>
                            <label htmlFor="review">Review</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="exclusive" name="exclusive" type="number" className="validate"/>
                            <label htmlFor="exclusive">Exclusive</label>
                        </div>
                    </div>

                    <div className="row">
                        <input className="btn btn-primary red ml-1" type="submit" value="Submit"></input>
                    </div>

                </form>
            </div>
        );
    }
}
 
export default AddSite;