const empleados = [{
        id: 1,
        nombre: 'Klisman'
    },
    {
        id: 2,
        nombre: 'Arlam'
    },
    {
        id: 1,
        nombre: 'Juan'
    },
];


const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },

]


//Función para llamar al empleado
// por ejemplo <button id="callback-btn">Haga clic aquí</button>


const getEmpleado = (id, callback) => {
        const empleado = empleados.find((e) => e.id == id)
            //  return e.id==id)
        if (empleado) {
            callback(null, empleado);
        } else {
            callback(`Empleado con id ${id} no existe`);
        }

    }
    //Función llamar salario
const getSalario = (id, callback) => {
    const salario = salarios.find((e) => e.id == id) ? .salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
}


const id = 2;

getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            console.log('ERROR');
            return console.log(err);
        }
        console.log(`El empleado ${empleado.nombre} tiene un salario ${salario.salario}`);
    })
});