import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import  Loader  from '@react-three/fiber'
import { AmbientLight, HemisphereLight, PointLight } from 'three'

import { Island }from '../models/island'
{/*<section className="w-full h-screen relative">
<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUL    
</div>
</section>*/}
const Home = () => {
    const adjustIslandForScreenSize = () => {
    
        let screenScale = null;
        let screenPostion = [0, -0.6, -43];
        let rotation = [0., 4.7, 0];
        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
          }  else {
            screenScale = [1, 1, 1];
          }
           
            
        return [screenScale, screenPostion, rotation];
    }
    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
   <section className="w-full h-screen relative">
    <section className="w-full h-screen relative">
<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUL    
</div>
</section>
    <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000}}
  
    >
        <Suspense fallback={<Loader />}>
            <directionalLight />
            <AmbientLight />
            <PointLight />
            <SpotLight />
            <HemisphereLight />

            <Island />
        </Suspense>
    </Canvas>
   </section>
  
  )
}

export default Home