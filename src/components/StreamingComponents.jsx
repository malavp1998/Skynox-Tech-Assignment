import React from 'react';
import '../App.css';
import StreamingComponent from './StreamingComponent'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'
import image10 from './images/image10.png'
class StreamingComponents extends React.Component {

    render() {
        return (<div>
            <div><h3 style={{ marginBottom: "20px" }}>Streaming Now</h3></div>
            <div style={{ display: "flex" }} >
                <div>< StreamingComponent imgLink={image7} /></div>
                <div>< StreamingComponent imgLink={image5} /></div>
                <div>< StreamingComponent imgLink={image6} /></div>
                <div>< StreamingComponent imgLink={image7} /></div>
                <div>< StreamingComponent imgLink={image8} /></div>
                <div>< StreamingComponent imgLink={image9} /></div>
                <div>< StreamingComponent imgLink={image10} /></div>
                <div>< StreamingComponent imgLink={image5} /></div>
                <div>< StreamingComponent imgLink={image7} /></div>
            </div>
        </div>


        )
    }
}



export default StreamingComponents








// import React from 'react';
// import ReactDOM from 'react-dom';

// class StreamingComponent extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;

// }
// }

// export default StreamingComponent;