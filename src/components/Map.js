import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components"

import Logo from "../assets/images/logo.png"

const Container = styled.div`
  height: 87vh;
  width: 100%;
  margin-top: 1em;
  img {
    height: 40px;
  }
` 

const AnyReactComponent = ({  img_src }) => <div><img src={img_src} className="YOUR-CLASS-NAME" /></div>;

const InfoWindow = props => (
  props.show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null
)

const Marker = props => (
  <React.Fragment>
    <div
      style={{
        border: "5px solid white",
        borderRadius: 20,
        height: 20,
        width: 20
      }}
    />
    <InfoWindow
      show={props.show}
    />
  </React.Fragment>
)

const defaultProps = {
  center: {
    lat: -26.1889, 
    lng: 28.0532
  },
  zoom: 18,
}

class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [],
        show: false
    }
  }

  componentDidMount(){
    this.setState({
      markers: [
        {lat: -26.1904, lng: 28.0571, img_src: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-home-6.png&r=2&g=48&b=71"},
        {lat: -26.188277, lng: 28.055641, img_src: "../assets/images/logo.png" },
        {lat: -26.189047, lng: 28.056414,  img_src: {Logo}}
      ],
    });
  }

  // _onChildClick = (key, childProps) => {
  // }

  markerClicked(marker) {
    console.log("The marker that was clicked is", marker);
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCL1VEWkv3sSiL59CBwHbIaR28rWEYKWXY' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onChildClick={this.markerClicked.bind(this)}
        >
          {this.state.markers.map((marker, i) =>{
            return(
              <AnyReactComponent
                lat={marker.lat}
                lng={marker.lng}
                img_src={marker.img_src}
              />
              // <Marker
              //   lat={marker.lat}
              //   lng={marker.lng}
              //   show={this.state.show}
              // />

            )
          })} 
        </GoogleMapReact>
      </Container>
    );
  }
}

// MyClass.defaultProps = {
//   center: {lat: -23.456, lng: 21.876},
//   zoom: 11
// };

export default GoogleMap