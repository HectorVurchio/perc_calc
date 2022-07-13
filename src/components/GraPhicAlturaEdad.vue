<template>
<div class="graphic">
  <apexchart type="line" :options="optionsAltura" :series="seriesAltura"></apexchart>
</div>
<div class="graphic">
  <apexchart type="line" :options="optionsPeso" :series="seriesPeso"></apexchart>
</div>
</template>
<script>
    export default {
        name: 'GraphicAlturaEdad',
        props: {
            optionsAltura: Object,
            seriesAltura: Array,
            optionsPeso: Object,
            seriesPeso: Array
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