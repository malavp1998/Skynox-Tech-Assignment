import React from 'react';
import '../App.css';
import StreamingComponent from './StreamingComponents'
import SearchComponent from './SearchComponent.jsx'
class UiComponents extends React.Component{
    
    render(){
    return(
    <div style={{ marginLeft: "550px", marginTop: "70px" }}>
       <div><h3 style={{marginBottom:"20px"}}>Streaming Now</h3></div>
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
         <SearchComponent />
       </div>
       
    </div>
       
    )
    }
}



export default UiComponents
