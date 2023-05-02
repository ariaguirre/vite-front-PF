import { useState, useEffect } from 'react';
import { uploadFile } from '../../utils/firebase/firebaseClient';

const Images = ({setUrlImages}) => {
  const [images, setImages] = useState([]);
  

  const onImageChange = (e) => {    
    setImages([...e.target.files]);    
  }

  const setImagesFiles = async (file) => {
    setUrlImages(await uploadFile(file));        
  }

  useEffect(()=> {
    if(images.length < 1) return;
    images.forEach(img => {
      setImagesFiles(img);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images])
  
  return (

    <>
      <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        name="image"
        id="image"
        multiple
      />
      <label htmlFor="image">
        &nbsp; Choose A photo
      </label>
    </>
  )
}

export default Images