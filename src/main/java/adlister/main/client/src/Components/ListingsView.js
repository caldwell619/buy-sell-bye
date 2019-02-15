import React, {Component} from "react";
import '../css/ListingsViewStyle.css';
class ListingsView extends Component{
    render(){
        const ads = [{
            title: "Car For Sale",
            description: "98 Civic, decent wear on tires and backseat. 190k miles",
            postingUser: "Chris",
            category: "For Sale"
        }, {
            title: "Glass Vase",
            description: "May be mistaken for something else, but I swear its a vase",
            postingUser: "Sam",
            category: "For Sale"
        } ,{
            title: "Glass Vase",
            description: "May be mistaken for something else, but I swear its a vase",
            postingUser: "Sam",
            category: "For Sale"
        } ,{
            title: "Glass Vase",
            description: "May be mistaken for something else, but I swear its a vase",
            postingUser: "Sam",
            category: "For Sale"
        } ,{
            title: "Glass Vase",
            description: "May be mistaken for something else, but I swear its a vase",
            postingUser: "Sam",
            category: "For Sale"
        }];
        return (
            <div id={'listing-header'}>
                {ads.map(ad => (
                    <div className={'adcard'}>
                        <h2>Title:</h2> {ad.title}<br/>
                        <h2>Description:</h2> {ad.description}<br/>
                        <h2>User:</h2> {ad.postingUser}<br/>
                        <h2>Category:</h2> {ad.category}
                        <hr/>
                    </div>

                ))}
            </div>
        )
    }
}
export default ListingsView;



