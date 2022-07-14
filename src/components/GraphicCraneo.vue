<template>
    <div class="graphic">
        <apexchart type="line" :options="optionsAltura" :series="seriesAltura"></apexchart>
    </div>
</template>
<script>
export default {
    name: 'GraphicCraneo',
    props: ["ChangeValues","value"],
    watch: {
        ChangeValues() {
            this.updateChart(this.value);
        },
    },
    data() {
        return {
                optionsAltura:{
                            chart: {
                                    id: 'graphicCraneo',
                                    redrawOnParentResize: true,
                                    height: 450,
                                    width: '100%',
                                    type: 'line',
                                    zoom: {enabled: false},
                            },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            title: {
                                text: 'Circunferencia Craneal para la Edad',
                                align: 'left'
                            },
                            grid: {
                                row: {
                                    colors: ['#f3f3f3', 'transparent'],
                                    opacity: 0.5
                                },
                            },
                            xaxis: {
                                type: 'category',
                                categories: [],
                                tickAmount: 30,
                                tickPlacement: 'between',
                                labels: {
                                    show: true,
                                    minHeight: 20,
                                    maxHeight: 120,
                                    style: {
                                        colors: [],
                                        fontSize: '10px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        cssClass: 'apexcharts-xaxis-label',
                                    },
                                    offsetX: 0,
                                    offsetY: 0,
                                    rotate: -45,
                                },
                                title: {
                                    text: '',
                                    offsetX: 0,
                                    offsetY: -80,
                                    style: {
                                        color: 'red',
                                        fontSize: '16px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 600,
                                        cssClass: 'apexcharts-xaxis-title',
                                    },
                                },
                            
                            },
                            yaxis: {
                                labels: {
                                    show: true,
                                    align: 'right',
                                    minWidth: 20,
                                    maxWidth: 160,
                                    style: {
                                        colors: ['red'],
                                        fontSize: '12px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        cssClass: 'apexcharts-yaxis-label',
                                    },
                                    offsetX: 0,
                                    offsetY: 0,
                                    rotate: 0,
                                },
                                title: {
                                    text: 'Perímetro en cm',
                                    rotate: -90,
                                    offsetX: 0,
                                    offsetY: 0,
                                    style: {
                                        color: 'red',
                                        fontSize: '16px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 600,
                                        cssClass: 'apexcharts-yaxis-title',
                                    },
                                },
                            },
                            annotations: {},
                    },
                    seriesAltura: [],
                }
               
    },
    methods:{
        updateChart(values) {
            const table = values.circunfCraneal[1];
            const age = values.circunfCraneal[2];
            const circunference = values.craneo;
            const series = [
                            {name: "P1", data: []},
                            {name: "P3", data: []},
                            {name: "P5", data: []},
                            {name: "P10", data: []},
                            {name: "P15", data: []},
                            {name: "P25", data: []},
                            {name: "P50", data: []},
                            {name: "P75", data: []},
                            {name: "P85", data: []},
                            {name: "P90", data: []},
                            {name: "P95", data: []},
                            {name: "P97", data: []},
                            {name: "P99", data: []},
            ];
            const optionsCategories = [];
            table.forEach((item,index)=>{
                        optionsCategories.push(index);
                        series[0].data.push(item[0]);
                        series[1].data.push(item[1]);
                        series[2].data.push(item[2]);
                        series[3].data.push(item[3]);
                        series[4].data.push(item[4]);
                        series[5].data.push(item[5]);
                        series[6].data.push(item[6]);
                        series[7].data.push(item[7]);
                        series[8].data.push(item[8]);
                        series[9].data.push(item[9]);
                        series[10].data.push(item[10]);
                        series[11].data.push(item[11]);
                        series[12].data.push(item[12]);
            });
            this.optionsAltura = {
                xaxis: {
                    categories: optionsCategories,
                    tickAmount: (table.length < 15) ? 14 : 30,
                    title: {
                        text: (table.length < 15) ? 'Edad en Semanas' : 'Edad en Meses',
                    },
                },
                annotations: {
                    points: 
                                [
                                    {
                                        x: age,
                                        y: circunference,
                                        marker: {
                                        size: 8,
                                        },
                                        label: {
                                        borderColor: '#FF4560',
                                        text: 'Paciente'
                                        }
                                    }
                                ]
                }
            };
            this.seriesAltura = series;
        }
    },
}
</script>
<style scoped>
    .graphic{
        width:50%;
    }
</style>