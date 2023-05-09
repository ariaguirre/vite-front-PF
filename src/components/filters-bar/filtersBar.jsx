import { Grid, List, ListItem, Stack } from "@mui/material";

import { productsByCategory} from '../../utils/firebase/firebaseClient'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const FiltersBar = () => {

  const categories = useSelector(state => state.categories)

  const handlerCategory = async (e) =>{
    const result = await productsByCategory(e)
   console.log(result);
  }

  return (
    <div>
      <Grid
        container
        justifyContent="start"
        alignItems={"start"}
      >
        <Grid
          container
          justifyContent="start"
          alignItems={"start"}
        >
          <List>
            <Stack spacing={-1.5}>
              {categories?.map((item) => (
                <ListItem key={item.id}>
                <Link onClick={() => handlerCategory(item.categories)}>{item.categories}</Link>  
                </ListItem>
              ))}
            </Stack>
            
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default FiltersBar;
