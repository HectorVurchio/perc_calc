<template>
<div class="graphic">
  <apexchart type="line" :options="optionsAlturaPeso" :series="seriesAlturaPeso"></apexchart>
</div>
<div class="graphic">
  <apexchart type="line" :options="optionsIMCedad" :series="seriesIMCedad"></apexchart>
</div>
</template>
<script>
    export default {
        name: 'GraphicAlturaEdad',
        props: {
            optionsAlturaPeso: Object,
            seriesAlturaPeso: Array,
            optionsIMCedad: Object,
            seriesIMCedad: Array
        },
        data() {
            return {}
        }
    }

</script>
<style scoped>
.graphic{
  width:50%;
}
</style>