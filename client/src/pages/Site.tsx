import Axios from 'axios';
import React from 'react';

export interface Props {
    
}
 
export interface State {
    site: Site | undefined;
}
 
class Site extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { site: undefined };
    }

    componentDidMount() {

        //Todo URL not corrext
        Axios.get<Site>(`${process.env.REACT_APP_API_URL}/site`)
        .then(res =>  this.setState({site: res.data}))
        .catch( err => console.log("(Site.tsx) Error while fetching a Site...", err));

    }

    render() { 
        return (<>HEEEEE</>);
    }
}
 
export default Site;