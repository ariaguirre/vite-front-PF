



export const searchProduct = (name , products) =>{

if(name){
    const findProduct = products.filter(doc => {
       return doc.name.toLowerCase().includes(name.toString().toLowerCase());
     });
     return findProduct;
}

}
