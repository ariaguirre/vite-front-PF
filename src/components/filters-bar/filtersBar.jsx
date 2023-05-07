import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import {getCategories, productsByCategory} from '../../utils/firebase/firebaseClient'
import { useSelector } from "react-redux";


const FiltersBar = () => {

  const categories = useSelector(state => state.categories)

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
