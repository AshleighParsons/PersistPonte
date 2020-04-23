import React from 'react'
import GoogleMapReact, { Marker } from 'google-map-react'

const defaultProps = {
  center: {
    lat: -26.1889, 
    lng: 28.0532
  },
  zoom: 18,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCL1VEWkv3sSiL59CBwHbIaR28rWEYKWXY' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {/* <AnyReactComponent
        position={{ lat: -26.1906, lng: 28.0571 }}
        text={'Kreyser Avrora'}
      /> */}
    </GoogleMapReact>
  </div>
)

export default GoogleMap
