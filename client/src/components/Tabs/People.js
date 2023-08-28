import React from 'react';
import peopleImage1 from '../../Media/People/people.png';
import peopleImage2 from '../../Media/People/cyclists.png';
import peopleImage3 from '../../Media/People/cyclists.png';



const People = () => {
  return (
    <div id="people" className="section">
      <div className="box">
        <img src={peopleImage1} className="photo" alt="Image 1" />
        <a href={peopleImage1} download className="download-option">
          Download
        </a>
      </div>
      <div className="box">
        <img src={peopleImage2} className="photo" alt="Image 2" />
        <a href={peopleImage2} download className="download-option">
          Download
        </a>
      </div>
      <div className="box">
        <img src={peopleImage3} className="photo" alt="Image 3" />
        <a href={peopleImage3} download className="download-option">
          Download
        </a>
      </div>
      {/* ... Other boxes */}
    </div>
  );
};

export default People;


