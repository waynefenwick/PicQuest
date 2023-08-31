import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNSPLASH_IMAGES } from '../../utils/queries';

function Animals() {
  const { loading, error, data } = useQuery(QUERY_UNSPLASH_IMAGES, {
    variables: { category: 'animals' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const unsplashImages = data.unsplashImages;

  const handleDownload = (imageUrl, altDescription) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = altDescription || 'image';
    link.click();
  };

  return (
    <div>
      <div id="tab2" className="section">
        <h2>Animal Pictures</h2>
        <div className="image-list">
          {unsplashImages.map((image, index) => (
            <div key={`${image.unsplashId}-${index}`} className="image-card">
              {image.imageUrl && (
                <div className="image-buttons">
                  <a href={image.imageUrl} onClick={(e) => { e.preventDefault(); handleDownload(image.imageUrl, image.alt_description); }}>
                    <img src={image.imageUrl} alt={image.alt_description} />
                  </a>
                  <p className="image-description">{image.description}</p>
                  <button className="favorites-button">Add to Favorites</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animals;
