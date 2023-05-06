import { Grid } from '@mui/material';
import style from './filtersComponent.module.css';
import FiltersBar from '../filters-bar/filtersBar';

const FiltersComponent = () =>{
    return (
        <div>
            <Grid 
              container
              justifyContent='center'
              alignItems="start"
              border={1}
              display={'flex'}
              flexDirection={'column'}
              maxWidth={'50vh'}
              padding={1}
            >
              <div>
                <FiltersBar/> 
              </div>
              <div> 
               <div> 
               Filtros
                </div> 
                <div> 
                    Por precio
                </div> 
                <div> 
                    Por rango
                </div> 
                <div>
                    Destacados
                </div>
              </div> 
            </Grid>
        </div>
    )
}

export default FiltersComponent