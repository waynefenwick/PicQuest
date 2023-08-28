import React, { useState, useEffect } from 'react';
import fetchAnimalPhotos from './FetchAnimals'; // Assuming you have a FetchAnimals.js file

function AnimalsSection() { // Renamed the component name to AnimalsSection
  const [animalPhotos, setAnimalPhotos] = useState([]);

  useEffect(() => {
    async function fetchAndSetAnimalPhotos() {
      const fetchedPhotos = await fetchAnimalPhotos(); // Changed to fetchAnimalPhotos
      setAnimalPhotos(fetchedPhotos);
    }
    fetchAndSetAnimalPhotos();
  }, []);

  return (
    <div>
      <h2>Animals</h2> {/* Updated section title */}
      <ul>
        {animalPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>
              Photo by{' '}
              <a
                href={`https://unsplash.com/@${photo.user.username}?utm_source=your_app_name&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {photo.user.name}
              </a>{' '}
              on{' '}
              <a
                href={`https://unsplash.com/?utm_source=your_app_name&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalsSection; // Export the corrected component name
