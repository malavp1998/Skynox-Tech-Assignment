import React from 'react';
import '../App.css';


class StreamingComponent extends React.Component {

    render() {
        return (
            <div>
            <img style={{ marginRight:"5px",borderRadius:"30%"  , borderStyle: "solid" , borderColor: "coral", padding:"1px 1px"}} src={this.props.imgLink} width="50" height="60"  alt="Cinque Terre" />
           </div>
        )
    }
}
export default StreamingComponent