<template>
<div class="outer">
    <h1>{{ msg }}</h1>
    <div class="form-container">
        <div class="row">
            <div class="col"><label>Sexo:</label></div>
            <div class="col"><label id="genderlabel">Femenino</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Edad:</label></div>
            <div class="col"><label id="agelabel"> 0.52 años (6.25 meses o 190 días)</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Talla:</label></div>
            <div class="col"><label id="sizelabel">50 cm</label></div>
            <div class="col"><label id="size_commeent_label">Menor que P1</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Peso:</label></div>
            <div class="col"><label id="weightlabel">12 kg</label></div>
            <div class="col"><label id="weight_commeent_label">Mayor que P99</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Peso para su Altura:</label></div>
            <div class="col"><label id="tallwei_commeent_label">Mayor que P99</label></div>
        </div>
        <div class="row">
            <div class="col"><label>IMC (Índice de Masa Corporal):</label></div>
            <div class="col"><label id="imclabel">8.9</label></div>
            <div class="col"><label id="imc_commeent_label">Menor que P1</label></div>
        </div>
        <div class="row">
            <div class="col"><label id="overweight">No hay sobrepeso</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Sobrepeso a Partir de:</label></div>
            <div class="col"><label id="overweight_index">16.5 kg</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Obesidad a Partir de:</label></div>
            <div class="col"><label id="obesity_index">18.9 kg</label></div>
        </div>
    </div>
</div> 
</template>
<script>
import calculations from "../services/calculations.js";
export default {
  name: 'DatosPaciente',
  props: {
    msg: String
  },
  created(){  
    console.log(calculations.calculaEdad('2018-03-30'));
  }
}
</script>
<style scoped>
    .outer{
        width:40%;
        margin-left:2%;
        display:flex;
        flex-direction:column;
        align-items: center;
        border:1px solid;
    }
    .form-container{
        display:flex;
        flex-direction:column;
        width:90%;
    }
    .row{
        display:flex;
        margin-bottom:6px;
        font-size:20px;
    }
</style>