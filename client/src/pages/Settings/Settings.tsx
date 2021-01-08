import React from "react"
export interface Props {
    
}
 
export interface State {
    
}
 
class Settings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( <p className="red-text">Settings get added soon!</p> );
    }
}
 
export default Settings;