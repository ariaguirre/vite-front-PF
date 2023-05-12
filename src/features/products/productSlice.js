import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsCopy:[],
  productsCopyRange : [],
  productsName:[],
  productsNameCopy:[],
  productsFilter:[],
  productsFilterCopy:[],
  status: 'idle',
  error: null,
  productById: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
      reducers: {
        getProductsActions: (state, action) =>{
          state.products = action.payload          
      },
         getProductById: (state, action) => {
      state.productById = state.products.find(product => product.id === action.payload);
      },
      productsName : (state,action)=>{
        state.productsName = action.payload
      },
      productsCopy : (state,action)=>{
        state.productsCopy = action.payload
      },
      productsFilterAction : (state,action)=>{
        state.productsFilter = action.payload
        state.productsCopyRange = action.payload;
      },
      prodFilterCopy : (state,action)=>{
        state.productsFilterCopy = action.payload
        state.productsCopyRange = action.payload;
      },
      prodNameCopy : (state,action)=>{
        state.productsNameCopy = action.payload
        state.productsCopyRange = action.payload;
      }
      ,
      productsOrder : (state,action)=>{
      order(state.products,action.payload)
      order(state.productsCopy,action.payload)
      }
      ,
      priceRangeAtion : (state,action)=>{
   state.products =  priceRange(state,action.payload)
      }
      }
    });

    const order = (state,payload) =>{
      let orderName = state
      let OrderCopy =[];
      switch (payload.orderBy) {
        case "name":
          if(payload.orderType === 'asc'){
            OrderCopy  = orderName.sort(function(a,b){
              
                if(a.name > b.name){ return 1;}
                if(a.name < b.name){ return -1;}
                else {return 0;}
            }) 
        }
        if(payload.orderType === 'desc'){
            OrderCopy  = orderName.sort(function(a,b){ 
                if(a.name > b.name){return -1;}
                if(a.name < b.name) {return 1;}
                else {return 0;}
            })
        } 
          break;
      case "rating":
        if(payload.orderType === 'asc'){
          OrderCopy  = orderName.sort(function(a,b){
            
              if(a.rating > b.rating){ return 1;}
              if(a.rating < b.rating){ return -1;}
              else {return 0;}
          }) 
      }
      if(payload.orderType === 'desc'){
          OrderCopy  = orderName.sort(function(a,b){ 
              if(a.rating > b.rating){return -1;}
              if(a.rating < b.rating) {return 1;}
              else {return 0;}
          })
      }
        break
        case "price":
          if(payload.orderType === 'asc'){
            OrderCopy  = orderName.sort(function(a,b){
              
                if(a.price > b.price){ return 1;}
                if(a.price < b.price){ return -1;}
                else {return 0;}
            }) 
        }
        if(payload.orderType === 'desc'){
            OrderCopy  = orderName.sort(function(a,b){ 
                if(a.price > b.price){return -1;}
                if(a.price < b.price) {return 1;}
                else {return 0;}
            })
        }
          break
        default:
          break;
      }
                 
         return {...OrderCopy}
    }
    const priceRange =  (state, range) =>{
  if(state.productsFilter.length || state.productsName.length){
    let products = [...state.productsCopyRange]
        
    let rangeCopy = []
     rangeCopy =  products.filter(a =>{
     return a.price>= range[0] && a.price<=range[1]
    })
 
   return rangeCopy
  }
  else{
    let products = [...state.productsCopy]
        
    let rangeCopy = []
     rangeCopy =  products.filter(a =>{
     return a.price>= range[0] && a.price<=range[1]
    })
 
   return rangeCopy
  }
    }
    export const {priceRangeAtion,productsOrder,getProductsActions,getProductById,productsCopy,productsName,productsFilterAction,prodFilterCopy,prodNameCopy } = productSlice.actions
    export default productSlice.reducer;


