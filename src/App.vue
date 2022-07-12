<template>
  <div class="mainrow">
    <PercentilForm @clicked="onClickChild" msg="Calculadora de Percentiles"/>
    <DatosPaciente v-if="showPatientData" 
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
  
</template>

<script>
import PercentilForm from './components/PercentilForm.vue'
import DatosPaciente from './components/DatosPaciente.vue'
import calculations from "./services/calculations.js";

export default {
  name: 'App',
  components: {
    PercentilForm,
    DatosPaciente
  },
  methods: {
      onClickChild (value) {
          this.showPatientData = value.trigger;
          this.sexo = value.sexo;
          console.log(value.sexo,value.talla,value.peso,value.fenac);
          const edad = calculations.calculaEdad(value.fenac);
          this.edad = `${edad.years} años, ${edad.months} meses y ${edad.days} dias`;
          this.talla = value.talla;
          const percentilTalla = calculations.calculaPercentilTalla(value.sexo,edad,value.talla);
          this.percentilTalla = percentilTalla;
          this.peso = value.peso;
          const percentilPeso = calculations.calculaPercentilPesoP(value.sexo,edad,value.peso);
          this.percentilPeso = percentilPeso;
          const pesoParaAltura = calculations.calculaPesoParaAltura(value.sexo,edad,value.talla,value.peso);
          this.pesoParaAltura = pesoParaAltura[0];
          const sobrepeso = pesoParaAltura[1];
          this.sobrepeso = sobrepeso;
          const obesidad = pesoParaAltura[2];
          this.obesidad = obesidad;
          const imc = (calculations.calculaIMC(value.peso,value.talla)).toFixed(2);
          this.imc = imc;
          const PerIMCEdad = calculations.calculaIMCporEdad(value.sexo,edad,imc);
          this.PerIMCEdad = PerIMCEdad;
      }
  },
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
     obesidad: ""
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
</style>
