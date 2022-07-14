<template>
  <div class="outer">
    <h1>{{ msg }}</h1>
    <div class="form-container">
      <form class="percform" id="percform-1" @submit.prevent="onSubmit">
        <div class="row">
            <div class="col">
              <label for="sexo">Sexo</label>
              <select name="sexo" id="sexo">
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </select>
            </div>
            <div class="col">
              <label for="talla">Talla(Centímetros)</label>
              <input type="text" id="talla">
            </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="peso">Peso(kg)</label>
            <input type="text" id="peso">
          </div>
          <div class="col">
            <label for="craneo">Longitud del Cráneo(cm)</label>
            <input type="text" id="craneo">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="fechnac">Fecha de Nacimiento</label>
            <input type="date" id="fenac">
          </div>
        </div>
        <div class="row">
          <button id="calcular" @click="calcula_percentiles()">Calcular</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercentilForm',
  props: {
    msg: String
  },
  methods:{
    calcula_percentiles(){
      const form = document.forms['percform-1'];
      const elements = form.elements;
      const sexo = elements['sexo'].value;
      const talla = elements['talla'].value;
      const peso = elements['peso'].value;
      const fenac = elements['fenac'].value;
      const craneo = elements['craneo'].value;
      const objvalues = {"trigger":true,"sexo":sexo,"talla":talla,"peso":peso,"fenac":fenac,"craneo":craneo};
      this.$emit('clicked', objvalues);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer{
  width:40%;
  border:1px solid;
  margin-right:2%;
}
.form-container{
  display:flex;
  justify-content: center;
}
.percform{
  width:80%;
}
.row{
  display:flex;
  margin-top:10px;
}
.col{
  display:flex;
  flex-direction:column;
  width:30%;
  margin-left:10%;
}
.row:last-child{
  display:flex;
  justify-content: center;
  margin-top:20px;
  height: 50px;
}
input[type=text]{
  height:22px;
}
input[type=date]{
  height:24px;
}

select{
  height:30px;
}
button{
  width:120px;
  height: 34px;
}
label{
  display:inline-block;
  text-align: left;
  margin-bottom: 4px;
}

</style>
