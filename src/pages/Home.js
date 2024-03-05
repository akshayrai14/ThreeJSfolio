import { React, Suspense, useState,useEffect,useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

// React-three/fiber package used for Canvas
// Objects nearer than 0.1 and farther than 1000 are not rendered

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const[isRotating,setisRotating] = useState(false);
  const [isplayingmusic,setisplayingmusic] = useState(false);

  useEffect(()=>{
    if(isplayingmusic){
      audioRef.current.play();
    }
    return ()=>{
      audioRef.current.pause();
    }
  },[isplayingmusic])

  const adjustIslandForScreenSize = () =>{
    let screenScale=null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];
    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
      screenPosition = [0,-6.5,-43];
    }
    else{
      screenScale = [1,1,1];
    }
    return [screenScale,screenPosition,rotation];
  }
  const adjustPlaneForScreenSize = () =>{
    let screenScale;
    let screenPosition;
    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    }
    else{
      screenScale = [3,3,3];
      screenPosition=[0,-4,-4];
    }
    return [screenScale,screenPosition];
  }
  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreenSize();
  const [planeScale,planePosition]=adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen
     relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}
        camera={{near : 0.1,far:1000}}
        >
            <Suspense fallback={<Loader/>}>
              <directionalLight position={[1,1,1]} intensity={2}></directionalLight>
              <ambientLight intensity={0.5}>
              </ambientLight>
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"></hemisphereLight>
              <Bird/>
              <Sky isRotating={isRotating}/>
              <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating ={isRotating}
              setisRotating = {setisRotating}
              setCurrentStage={setCurrentStage}
              ></Island>
              <Plane
              scale={planeScale}
              position={planePosition}
              isRotating={isRotating}
              rotation={[0,20,0]}
              />
            </Suspense>
        </Canvas>
        <div className='absolute bottom-2 left-2'>
          <img
          src={isplayingmusic ? soundoff : soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={()=>setisplayingmusic(!isplayingmusic)}
          />
        </div>
    </section>
  )
}

export default Home