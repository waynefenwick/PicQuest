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

  return (
    <div>
      <div id="tab2" className="section">
        <h2>Animal Pictures</h2>
        <div className="image-list">
          {unsplashImages.map((image, index) => (
            <div key={`${image.unsplashId}-${index}`} className="image-card">
              {image.urls && (
                <>
                  <img src={image.urls.regular} alt={image.alt_description} />
                  <p className="image-description">{image.alt_description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animals;
