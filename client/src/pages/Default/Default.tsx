import React from "react"
export interface Props {
    
}
 
export interface State {
    
}
 
class Default extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( <p className="red-text">Sorry no content here</p> );
    }
}
 
export default Default;