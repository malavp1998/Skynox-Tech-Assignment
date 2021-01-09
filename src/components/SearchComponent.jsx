import React from 'react';
import '../App.css';
//import ReactDOM from 'react-dom';

class SearchComponent extends React.Component {

    render() {
        return (
            <div > 
                <div style={{ marginLeft: "100px", marginTop: "-53px" }}>
                    <div><h3 style={{ marginBottom: "20px" }}>Advanced Search</h3> </div>
                    <input style={{ borderRadius: "25px" }} class="p-3 mb-2 bg-light text-dark" type="text" placeholder="start wrirting something" name="search" />
                    <button style={{ marginLeft: "10px", padding: "15px 32px" }} type="button" class="btn btn-primary">find</button>
                </div>
            </div>
        )
    }
}



export default SearchComponent