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
    
    ];

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

   const id=1;
    /* getEmpleado(id)
      .then(empleado => console.log(empleado)) // cuando se resuelva
      .catch( err => console.log(err));


    getSalario(id)
    .then(salario => console.log(salario))
    .catch (err => console.log(errr))*/

    //Promesa en cadena 

    let nombre;
    getEmpleado(id)
     .then(empleado=>{
        nombre=empleado;
        return getSalario(id);
     } )
     .then(salario=> console.log(`El empleado ${nombre} tiene un salario ${salario}`))
     .catch(err =>console.log(err));