<template>
  <div class="mainrow">
    <PercentilForm msg="Calculadora de Percentiles"/>
    <DatosPaciente msg="Resultados del Paciente"/>
  </div>
  
</template>

<script>
import PercentilForm from './components/PercentilForm.vue'
import DatosPaciente from './components/DatosPaciente.vue'

export default {
  name: 'App',
  components: {
    PercentilForm,
    DatosPaciente
  }
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
