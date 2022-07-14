//PERCENTIL TALLA POR EDAD
const percentiles = ['P1','P3','P5','P10','P15','P25','P50','P75','P85','P90','P95','P97','P99'];
//ninas (femenino) de 0 swmanas a 13 semanas de edad. cada renglon representa la semana
// y los percentiles estan ordenados [p1,p3,p5,p10,p15,p25,p50,p75,p85,p90,p95,p97,p99] talla en cm
const hembras_0w_13w = [
    ['31.1','31.7','31.9','32.4','32.7','33.1','33.9','34.7','35.1','35.4','35.8','36.1','36.6'],
	['31.8','32.4','32.6','33.1','33.3','33.8','34.6','35.3','35.8','36','36.5','36.7','37.3'],
	['32.6','33.1','33.3','33.8','34','34.5','35.2','36','36.4','36.7','37.1','37.4','37.9'],
	['33.1','33.7','33.9','34.4','34.6','35.1','35.8','36.6','37','37.3','37.7','38','38.5'],
	['33.7','34.2','34.5','34.9','35.2','35.6','36.4','37.2','37.6','37.9','38.3','38.6','39.1'],
	['34.1','34.6','34.9','35.3','35.6','36.1','36.8','37.6','38.1','38.4','38.8','39.1','39.6'],
	['34.5','35','35.3','35.7','36','36.5','37.3','38.1','38.5','38.8','39.2','39.5','40'],
	['34.9','35.4','35.7','36.1','36.4','36.9','37.7','38.5','38.9','39.2','39.6','39.9','40.4'],
	['35.2','35.7','36','36.5','36.8','37.2','38','38.8','39.3','39.6','40','40.3','40.8'],
	['35.5','36.1','36.4','36.8','37.1','37.5','38.4','39.2','39.6','39.9','40.3','40.6','41.2'],
	['35.8','36.4','36.7','37.1','37.4','37.8','38.7','39.5','39.9','40.2','40.7','41','41.5'],
	['36.1','36.7','36.9','37.4','37.7','38.1','39','39.8','40.2','40.5','41','41.3','41.8'],
	['36.4','36.9','37.2','37.7','38','38.4','39.3','40.1','40.5','40.8','41.3','41.6','42.1'],
	['36.6','37.2','37.5','37.9','38.2','38.7','39.5','40.4','40.8','41.1','41.6','41.9','42.4']
];
//ninas (femenino) de 0 meses a 60 meses de edad. cada renglon representa el mes. valores en cm.
const hembras_3m_5y = [
    ['31.1','31.7','31.9','32.4','32.7','33.1','33.9','34.7','35.1','35.4','35.8','36.1','36.6'],
	['33.8','34.3','34.6','35','35.3','35.8','36.5','37.3','37.8','38','38.5','38.8','39.3'],
	['35.4','36','36.3','36.7','37','37.4','38.3','39.1','39.5','39.8','40.2','40.5','41.1'],
	['36.6','37.2','37.5','37.9','38.2','38.7','39.5','40.4','40.8','41.1','41.6','41.9','42.4'],
	['37.6','38.2','38.5','39','39.3','39.7','40.6','41.4','41.9','42.2','42.7','43','43.5'],
	['38.5','39','39.3','39.8','40.1','40.6','41.5','42.3','42.8','43.1','43.6','43.9','44.5'],
	['39.2','39.7','40.1','40.5','40.8','41.3','42.2','43.1','43.5','43.9','44.3','44.6','45.2'],
	['39.8','40.4','40.7','41.1','41.5','41.9','42.8','43.7','44.2','44.5','45','45.3','45.9'],
	['40.3','40.9','41.2','41.7','42','42.5','43.4','44.3','44.7','45.1','45.6','45.9','46.5'],
	['40.7','41.3','41.6','42.1','42.4','42.9','43.8','44.7','45.2','45.5','46','46.3','46.9'],
	['41.1','41.7','42','42.5','42.8','43.3','44.2','45.1','45.6','46','46.4','46.8','47.4'],
	['41.4','42','42.4','42.9','43.2','43.7','44.6','45.5','46','46.3','46.8','47.1','47.7'],
	['41.7','42.3','42.7','43.2','43.5','44','44.9','45.8','46.3','46.6','47.1','47.5','48.1'],
	['42','42.6','42.9','43.4','43.8','44.3','45.2','46.1','46.6','46.9','47.4','47.7','48.3'],
	['42.2','42.9','43.2','43.7','44','44.5','45.4','46.3','46.8','47.2','47.7','48','48.6'],
	['42.5','43.1','43.4','43.9','44.2','44.7','45.7','46.6','47.1','47.4','47.9','48.2','48.8'],
	['42.7','43.3','43.6','44.1','44.4','44.9','45.9','46.8','47.3','47.6','48.1','48.5','49.1'],
	['42.9','43.5','43.8','44.3','44.6','45.1','46.1','47','47.5','47.8','48.3','48.7','49.3'],
	['43','43.6','44','44.5','44.8','45.3','46.2','47.2','47.7','48','48.5','48.8','49.5'],
	['43.2','43.8','44.1','44.6','45','45.5','46.4','47.3','47.8','48.2','48.7','49','49.6'],
	['43.4','44','44.3','44.8','45.1','45.6','46.6','47.5','48','48.4','48.9','49.2','49.8'],
	['43.5','44.1','44.5','45','45.3','45.8','46.7','47.7','48.2','48.5','49','49.4','50'],
	['43.7','44.3','44.6','45.1','45.4','46','46.9','47.8','48.3','48.7','49.2','49.5','50.1'],
	['43.8','44.4','44.7','45.3','45.6','46.1','47','48','48.5','48.8','49.3','49.7','50.3'],
	['43.9','44.6','44.9','45.4','45.7','46.2','47.2','48.1','48.6','49','49.5','49.8','50.4'],
	['44.1','44.7','45','45.5','45.9','46.4','47.3','48.3','48.8','49.1','49.6','49.9','50.6'],
	['44.2','44.8','45.2','45.7','46','46.5','47.5','48.4','48.9','49.2','49.8','50.1','50.7'],
	['44.3','44.9','45.3','45.8','46.1','46.6','47.6','48.5','49','49.4','49.9','50.2','50.8'],
	['44.4','45.1','45.4','45.9','46.3','46.8','47.7','48.7','49.2','49.5','50','50.3','51'],
	['44.6','45.2','45.5','46','46.4','46.9','47.8','48.8','49.3','49.6','50.1','50.5','51.1'],
	['44.7','45.3','45.6','46.1','46.5','47','47.9','48.9','49.4','49.7','50.2','50.6','51.2'],
	['44.8','45.4','45.7','46.2','46.6','47.1','48','49','49.5','49.8','50.4','50.7','51.3'],
	['44.9','45.5','45.8','46.3','46.7','47.2','48.1','49.1','49.6','49.9','50.5','50.8','51.4'],
	['45','45.6','45.9','46.4','46.8','47.3','48.2','49.2','49.7','50','50.6','50.9','51.5'],
	['45.1','45.7','46','46.5','46.9','47.4','48.3','49.3','49.8','50.1','50.7','51','51.6'],
	['45.1','45.8','46.1','46.6','47','47.5','48.4','49.4','49.9','50.2','50.7','51.1','51.7'],
	['45.2','45.9','46.2','46.7','47','47.6','48.5','49.5','50','50.3','50.8','51.2','51.8'],
	['45.3','45.9','46.3','46.8','47.1','47.6','48.6','49.5','50.1','50.4','50.9','51.3','51.9'],
	['45.4','46','46.3','46.9','47.2','47.7','48.7','49.6','50.1','50.5','51','51.3','52'],
	['45.5','46.1','46.4','46.9','47.3','47.8','48.7','49.7','50.2','50.6','51.1','51.4','52'],
	['45.5','46.2','46.5','47','47.4','47.9','48.8','49.8','50.3','50.6','51.2','51.5','52.1'],
	['45.6','46.2','46.6','47.1','47.4','47.9','48.9','49.8','50.4','50.7','51.2','51.6','52.2'],
	['45.7','46.3','46.6','47.1','47.5','48','49','49.9','50.4','50.8','51.3','51.6','52.3'],
	['45.7','46.4','46.7','47.2','47.6','48.1','49','50','50.5','50.8','51.4','51.7','52.3'],
	['45.8','46.4','46.8','47.3','47.6','48.1','49.1','50.1','50.6','50.9','51.4','51.8','52.4'],
	['45.9','46.5','46.8','47.3','47.7','48.2','49.2','50.1','50.6','51','51.5','51.8','52.5'],
	['45.9','46.5','46.9','47.4','47.7','48.3','49.2','50.2','50.7','51','51.6','51.9','52.5'],
	['46','46.6','46.9','47.5','47.8','48.3','49.3','50.2','50.7','51.1','51.6','51.9','52.6'],
	['46','46.7','47','47.5','47.9','48.4','49.3','50.3','50.8','51.2','51.7','52','52.6'],
	['46.1','46.7','47.1','47.6','47.9','48.4','49.4','50.3','50.9','51.2','51.7','52.1','52.7'],
	['46.1','46.8','47.1','47.6','48','48.5','49.4','50.4','50.9','51.3','51.8','52.1','52.7'],
	['46.2','46.8','47.2','47.7','48','48.5','49.5','50.5','51','51.3','51.8','52.2','52.8'],
	['46.2','46.9','47.2','47.7','48.1','48.6','49.5','50.5','51','51.4','51.9','52.2','52.9'],
	['46.3','46.9','47.3','47.8','48.1','48.6','49.6','50.6','51.1','51.4','51.9','52.3','52.9'],
	['46.3','47','47.3','47.8','48.2','48.7','49.6','50.6','51.1','51.5','52','52.3','53'],
	['46.4','47','47.4','47.9','48.2','48.7','49.7','50.7','51.2','51.5','52','52.4','53'],
	['46.4','47.1','47.4','47.9','48.3','48.8','49.7','50.7','51.2','51.6','52.1','52.4','53.1'],
	['46.5','47.1','47.4','48','48.3','48.8','49.8','50.7','51.3','51.6','52.1','52.5','53.1'],
	['46.5','47.2','47.5','48','48.4','48.9','49.8','50.8','51.3','51.7','52.2','52.5','53.1'],
	['46.6','47.2','47.5','48.1','48.4','48.9','49.9','50.8','51.4','51.7','52.2','52.6','53.2'],
	['46.6','47.2','47.6','48.1','48.4','49','49.9','50.9','51.4','51.7','52.3','52.6','53.2'],

];

