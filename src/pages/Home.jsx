import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { Island }from '../models/island'
import Loader from '../components/Loader'
{/*<section className="w-full h-screen relative">
<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUL    
</div>
</section>*/}
const Home = () => {
    
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