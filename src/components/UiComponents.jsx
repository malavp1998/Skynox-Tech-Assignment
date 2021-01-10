import React from 'react';
import '../App.css';
import StreamingComponents from './StreamingComponents'
import SearchComponent from './SearchComponent.jsx'
import PopularThisWeekComponents from './PopularThisWeekComponents.jsx'
class UiComponents extends React.Component {

  render() {
    return (
      <div>
        <div style={{ paddingBottom:"0px",marginLeft: "650px",marginRight: "150px" , marginTop: "70px" ,backgroundColor:"white"}}>
        <div style={{ display: "flex" }} >
          <StreamingComponents />
          <SearchComponent />
         
        </div>
         <PopularThisWeekComponents />
        </div>
       
      </div>
      
  


    )
  }
}



export default UiComponents
