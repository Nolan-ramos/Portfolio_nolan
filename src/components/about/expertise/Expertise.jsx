import './expertise.scss';
import expertiseData from './expertise.json';
import Backend from './svg/Backend';
import Frontend from './svg/Frontend';
import DesignUi from './svg/DesignUi';
import DesignUx from './svg/DesignUx';

function Expertise() {
  const svgComponents = {
    Backend,
    Frontend,
    DesignUi,
    DesignUx,
  };

  return (
    <div className="expertise">
      {expertiseData.map((item, index) => {
        const SVGComponent = svgComponents[item.svgComponent];

        return (
          <div className="expertise_container" key={index}>
            <div className="expertise_container_title">
              <SVGComponent />
              <h3>{item.titre}</h3>
            </div>
            <div className="expertise_container_content">
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Expertise;
