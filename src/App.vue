<template>
  <div class="mainrow">
    <PercentilForm @clicked="onClickChild" msg="Calculadora de Percentiles"/>
    <DatosPaciente v-show="showPatientData" 
         msg="Resultados del Paciente" 
        :sexo="sexo" 
        :edad="edad" 
        :talla="talla" 
        :percentilTalla="percentilTalla"
        :peso="peso"
        :percentilPeso="percentilPeso"
        :pesoParaAltura="pesoParaAltura"
        :imc="imc"
        :craneo="craneo"
        :percCraneo="percCraneo"
        :PerIMCEdad="PerIMCEdad"
        :weightstatus="weightstatus"
        :sobrepeso="sobrepeso"
        :obesidad="obesidad"
        />
  </div>
  <div class="graphicrow" v-show="showPatientData">
      <GraphicSize :ChangeValues="acciona" :value="value"/>
      <GraphicWeight :ChangeValues="acciona" :value="value"/>
  </div>
  <div class="graphicrow" v-show="showPatientData">
    <GraphicSizeWeight :ChangeValues="acciona" :value="value"/>
    <GraphicIMC :ChangeValues="acciona" :value="value"/>
  </div>
  <div class="graphicrow" v-show="showPatientData">
    <GraphicCraneo :ChangeValues="acciona" :value="value"/>
  </div>
</template>

<script>
import PercentilForm from './components/PercentilForm.vue'
import DatosPaciente from './components/DatosPaciente.vue'
import calculations from "./services/calculations.js";
import GraphicSize from './components/GraphicSize.vue';
import GraphicWeight from './components/GraphicWeight.vue';
import GraphicSizeWeight from './components/GraphicSizeWeight.vue';
import GraphicIMC from './components/GraphicIMC.vue';
import GraphicCraneo from './components/GraphicCraneo.vue';
export default {
  name: 'App',
  components: {
    PercentilForm,
    DatosPaciente,
    GraphicSize,
    GraphicWeight,
    GraphicSizeWeight,
    GraphicIMC,
    GraphicCraneo
  },
  methods: {
      onClickChild (value) {
         this.getFeatures(value);
      },
      getFeatures(value){
          this.showPatientData = value.trigger;
          this.sexo = value.sexo;
          const edad = calculations.calculaEdad(value.fereg,value.fenac);
          this.edad = `${edad.years} años, ${edad.months} meses y ${edad.days} dias`;
          this.talla = value.talla;
          //calculo del percentil por talla
          const percentilTalla = calculations.calculaPercentilTalla(value.sexo,edad,value.talla);
          this.percentilTalla = percentilTalla[0];
          this.peso = value.peso;
          // calculo del percentil por peso
          const percentilPeso = calculations.calculaPercentilPesoP(value.sexo,edad,value.peso);
          this.percentilPeso = percentilPeso[0];
          //calculo del peso debido a la altura
          const pesoParaAltura = calculations.calculaPesoParaAltura(value.sexo,edad,value.talla,value.peso);
          this.pesoParaAltura = pesoParaAltura[0];
          this.sobrepeso = pesoParaAltura[1];
          this.obesidad = pesoParaAltura[2];
          if(Number(value.peso) < Number(pesoParaAltura[1])){
            this.weightstatus = "No Hay Sobrepeso";
          }else{
            if(Number(value.peso) < Number(pesoParaAltura[2])){
              this.weightstatus = "Sobrepeso";
            }else{
              this.weightstatus = "Obesidad";
            }
          }
          //calculo del indice de masa corporal
          const imc = (calculations.calculaIMC(value.peso,value.talla)).toFixed(2);
          this.imc = imc;
          const imcPorEdad = calculations.calculaIMCporEdad(value.sexo,edad,imc); 
          this.PerIMCEdad = imcPorEdad[0];
          //calculo de la circunferencia craneal
          const circunfCraneal = calculations.calculaCraneoPorEdad(value.sexo,edad,value.craneo);
          this.craneo = value.craneo;
          this.percCraneo = circunfCraneal[0];
          //Construccion de las GRAFICAS 
          value['percentilTalla'] = percentilTalla;
          value['percentilPeso'] = percentilPeso;
          value['pesoParaAltura'] = pesoParaAltura;
          value['imcPorEdad'] = imcPorEdad;
          value["IMC"] = imc;
          value['circunfCraneal'] = circunfCraneal;
          this.acciona++;
          this.value = value;
          
      },
  },
  created(){ },
  data() {
    return {
     showPatientData : false,
     sexo : "",
     edad : "",
     talla : "",
     percentilTalla : "",
     peso: "",
     percentilPeso: "",
     pesoParaAltura: "",
     imc: "",
     PerIMCEdad: "",
     craneo:"",
     percCraneo:"",
     weightstatus:"",
     sobrepeso: "",
     obesidad: "",
     acciona:0,
     value:{}
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainrow{
  display:flex;
  justify-content: center;
}
.graphicrow{
  display:flex;
  width:100%;
}
</style>
