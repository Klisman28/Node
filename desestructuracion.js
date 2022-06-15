const deadpol ={
    nombre:'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',  
    getNOmbre (){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const {nombre, apellido,poder, edad='15'}= deadpol;

console.log(nombre,apellido,poder,edad);
