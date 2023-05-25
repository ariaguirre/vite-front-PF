

export const searchOrderHelper = (name , orders) =>{
    if(name){
        const findOrders = orders.filter(doc => {
           return doc.orderId.toLowerCase().includes(name.toString().toLowerCase());
         });
         return findOrders;
    }
    
    }

    export const orderOrdersHelper = (orders,orderType) =>{
        let orderDate = orders.slice()
        let OrderCopy =[];
    
        if(orderType === 'asc'){
            OrderCopy  = orderDate.sort(function(a,b){
                if(a.date.toDate().toLocaleString('es-co') > b.date.toDate().toLocaleString('es-co')){ return 1;}
                if(a.date.toDate().toLocaleString('es-co') <b.date.toDate().toLocaleString('es-co')){ return -1;}
                else {return 0;}
            }) 
            return OrderCopy
        }
        if(orderType === 'desc'){
            OrderCopy  = orderDate.sort(function(a,b){ 
                if(a.date.toDate().toLocaleString('es-co') > b.date.toDate().toLocaleString('es-co')){return -1;}
                if(a.date.toDate().toLocaleString('es-co') < b.date.toDate().toLocaleString('es-co')) {return 1;}
                else {return 0;}
            })
            return OrderCopy
        }
    }