 const getId= (id)=> {
     const user={
         id,
         name:'Klisman'
     }

     setTimeout( () => {
         console.log(user)
     },100

     )
 }

 getId(5);