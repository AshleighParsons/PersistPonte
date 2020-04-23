import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import Entity from 'react'

import media from "../../assets/styles/media";

import {Tick,MTLModel} from 'react-3d-viewer'

const Container = styled.section`
  height: 75vh;
  text-align: center;
  font-family: sans-serif;
`

const Model = () => {
  return (
    <Container>
    <div>
    <MTLModel 
        enableZoom = {false}
        position={{x:0,y:-100,z:0}}
        texPath="../../assets/model/"
        mtl="../../assets/model/Ponte.mtl"
        src="../../assets/model/Ponte.obj"
     />
     </div>
      {/* <OBJModel 
        width="400" height="400"  
        position={{x:0,y:-100,z:0}} 
        src="../../assets/model/Ponte.obj"
        onLoad={()=>{
          //...
        }}
        onProgress={xhr=>{
          //...
        }}
      /> */}
    </Container>
  );
};

export default Model;
