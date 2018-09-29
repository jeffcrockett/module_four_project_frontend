import React from "react";
import { GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: "200px",
      height: "200px"
    };
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
})(MapContainer);
