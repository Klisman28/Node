const empleados =[
    {
        id:1,
        nombre:'Klisman'
    },  
    {
        id:2,
        nombre:'Arlam'
    },  
    {
        id:3,
        nombre:'Juan'
    },   
    ];
    
    
    const salarios=[
        {
            id:1,
            salario:1000
        },
        {
            id:2,
            salario:1500
        },
    
    ]

    const getEmpleado=( id, callback)=>{

        return new Promise((resolve,reject) =>{
            const empleado= empleados.find(e => e.id==id)?.nombre;

            (empleado)
                ? resolve(empleado)
               : reject('No existe ne la base de datos');
            

        });
        
    };

    getSalario=(id, callback) => {

        return new Promise ((resolve, reject)=>{
            const salario=salarios.find(e => e.id==id)?.salario;
            (salario)
            ? resolve(salario)
            : reject(`El Salario de la base de daros ${id} no existe`)
        }

        )

    };

   


   const getInfoUsuario =async ( id)=> {
      try {
        const empleado= await getEmpleado(id);
        const salario = await getSalario(id);
 
        return `El nombre empleado ${empleado} salario es ${salario}`
      } catch (error) {
          throw error;
      }
   }


   const id=7;
   getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err=> console.log(err));