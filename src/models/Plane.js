import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';


const Plane = ({isRotating,...props}) => {
  const ref = useRef();//need to pass in use animations using mesh props
  const {scene,animations}=useGLTF(planeScene);
  const {actions }=useAnimations(animations,ref);//ref to the original mesh
  
  useEffect(()=>{
    if(isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
  },[actions,isRotating])

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
