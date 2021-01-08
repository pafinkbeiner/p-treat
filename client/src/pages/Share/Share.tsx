import React from "react"
export interface Props {
    
}
 
export interface State {
    
}
 
class Share extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( <p className="red-text">Soon you are able to share the website!</p> );
    }
}
 
export default Share;