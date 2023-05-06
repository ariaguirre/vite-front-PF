import { Button, Grid, List, ListItem, ListItemText, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {getCategories, productsByCategory} from '../../utils/firebase/firebaseClient'
import { Link } from "react-router-dom";


const FiltersBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const result = async () => {
      let category = await getCategories();
      setCategories(category);
    };
    result();
  }, []);
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
