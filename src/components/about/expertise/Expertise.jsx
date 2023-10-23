import React, { useEffect, useRef } from 'react';
import { Tilt } from 'react-tilt';
import expertiseData from './expertise.json';
import './expertise.scss';
import Backend from './svg/Backend';
import DesignUi from './svg/DesignUi';
import DesignUx from './svg/DesignUx';
import Frontend from './svg/Frontend';

function Expertise() {
  const svgComponents = {
    Backend,
    Frontend,
    DesignUi,
    DesignUx,
  };

  const containerRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const index = containerRefs.current.indexOf(target);

        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            target.classList.add('expertise_container_left');
          } else {
            target.classList.add('expertise_container_right');
          }
        } else {
          target.classList.remove('expertise_container_left', 'expertise_container_right');
        }
      });
    }, options);

    containerRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const resetTilt = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].vanillaTilt.destroy();
    }
  };

  return (
    <div className="expertise">
      {expertiseData.map((item, index) => {
        const SVGComponent = svgComponents[item.svgComponent];

        const isMobile = window.innerWidth < 768;

        return (
          <div
            className="expertise_container cursor_change"
            ref={(el) => (containerRefs.current[index] = el)}
            key={index}
          >
            {!isMobile && (
              <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
                <div className="expertise_container_background">
                  <div className="expertise_container_title">
                    <SVGComponent />
                    <h3>{item.titre}</h3>
                  </div>
                  <div className="expertise_container_content">
                    <p>{item.content}</p>
                  </div>
                </div>
              </Tilt>
            )}
            {isMobile && (
              <div className="expertise_container_background">
                <div className="expertise_container_title">
                  <SVGComponent />
                  <h3>{item.titre}</h3>
                </div>
                <div className="expertise_container_content">
                  <p>{item.content}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Expertise;
