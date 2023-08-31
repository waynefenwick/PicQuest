import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNSPLASH_IMAGES } from '../../utils/queries';

function People () {
     const { loading, error, data } = useQuery(QUERY_UNSPLASH_IMAGES, {
          variables: { category: 'people' },
        });
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
      
        const unsplashImages = data.unsplashImages;
        unsplashImages.forEach((image) => {
          console.log(image); // Log each individual image object
        });
        
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
              <h2>People Pictures</h2>
              <div className="image-list">
                {unsplashImages.map((image, index) => (
                  <div key={`${image.unsplashId}-${index}`} className="image-card">
                    {image.imageUrl && (
                      <div className="image-buttons">
                        <a href={image.imageUrl} download={image.alt_description || 'image'} target="_blank" rel="noopener noreferrer">
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
export default People;
