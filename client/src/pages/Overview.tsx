import React from 'react';

export interface Props {
    
}
 
export interface State {
    
}
 
class Overview extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <>
                {/* Enabled on Mobile */}
                <div className="row hide-on-large-only">
                    <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                </div>

                {/* Enabled on Desktop */}
                <div className="row hide-on-med-and-down">
                    <div className="col s3">6-columns (one-half)</div>
                    <div className="col s3">6-columns (one-half)</div>
                    <div className="col s3">6-columns (one-half)</div>
                    <div className="col s3">6-columns (one-half)</div>
                </div>
            </>
        );
    }
}
 
export default Overview;