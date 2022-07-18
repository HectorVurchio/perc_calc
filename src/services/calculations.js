import moment from 'moment';
import 'moment-precise-range-plugin';
import TallaPorEdad from './TallaPorEdad.js';
import PesoPorEdad from './PesoPorEdad.js';
import PesoParaAltura from './PesoParaAltura.js';
import IMCporEdad from './IMCporEdad.js';
import CraneoPorEdad from './CraneoPorEdad.js';
export default{
    calculaEdad(registro,nacimiento){
        const registry = moment(registro);
        //const now = moment().format("YYYY-MM-DD");
        return moment.preciseDiff(nacimiento,registry,true);
    },
    calculaIMC(peso,talla){ 
        //peso en kilogramos y talla en centimetros
        const p = Number(peso);
        const t = Number(talla)/100;
        return p / (t * t);
    },
    //age = edad tal cual como la calculo calculaEdad()
    calculaPercentilTalla(sex,age,size){
        //1. determinar su edad en meses
        const ageInMonths =Number(age.years) * 12 + Number(age.months);
        let tablaPercTalla;  //obtiene la tabla de percentiles correspondiente
        //2. determinar si es nino o nina
        if(sex == 'femenino'){
            tablaPercTalla = TallaPorEdad.getTallaHembras(ageInMonths);
        }else{
            tablaPercTalla = TallaPorEdad.getTallaVarones(ageInMonths);
        }
        const percentiles = TallaPorEdad.getPercentiles();
        //3. determinar si es menor de 3 meses, en ese caso se usara la edad en semanas
        const ageOfCalc = (ageInMonths < 3) ? Number(age.months) * 4 + Math.round(Number(age.days)/7) : ageInMonths;
        //4. iterar en el renglon de las tallas correspondientes a la edad
        const vectorTallas = tablaPercTalla[ageOfCalc];
        let percIndex = 0;  //indice  aproximado del percentil buscado 
        for(let i = 0; i < vectorTallas.length; i++){
            if(Number(size) < vectorTallas[i]){
                break;
            }
            percIndex = i;
        }
        let percentil = '';
        if(Number(size) < Number(vectorTallas[0])){
            percentil = `Menor que ${percentiles[0]}`;
        }else if(Number(size) > Number(vectorTallas[vectorTallas.length - 1])){
            percentil = `Mayor que ${percentiles[percentiles.length - 1]}`;
        }else{
            percentil = percentiles[percIndex];
        }
        return [percentil,tablaPercTalla,ageOfCalc];
    },
    calculaPercentilPesoP(sex,age,weight){
         //1. determinar su edad en meses
         const ageInMonths =Number(age.years) * 12 + Number(age.months);
         let tablaPerPeso;  //obtiene la tabla de percentiles correspondiente
         //2. determinar si es nino o nina
         if(sex == 'femenino'){
             tablaPerPeso = PesoPorEdad.getPesoHembras(ageInMonths);
         }else{
             tablaPerPeso = PesoPorEdad.getPesoVarones(ageInMonths);
         }
         const percentiles = PesoPorEdad.getPercentiles();
         //3. determinar si es menor de 3 meses, en ese caso se usara la edad en semanas
        const ageOfCalc = (ageInMonths < 3) ? Number(age.months) * 4 + Math.round(Number(age.days)/7) : ageInMonths;
        //4. iterar en el renglon de las tallas correspondientes a la edad
        const vectorPesos = tablaPerPeso[ageOfCalc];
        let percIndex = 0;  //indice  aproximado del percentil buscado 
        for(let i = 0; i < vectorPesos.length; i++){
            if(Number(weight) < vectorPesos[i]){
                break;
            }
            percIndex = i;
        }
        let percentil = '';
        if(Number(weight) < Number(vectorPesos[0])){
            percentil = `Menor que ${percentiles[0]}`;
        }else if(Number(weight) > Number(vectorPesos[vectorPesos.length - 1])){
            percentil = `Mayor que ${percentiles[percentiles.length - 1]}`;
        }else{
            percentil = percentiles[percIndex];
        }
        return [percentil,tablaPerPeso,ageInMonths];
    },
    calculaPesoParaAltura(sex,age,size,weight){
        //1. determinar su edad en meses
        const ageInMonths =Number(age.years) * 12 + Number(age.months);
        let tablaPerPeso;  //obtiene la tabla de percentiles correspondiente
         //2. determinar si es nino o nina
         if(sex == 'femenino'){
            tablaPerPeso = PesoParaAltura.getPesoAlturaHembras(ageInMonths);
        }else{
            tablaPerPeso = PesoParaAltura.getPesoAlturaVarones(ageInMonths);
        }
        const percentiles = PesoParaAltura.getPercentiles();

        //4. iterar en el renglon de las tallas correspondientes a la edad
        let percIndexAltura = 0;
        for(let i = 0; i< tablaPerPeso.length;i++){
            let altura = tablaPerPeso[i].altura;
            if(Number(size) <= Number(altura)){
                break;
            }
            percIndexAltura = i;
        }
        const vectorPesos = tablaPerPeso[percIndexAltura].pesos;
        let percIndex = 0;  //indice  aproximado del percentil buscado 
        for(let i = 0; i < vectorPesos.length; i++){
            if(Number(weight) < Number(vectorPesos[i])){
                break;
            }
            percIndex = i;
        }
        let percentil = '';
        if(Number(weight) < Number(vectorPesos[0])){
            percentil = `Menor que ${percentiles[0]}`;
        }else if(Number(weight) > Number(vectorPesos[vectorPesos.length - 1])){
            percentil = `Mayor que ${percentiles[percentiles.length - 1]}`;
        }else{
            percentil = percentiles[percIndex];
        }
        return [percentil,vectorPesos[8],vectorPesos[10],tablaPerPeso];
    },
    calculaIMCporEdad(sex,age,imc){
        //1. determinar su edad en meses
        const ageInMonths =Number(age.years) * 12 + Number(age.months);
        let tablaPerIMC;  //obtiene la tabla de percentiles correspondiente
         //2. determinar si es nino o nina
         if(sex == 'femenino'){
            tablaPerIMC = IMCporEdad.getIMCHembras(ageInMonths);
        }else{
            tablaPerIMC = IMCporEdad.getIMCVarones(ageInMonths);
        }
        const percentiles = IMCporEdad.getPercentiles();
         //3. determinar si es menor de 3 meses, en ese caso se usara la edad en semanas
         const ageOfCalc = (ageInMonths < 3) ? Number(age.months) * 4 + Math.round(Number(age.days)/7) : ageInMonths;
         //4. iterar en el renglon de las tallas correspondientes a la edad
         const vectorPesos = tablaPerIMC[ageOfCalc];
         let percIndex = 0;  //indice  aproximado del percentil buscado 
         for(let i = 0; i < vectorPesos.length; i++){
             if(Number(imc) < Number(vectorPesos[i])){
                 break;
             }
             percIndex = i;
         }
         let percentil = '';
        if(Number(imc) < Number(vectorPesos[0])){
            percentil = `Menor que ${percentiles[0]}`;
        }else if(Number(imc) > Number(vectorPesos[vectorPesos.length - 1])){
            percentil = `Mayor que ${percentiles[percentiles.length - 1]}`;
        }else{
            percentil = percentiles[percIndex];
        }
         return [percentil,tablaPerIMC,ageInMonths];
    },

    calculaCraneoPorEdad(sex,age,circunf){
        //1. determinar su edad en meses
        const ageInMonths =Number(age.years) * 12 + Number(age.months);
        let tablaPerCraneo;  //obtiene la tabla de percentiles correspondiente
         //2. determinar si es nino o nina
         if(sex == 'femenino'){
            tablaPerCraneo = CraneoPorEdad.getCraneoHembras(ageInMonths);
        }else{
            tablaPerCraneo = CraneoPorEdad.getCraneoVarones(ageInMonths);
        }
        const percentiles = CraneoPorEdad.getPercentiles();
         //3. determinar si es menor de 3 meses, en ese caso se usara la edad en semanas
         const ageOfCalc = (ageInMonths < 3) ? Number(age.months) * 4 + Math.round(Number(age.days)/7) : ageInMonths;
         //4. iterar en el renglon de las tallas correspondientes a la edad
         const vectorPesos = tablaPerCraneo[ageOfCalc];
         let percIndex = 0;  //indice  aproximado del percentil buscado 
         for(let i = 0; i < vectorPesos.length; i++){
             if(Number(circunf) < Number(vectorPesos[i])){
                 break;
             }
             percIndex = i;
         }
         let percentil = '';
        if(Number(circunf) < Number(vectorPesos[0])){
            percentil = `Menor que ${percentiles[0]}`;
        }else if(Number(circunf) > Number(vectorPesos[vectorPesos.length - 1])){
            percentil = `Mayor que ${percentiles[percentiles.length - 1]}`;
        }else{
            percentil = percentiles[percIndex];
        }
         return [percentil,tablaPerCraneo,ageInMonths];       
    }
}

