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
        :PerIMCEdad="PerIMCEdad"
        :sobrepeso="sobrepeso"
        :obesidad="obesidad"
        />
  </div>
  <div class="graphicrow" v-show="showPatientData">
      <GraphicAlturaEdad :optionsAltura="optionsAltura" :seriesAltura="seriesAltura" :optionsPeso="optionsPeso" :seriesPeso="seriesPeso"/>
  </div>
  <div class="graphicrow" v-show="showPatientData">
      <GraphicAlturaPesoIMC :optionsAlturaPeso="optionsAlturaPeso" :seriesAlturaPeso="seriesAlturaPeso" :optionsIMCedad="optionsIMCedad" :seriesIMCedad="seriesIMCedad" />
  </div>

  
</template>

<script>
import PercentilForm from './components/PercentilForm.vue'
import DatosPaciente from './components/DatosPaciente.vue'
import calculations from "./services/calculations.js";
import GraphicAlturaEdad from './components/GraPhicAlturaEdad.vue';
import graphicAltura from './services/graphicAltura.js';
import graphicPeso from './services/graphicPeso.js';
import graphicAlturaPeso from './services/graphicAlturaPeso.js';
import GraphicAlturaPesoIMC from './components/GraphicAlturaPesoIMC.vue'
import graphicIMCedad from './services/graphicIMCedad.js';

export default {
  name: 'App',
  components: {
    PercentilForm,
    DatosPaciente,
    GraphicAlturaEdad,
    GraphicAlturaPesoIMC
  },
  methods: {
      onClickChild (value) {
         this.getFeatures(value);
      },
      getFeatures(value){
          this.showPatientData = value.trigger;
          this.sexo = value.sexo;
          const edad = calculations.calculaEdad(value.fenac);
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
          //calculo del indice de masa corporal
          const imc = (calculations.calculaIMC(value.peso,value.talla)).toFixed(2);
          this.imc = imc;
          const imcPorEdad = calculations.calculaIMCporEdad(value.sexo,edad,imc); 
          this.PerIMCEdad = imcPorEdad[0];
          //Construccion de las GRAFICAS
                  //grafica altura - edad
          const graphicTalla = graphicAltura.getOptions(percentilTalla[1],percentilTalla[2],value.talla);
          this.optionsAltura = graphicTalla[0];
          this.seriesAltura = graphicTalla[1];
                  //grafica peso - edad
          const graphicPesoPer = graphicPeso.getOptions(percentilPeso[1],percentilPeso[2],value.peso);
          this.optionsPeso = graphicPesoPer[0];
          this.seriesPeso = graphicPesoPer[1];
                //grafico peso - altura
          const graphicAHeightWeight = graphicAlturaPeso.getOptions(pesoParaAltura[3],value.talla,value.peso);
          this.optionsAlturaPeso = graphicAHeightWeight[0];
          this.seriesAlturaPeso = graphicAHeightWeight[1];
                //grafico del indice de masa corporal
          const graphicIMCage = graphicIMCedad.getOptions(imcPorEdad[1],imcPorEdad[2],imc);
          this.optionsIMCedad = graphicIMCage[0];
          this.seriesIMCedad = graphicIMCage[1];
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
     sobrepeso: "",
     obesidad: "",
     optionsAltura: {},
     seriesAltura: [],
     optionsPeso: {},
     seriesPeso: [],
     optionsAlturaPeso: {},
     seriesAlturaPeso: [],
     optionsIMCedad: {},
     seriesIMCedad: []
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
