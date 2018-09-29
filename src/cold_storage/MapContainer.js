import React from "react";
import { GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyCzEZmyQvVoarnp7tMuWYmpDd95t5MLXm4
})(Container);
