import React, {Component} from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import { useState } from "react"




const MapSearch = () => {

    const MY_API_KEY = 'AIzaSyDzs7YUiaVe6rwxqOfJGVI9hen7U6pghow'

    const[search,setSearch] = useState();

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({
            search: "",
            value: geocodedPrediction.formatted_address,
        })
    }

    handleNoResult = () => {
        console.log("No results for ", this.state.search)
    }

    handleStatusUpdate = status => {
        console.log(status)
    }




    return (  
        <div className="map-search">
            

                 <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input type="text" 
                                   required 
                                   value={search} 
                                   placeholder="Enter your address"
                                   onChange={ (e) => setSearch(e.target.value) }/>
                        </ReactGooglePlacesSuggest>
        </div>

    );
}
 
export default MapSearch;