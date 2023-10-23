import './expertise.scss';
import Frontend from './svg/Frontend';

function Expertise() {
  return (
      <div className="expertise">
        <div className="expertise_container">
          <div className="expertise_container_title">
            <Frontend />
            <h3>Développement Front</h3>
          </div>
          <div className="expertise_container_content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus metus id augue convallis, ac tincidunt orci bibendum. Phasellus eget felis quis ligula varius hendrerit. Integer ultricies hendrerit enim, ut tristique risus tincidunt nec. </p>
          </div>
        </div>
    </div>
  );
}

export default Expertise;