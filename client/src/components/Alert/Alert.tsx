import React from "react"

export interface Props {
    message?: string;
}
 
export interface State {
    
}
 
class Alert extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }

    componentDidMount(){
        //setTimeout(() => {this.setState({show: false})}, 5000)
    }

    render() { 
        return (             
            <div className="alert alert-warning fixed-top" role="alert">
            { this.props.message ? this.props.message : "An error occured while performing the operation!"}
            </div>
        );
    }
}
 
export default Alert;