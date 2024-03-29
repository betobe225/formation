import React from 'react';
import FeaturesBox from './FeaturesBox'; // Correction ici
import fimage1 from '../../Assets/1.svg';
import fimage2 from '../../Assets/2.svg';
import fimage3 from '../../Assets/3.svg';
import fimage4 from '../../Assets/4.svg';

function Features() {
  return (
    <div id='features'>
        <h1>Formation musculation</h1>
        <div className='a-container'>
            <FeaturesBox image={fimage1} title="WeightLifting" />
            <FeaturesBox image={fimage2} title="Specific Muscle" />
            <FeaturesBox image={fimage3} title="Flex your Muscle" />
            <FeaturesBox image={fimage4} title="Cardio formation" />
        </div>
    </div>
  );
}

export default Features;
