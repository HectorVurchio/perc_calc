const options = {
    chart: {
        redrawOnParentResize: true,
        height: 450,
        width: '100%',
        type: 'line',
       zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    title: {
        text: 'Peso para la Altura',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
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
            text: 'Altura en cm',
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
            text: 'Peso en Kg',
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
    annotations: {
        points: 
        [
            {
                x: 0,
                y: 0,
                marker: {
                size: 8,
                },
                label: {
                borderColor: '#FF4560',
                text: 'Paciente'
                }
            }
        ]
    },
};

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

export default{
    getOptions(table,size,weight){
        table.forEach((item)=>{
            options.xaxis.categories.push(item.altura);
            series[0].data.push(item.pesos[0]);
            series[1].data.push(item.pesos[1]);
            series[2].data.push(item.pesos[2]);
            series[3].data.push(item.pesos[3]);
            series[4].data.push(item.pesos[4]);
            series[5].data.push(item.pesos[5]);
            series[6].data.push(item.pesos[6]);
            series[7].data.push(item.pesos[7]);
            series[8].data.push(item.pesos[8]);
            series[9].data.push(item.pesos[9]);
            series[10].data.push(item.pesos[10]);
            series[11].data.push(item.pesos[11]);
            series[12].data.push(item.pesos[12]);
        });
        options.annotations.points[0].x = size;
        options.annotations.points[0].y = weight;
        return [options,series];
    }
}