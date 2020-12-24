import React from "react"
import axios from "axios"
import { Site } from "../../models/Site";
import { User } from "../../models/User";
import CustomCard from "../../components/CustomCard/CustomCard";

export interface Props {
    
}
 
export interface State {
    favorites: Site[];
}
 
class Favorites extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = { favorites: [] };
    }

    async componentDidMount(){

        const res: User = await (await axios.get<User>(`${process.env.REACT_APP_API_URL}/decodeJWT`, {headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }})).data;
        
        res.liked.map((like: string) => {

            axios.get<Site>(`${process.env.REACT_APP_API_URL}/sites/byId/${like}`).then(site => {

                this.setState((state:State) => {
                    return{
                        favorites: [...state.favorites, site.data]
                    }
                    
                });

            });

        })
        
    }

    render() { 

        if(localStorage.getItem("key")){
            return ( 
                <>
                    <div className="row">
                        {
                            this.state.favorites.map((fav: Site) => {
                                return (
                                    <div className="col s6">
                                        <CustomCard site={fav} />
                                    </div>
                                )
                            })
                        }
                    </div>
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