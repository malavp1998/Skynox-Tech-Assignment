import React from 'react';
import '../App.css';
import StreamingComponent from './StreamingComponent'

class StreamingComponents extends React.Component {

    render() {
        return (<div>
            <div><h3 style={{ marginBottom: "20px" }}>Streaming Now</h3></div>
            <div style={{ display: "flex" }} >
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
                <div>< StreamingComponent imgLink="//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" /></div>
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