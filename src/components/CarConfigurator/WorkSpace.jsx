import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Experience from './Experience';



function WorkSpace() {

  return (
      <div className="App workspace">
        <Canvas>
          <color attach="background" args={['#08215A']} />
          <Experience />
        </Canvas>
      </div>
  )
}

export default WorkSpace;
