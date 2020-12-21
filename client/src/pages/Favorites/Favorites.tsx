import React from "react"

export interface Props {
    
}
 
export interface State {
    
}
 
class Favorites extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }
    render() { 

        if(localStorage.getItem("key")){
            return ( 
                <>
                <h1>Fav</h1>
                </>
             );
        }else{
            return (
                <>
                <p className="red-text">Please log in to see you favorites!</p>
                </>
            )
        }


    }
}
 
export default Favorites;