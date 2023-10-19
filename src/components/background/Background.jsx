import './background.scss';

function Background() {
    return (
        <div className='background'>
            <div className='background_color'></div>
            <div className='background_filtre' style={{ backdropFilter: 'blur(80px)' }}></div> {/* Ajout du backdrop-filter */}
            <div className='background_shapes'>
                <div className='shape'></div>
                <div className='shape'></div>
            </div>
        </div>
    );
}

export default Background;
