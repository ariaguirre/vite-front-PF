import { useState, useEffect } from 'react';
import { uploadFile } from '../../utils/firebase/firebaseClient';
import { TextField} from '@mui/material';






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
 
        <TextField
        type='file'
        onChange={onImageChange}
        name='image'
        id='image'
        inputProps={{ multiple: true }}
        />
   
    </>
  )
}

export default Images