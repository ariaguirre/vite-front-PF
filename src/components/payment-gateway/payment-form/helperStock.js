import { updateStock } from "../../../utils/firebase/firebaseClient"

export const helperStock = async (items) =>{
for (let i = 0; i < items.length; i++) {
    await updateStock(items[i]);  
}
  
}