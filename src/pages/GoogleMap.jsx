import React from 'react'
import GoogleMapReact, { Marker } from 'google-map-react'

import Header from '../components/Navbar'

const defaultProps = {
  center: {
    lat: -26.1889, 
    lng: 28.0532
  },
  zoom: 17,
}

const AnyReactComponent = ({ text }) => <div className="label">{text}</div>

const GoogleMap = () => (
  <>
      <Header />
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_KEY' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
            lat={-26.188265}
            lng={28.055669}
            text="Berea Able Supermarket"
      />
      <AnyReactComponent
        lat= {-26.1906}
        lng= {28.0571}
        text={'Ponte City Apartments'}
      />
      <AnyReactComponent
        lat= {-26.186954}
        lng= {28.049483}
        text={'Telkom Tower'}
      />
       <AnyReactComponent
        lat= {-26.189047}
        lng= {28.056414}
        text={'Lily Avenue - Hijacked Houses'}
      />
    </GoogleMapReact>
  </div>
  </>
)

export default GoogleMap
