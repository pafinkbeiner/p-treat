import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

export interface Props {
    
}
 
export interface State {
    
}
 
class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <div className="footer red center white-text">
                <div className="row">
                    <div className="col s4">
                        <ul>
                            <Link className="white-text" to="/imprint">
                                <li>
                                    Imprint
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className="col s4">
                        <ul>
                            <Link className="white-text" to="/privacy">
                                <li>
                                    Privacy
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col s4">
                        <ul>
                            <Link className="white-text" to="/terms">
                                <li>
                                    Terms of Use
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Footer;