import React from "react";
import Geolocation from "react-geolocation";
import { MDBBtn } from 'mdbreact'
export default () => {
  return (
    <Geolocation
      onSuccess={console.log}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <MDBBtn
           outline
           icon="map-marked-alt"
           size="md"
           onClick={getCurrentPosition}>Get Position</MDBBtn>
          {error &&
            <div>
              {error.message}
            </div>}
          <pre>
            latitude: {latitude} 
            <br/>
            longitude: {longitude}
          </pre>
        </div>}
    />
  );
};
