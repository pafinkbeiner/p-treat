import React from 'react';
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
                            <li>
                                Impressum
                            </li>
                        </ul>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>
                                Privacy
                            </li>
                        </ul>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>
                                Terms of Use
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Footer;