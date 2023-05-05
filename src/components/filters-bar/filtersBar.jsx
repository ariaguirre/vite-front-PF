import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import {getCategories, productsByCategory} from '../../utils/firebase/firebaseClient'


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
    const { value } = e.target
    const result = await productsByCategory(value)
   console.log(result);
  }

  return (
    <div>
      <Grid
        container
        justifyContent="start"
        alignItems={"start"}
      >
        Filtros
        <Grid
          container
          justifyContent="start"
          alignItems={"start"}
        >
          <List>
            {categories?.map((item) => (
              <ListItem key={item.id}>
               <Button onClick={(e) => handlerCategory(e)} value={item.id} >{item.id}</Button> 
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default FiltersBar;
