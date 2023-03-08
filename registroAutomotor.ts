import { Autos } from "./Autos";
import * as fs from "fs";

export class RegistroAutomotor {
    consultar(auto:string, array:Autos[]) {
        let foundCar: Autos[] = array.filter((car:any) => ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()));
        if(foundCar.length) {
            console.log(`El auto ${auto} ha sido encontrado.`);
            console.log(foundCar);
            return foundCar;
        } else {
            console.log(`El auto ${auto} no se encuentra en la base de datos`);
        }
    }

    borrar(auto:string, array:Autos[]) {
        let autoAeliminar:number
        let index:number = array.length;
        while (index > 0) {
            autoAeliminar= array.findIndex((car:any) => ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()));
            if (autoAeliminar >= 0) {
            array.splice(autoAeliminar, 1);
            }
        index--;
    }
}
    
}