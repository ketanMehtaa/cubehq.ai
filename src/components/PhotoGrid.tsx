import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../services/api';
import { PhotoGridProps } from '../types/photo';
import styles from '../styles/PhotoGrid.module.css'; 

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerName }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const newPhotos = await fetchPhotos();
      setPhotos(newPhotos.slice(0, 9));
    };

    loadPhotos();
    const interval = setInterval(loadPhotos, 10000);
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [customerName]);

  return (
    <div className={styles.photoGrid}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoItem}>
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
