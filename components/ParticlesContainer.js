import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, {useCallback} from 'react'

const ParticlesContainer = () => {

  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);


  const particlesLoaded = useCallback(async () => {}, [])    
  
  return (
    <Particles 
    className='w-full h-full absolute translate-z-0'
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded} 
    options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: false,
            mode: 'repulse'
          },
          resize: true, 
        },
        nodes: {
          bubble: {
            distance: 10,
            duration: 2,
            opacity: 1,
            size: 10,
          },
          push: {
            quantity: 10
          },
          repulse: {
            distance: 1,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#e68e2e'
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: {
            default: 'bounce',
          },
          random: false, 
          speed: .4,
          straight: false,            
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.4
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: {min: 2, max: 8},
        }
      },  
      detectRetina: true,    
    }}
    />
  );
};

export default ParticlesContainer;
