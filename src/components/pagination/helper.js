export const slice =  (obj) =>{
    let currentProducts = [];
    let indexFinal = 8 * obj.pageSelect; 
   let inicial = indexFinal - obj.tamañoPorpagina; 
  return currentProducts =  obj.products.slice(inicial, indexFinal);
  
}