//ninos (masculino) de 0 a 3 semanas de edad. Talla en cm
const varones_0w_13w = [
    ['31.5','32.1','32.4','32.8','33.1','33.6','34.5','35.3','35.8','36.1','36.6','36.9','37.4'],
	['32.3','32.9','33.2','33.6','33.9','34.3','35.2','36','36.4','36.7','37.2','37.5','38'],
	['33.1','33.7','33.9','34.4','34.7','35.1','35.9','36.7','37.1','37.4','37.8','38.1','38.6'],
	['33.8','34.3','34.6','35','35.3','35.7','36.5','37.3','37.7','38','38.4','38.7','39.2'],
	['34.4','34.9','35.2','35.6','35.9','36.3','37.1','37.9','38.3','38.6','39','39.3','39.8'],
	['34.9','35.4','35.7','36.1','36.4','36.8','37.6','38.4','38.8','39.1','39.5','39.8','40.3'],
	['35.3','35.9','36.1','36.6','36.8','37.3','38.1','38.8','39.3','39.6','40','40.3','40.8'],
	['35.8','36.3','36.6','37','37.3','37.7','38.5','39.3','39.7','40','40.4','40.7','41.2'],
	['36.1','36.7','36.9','37.4','37.7','38.1','38.9','39.7','40.1','40.4','40.8','41.1','41.6'],
	['36.5','37','37.3','37.7','38','38.4','39.2','40','40.5','40.7','41.2','41.4','42'],
	['36.8','37.4','37.6','38.1','38.4','38.8','39.6','40.4','40.8','41.1','41.5','41.8','42.3'],
	['37.2','37.7','38','38.4','38.7','39.1','39.9','40.7','41.1','41.4','41.8','42.1','42.6'],
	['37.5','38','38.3','38.7','39','39.4','40.2','41','41.4','41.7','42.1','42.4','43'],
	['37.8','38.3','38.6','39','39.3','39.7','40.5','41.3','41.7','42','42.4','42.7','43.3'],
];

