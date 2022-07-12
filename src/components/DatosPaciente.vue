<template>
<div class="outer_patient">
    <h1>{{ msg }}</h1>
    <div class="form-container">
        <div class="row">
            <div class="col"><label>Sexo:</label></div>
            <div class="col"><label id="genderlabel">{{ sexo }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Edad:</label></div>
            <div class="col"><label id="agelabel">{{ edad }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Talla:</label></div>
            <div class="col"><label id="sizelabel">{{ talla }} cm</label></div>
            <div class="col"><label id="size_commeent_label">{{ percentilTalla }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Peso:</label></div>
            <div class="col"><label id="weightlabel">{{ peso }} kg</label></div>
            <div class="col"><label id="weight_commeent_label">{{ percentilPeso }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Peso para su Altura:</label></div>
            <div class="col"><label id="tallwei_commeent_label">{{ pesoParaAltura }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label>IMC (Índice de Masa Corporal):</label></div>
            <div class="col"><label id="imclabel">{{ imc }} Kg/m2</label></div>
            <div class="col"><label id="imc_commeent_label">{{ PerIMCEdad }}</label></div>
        </div>
        <div class="row">
            <div class="col"><label id="overweight">No hay sobrepeso</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Sobrepeso a Partir de:</label></div>
            <div class="col"><label id="overweight_index">{{ sobrepeso }} kg</label></div>
        </div>
        <div class="row">
            <div class="col"><label>Obesidad a Partir de:</label></div>
            <div class="col"><label id="obesity_index">{{ obesidad }} kg</label></div>
        </div>
    </div>
</div> 
</template>
<script>
//import calculations from "../services/calculations.js";
export default {
  name: 'DatosPaciente',
  props: {
    msg: String,
    sexo: String,
    edad: String,
    talla: String,
    percentilTalla: String,
    peso: String,
    percentilPeso: String,
    pesoParaAltura: String,
    imc: String,
    PerIMCEdad: String,
    sobrepeso: String,
    obesidad: String
  },
  created(){  
    //console.log(calculations.calculaEdad('2018-03-30'));
  }
}
</script>
<style scoped>
    .outer_patient{
        width:40%;
        margin-left:2%;
        display:flex;
        flex-direction:column;
        align-items: center;
        border:1px solid;
        /*visibility: hidden;*/
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