import React from "react";

class Properties extends Component {
  constructor() {
    super();
    this.properties = [
      {
        title: "Modern Loft",
        type: "Studio",
        location: { city: "San Francisco", state: "CA", country: "USA" }
      },
      {
        title: "Spacious 2 Bedroom",
        type: "Condo",
        location: { city: "Los Angeles", state: "CA", country: "USA" }
      }
    ];
  }

  render() {
    return (
      <div>
        {" "}
        <Listing listing={this.properties[0]} />{" "}
        <Listing listing={this.properties[1]} />{" "}
      </div>
    );
  }
}

const Listing = (props) => (
  <div>
    {" "}
    <p>Title: {props.listing.title}</p> <p>Type: {props.listing.type}</p>{" "}
    <p>
      {" "}
      Location: {props.listing.location.city}, {props.listing.location.state},{" "}
      {props.listing.location.country}{" "}
    </p>{" "}
  </div>
);

const Listing = ({ listing }) => (
  <div>
    {" "}
    <p>Title: {listing.title}</p> <p>Type: {listing.type}</p>{" "}
    <p>
      {" "}
      Location: {listing.location.city}, {listing.location.state},{" "}
      {listing.location.country}{" "}
    </p>{" "}
  </div>
);

const Listing = ({
  listing: {
    title,
    type,
    location: { city, state, country }
  }
}) => (
  <div>
    {" "}
    <p>Title: {title}</p> <p>Type: {type}</p>{" "}
    <p>
      Location: {city}, {state}, {country}
    </p>{" "}
  </div>
);

class Listing extends Component {  render() {    const {      listing: {        title,        type,        location: {          city,          state,          country        }      }    } = this.props;