// ninos(masculino) de 0 meses a 60 meses. Talla en cm
const varones_3m_5y = [
	['31.5','32.1','32.4','32.8','33.1','33.6','34.5','35.3','35.8','36.1','36.6','36.9','37.4'],
	['34.6','35.1','35.4','35.8','36.1','36.5','37.3','38.1','38.5','38.8','39.2','39.5','40'],
	['36.4','36.9','37.2','37.6','37.9','38.3','39.1','39.9','40.3','40.6','41.1','41.3','41.9'],
	['37.8','38.3','38.6','39','39.3','39.7','40.5','41.3','41.7','42','42.5','42.7','43.3'],
	['38.9','39.4','39.7','40.1','40.4','40.8','41.6','42.4','42.9','43.2','43.6','43.9','44.4'],
	['39.7','40.3','40.6','41','41.3','41.7','42.6','43.4','43.8','44.1','44.5','44.8','45.4'],
	['40.5','41','41.3','41.8','42.1','42.5','43.3','44.2','44.6','44.9','45.3','45.6','46.2'],
	['41.1','41.7','42','42.4','42.7','43.1','44','44.8','45.3','45.6','46','46.3','46.8'],
	['41.6','42.2','42.5','42.9','43.2','43.7','44.5','45.4','45.8','46.1','46.6','46.9','47.4'],
	['42.1','42.6','42.9','43.4','43.7','44.2','45','45.8','46.3','46.6','47.1','47.4','47.9'],
	['42.5','43','43.3','43.8','44.1','44.6','45.4','46.3','46.7','47','47.5','47.8','48.4'],
	['42.8','43.4','43.7','44.1','44.4','44.9','45.8','46.6','47.1','47.4','47.9','48.2','48.7'],
	['43.1','43.6','44','44.4','44.7','45.2','46.1','46.9','47.4','47.7','48.2','48.5','49.1'],
	['43.3','43.9','44.2','44.7','45','45.5','46.3','47.2','47.7','48','48.5','48.8','49.3'],
	['43.6','44.1','44.4','44.9','45.2','45.7','46.6','47.5','47.9','48.3','48.7','49','49.6'],
	['43.8','44.3','44.7','45.1','45.5','45.9','46.8','47.7','48.2','48.5','49','49.3','49.8'],
	['44','44.5','44.8','45.3','45.6','46.1','47','47.9','48.4','48.7','49.2','49.5','50.1'],
	['44.1','44.7','45','45.5','45.8','46.3','47.2','48.1','48.6','48.9','49.4','49.7','50.3'],
	['44.3','44.9','45.2','45.7','46','46.5','47.4','48.3','48.7','49.1','49.6','49.9','50.5'],
	['44.4','45','45.3','45.8','46.2','46.6','47.5','48.4','48.9','49.2','49.7','50','50.6'],
	['44.6','45.2','45.5','46','46.3','46.8','47.7','48.6','49.1','49.4','49.9','50.2','50.8'],
	['44.7','45.3','45.6','46.1','46.4','46.9','47.8','48.7','49.2','49.6','50.1','50.4','51'],
	['44.8','45.4','45.8','46.3','46.6','47.1','48','48.9','49.4','49.7','50.2','50.5','51.1'],
	['45','45.6','45.9','46.4','46.7','47.2','48.1','49','49.5','49.9','50.3','50.7','51.3'],
	['45.1','45.7','46','46.5','46.8','47.3','48.3','49.2','49.7','50','50.5','50.8','51.4'],
	['45.2','45.8','46.1','46.6','47','47.5','48.4','49.3','49.8','50.1','50.6','50.9','51.6'],
	['45.3','45.9','46.2','46.7','47.1','47.6','48.5','49.4','49.9','50.3','50.8','51.1','51.7'],
	['45.4','46','46.3','46.8','47.2','47.7','48.6','49.5','50','50.4','50.9','51.2','51.8'],
	['45.5','46.1','46.5','47','47.3','47.8','48.7','49.7','50.2','50.5','51','51.3','51.9'],
	['45.6','46.2','46.6','47.1','47.4','47.9','48.8','49.8','50.3','50.6','51.1','51.4','52.1'],
	['45.7','46.3','46.6','47.1','47.5','48','48.9','49.9','50.4','50.7','51.2','51.6','52.2'],
	['45.8','46.4','46.7','47.2','47.6','48.1','49','50','50.5','50.8','51.3','51.7','52.3'],
	['45.9','46.5','46.8','47.3','47.7','48.2','49.1','50.1','50.6','50.9','51.4','51.8','52.4'],
	['45.9','46.6','46.9','47.4','47.8','48.3','49.2','50.2','50.7','51','51.5','51.9','52.5'],
	['46','46.6','47','47.5','47.8','48.3','49.3','50.3','50.8','51.1','51.6','52','52.6'],
	['46.1','46.7','47.1','47.6','47.9','48.4','49.4','50.3','50.8','51.2','51.7','52','52.7'],
	['46.2','46.8','47.1','47.6','48','48.5','49.5','50.4','50.9','51.3','51.8','52.1','52.8'],
	['46.2','46.9','47.2','47.7','48.1','48.6','49.5','50.5','51','51.4','51.9','52.2','52.8'],
	['46.3','46.9','47.3','47.8','48.1','48.6','49.6','50.6','51.1','51.4','52','52.3','52.9'],
	['46.3','47','47.3','47.8','48.2','48.7','49.7','50.6','51.2','51.5','52','52.4','53'],
	['46.4','47','47.4','47.9','48.3','48.8','49.7','50.7','51.2','51.6','52.1','52.4','53.1'],
	['46.5','47.1','47.4','48','48.3','48.8','49.8','50.8','51.3','51.7','52.2','52.5','53.2'],
	['46.5','47.2','47.5','48','48.4','48.9','49.9','50.8','51.4','51.7','52.2','52.6','53.2'],
	['46.6','47.2','47.6','48.1','48.4','49','49.9','50.9','51.4','51.8','52.3','52.7','53.3'],
	['46.6','47.3','47.6','48.1','48.5','49','50','51','51.5','51.9','52.4','52.7','53.4'],
	['46.7','47.3','47.7','48.2','48.5','49.1','50.1','51','51.6','51.9','52.4','52.8','53.4'],
	['46.7','47.4','47.7','48.2','48.6','49.1','50.1','51.1','51.6','52','52.5','52.8','53.5'],
	['46.8','47.4','47.8','48.3','48.6','49.2','50.2','51.1','51.7','52','52.6','52.9','53.6'],
	['46.8','47.5','47.8','48.3','48.7','49.2','50.2','51.2','51.7','52.1','52.6','53','53.6'],
	['46.9','47.5','47.9','48.4','48.7','49.3','50.3','51.2','51.8','52.1','52.7','53','53.7'],
	['46.9','47.5','47.9','48.4','48.8','49.3','50.3','51.3','51.8','52.2','52.7','53.1','53.7'],
	['46.9','47.6','47.9','48.5','48.8','49.4','50.4','51.3','51.9','52.2','52.8','53.1','53.8'],
	['47','47.6','48','48.5','48.9','49.4','50.4','51.4','51.9','52.3','52.8','53.2','53.8'],
	['47','47.7','48','48.6','48.9','49.5','50.4','51.4','52','52.3','52.9','53.2','53.9'],
	['47.1','47.7','48.1','48.6','49','49.5','50.5','51.5','52','52.4','52.9','53.3','53.9'],
	['47.1','47.7','48.1','48.6','49','49.5','50.5','51.5','52.1','52.4','53','53.3','54'],
	['47.1','47.8','48.1','48.7','49','49.6','50.6','51.6','52.1','52.5','53','53.4','54'],
	['47.2','47.8','48.2','48.7','49.1','49.6','50.6','51.6','52.2','52.5','53.1','53.4','54.1'],
	['47.2','47.9','48.2','48.8','49.1','49.7','50.7','51.7','52.2','52.6','53.1','53.5','54.1'],
	['47.2','47.9','48.2','48.8','49.2','49.7','50.7','51.7','52.2','52.6','53.2','53.5','54.2'],
	['47.3','47.9','48.3','48.8','49.2','49.7','50.7','51.7','52.3','52.7','53.2','53.5','54.2']
];

//la edad viene en meses
export default{
    getPercentiles(){
        return percentiles;
    },
    getCraneoHembras(age){
        if(age < 3){ return hembras_0w_13w;}
        return hembras_3m_5y;
    },
    getCraneoVarones(age){
        if(age < 3){ return varones_0w_13w;}
        return varones_3m_5y;
    }
}