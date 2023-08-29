import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import peopleImage1 from '../../Media/People/people.png';
import peopleImage2 from '../../Media/People/cyclists.png';
// ... other imports

const imagePaths = [peopleImage1, peopleImage2,]; // Add more paths if needed

const People = () => {
  const imagePaths = [peopleImage1, peopleImage2]; // Add more paths if needed

  const [ratings, setRatings] = useState(Array(imagePaths.length).fill(null));

  const handleDownload = (imagePath) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = `image${imagePaths.indexOf(imagePath) + 1}.png`;
    link.click();
  };

  const handleStarClick = (index, selectedRating) => {
    const newRatings = [...ratings];
    newRatings[index] = selectedRating;
    setRatings(newRatings);
  };

  return (
    <div id="people" className="section">
      {imagePaths.map((imagePath, index) => (
        <div className="box" key={index}>
          <div className="image-container">
            <img src={imagePath} className="photo" alt={`Image ${index + 1}`} />
            <div className="overlay">
              <FontAwesomeIcon icon={faThumbsUp} className="icon thumbs-up" />
              <FontAwesomeIcon
                icon={faDownload}
                className="icon download"
                onClick={() => handleDownload(imagePath)}
              />
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={`icon star ${star <= ratings[index] ? 'filled' : ''}`}
                    onClick={() => handleStarClick(index, star)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};




export default People;
