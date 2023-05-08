



export const searchProduct = (obj) =>{

if(obj.name){
    const findProduct =  obj.productsCopy.filter(doc => {
       return doc.name.toLowerCase().includes(obj.name.toString().toLowerCase());
     });
     return findProduct;
}

}
