import React, { useState, useEffect } from 'react';
import fetchPeoplePhotos from './FetchPeople';

function PeopleSection() {
  const [peoplePhotos, setPeoplePhotos] = useState([]);

  useEffect(() => {
    async function fetchAndSetPeoplePhotos() {
      const fetchedPhotos = await fetchPeoplePhotos();
      setPeoplePhotos(fetchedPhotos);
    }
    fetchAndSetPeoplePhotos();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {peoplePhotos.map((photo) => (
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

export default PeopleSection;
