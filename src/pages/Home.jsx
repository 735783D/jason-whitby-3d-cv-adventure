import { React, Suspense, useEffect, useRef, useState } from 'react' 
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
// import Sky from '../models/Sky'
// import Plane from '../models/Plane'
// import Bird from '../models/Bird'
// import HomeInfo from '../components/HomeInfo'

// import sakura from '../assets/sakura.mp3'
// import { soundoff, soundon } from '../assets/icons'

const Home = () => {
//   const audio = useRef(new Audio(sakura));
//   audio.current.volume = 1.0;
//   audio.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audio.current.play();
    }

    return () => {
      audio.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, screenPosition, islandRotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth <= 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
  <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex
    justify-center items-center'>
      {/* {currentStage && <HomeInfo currentStage={currentStage}/>} */}
    </div>

    <Canvas className={`w-full h-screen bg-transparent ${isRotating ?
    'cusror-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000 }}
      >
      <Suspense fallback={<Loader />}>
        <directionalLight 
          position={[1,1,1]} 
          intensity={2}/>
        <ambientLight 
          intensity={0.5}/>
        <hemisphereLight 
          skyColor="b1e1ff"
          groundColor="#000000"
          intensity={1}/>

        {/* <Bird /> 
        <Sky 
          isRotating={isRotating}
        /> */}
        <Island 
          scale={islandScale} 
          position={islandPosition}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          />
        {/* <Plane
          isRotating={isRotating}
          scale={planeScale}
          position={planePosition}
          rotation={[0,20,0]}
          />            */}
      </Suspense>
    </Canvas>

    {/* <div className='absolute bottom-2 left-2'>
      <img
        src={!isPlayingMusic ? soundoff : soundon}
        alt='sound'
        className='w-10 h-10 object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
      />
    </div> */}
  </section>
  )
}

export default Home;

// import { React, Suspense, useEffect, useRef, useState } from 'react' 
// import { Canvas } from '@react-three/fiber'
// import Loader from '../components/Loader'

// const Home = () => {
//     return (
//         <section className='w-full h-screen relative'>
//             <div className='absolute top-28 left-0 right-0 z-10 flex
//             justify-center items-center'>
//                 POPUP
//             </div>
//         </section>
//         <section className='w-full h-screen relative'>
//             <Canvas
//                 className='w-full h-screen bg-transparent'
//                 camera={{ near: 0.1, far: 1000 }}
//             >
//                 <Suspense fallback={<Loader />}>
//                 </Suspense>
//             </Canvas>
//         </section>
//     )
// }

// export default Home