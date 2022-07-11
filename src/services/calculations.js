import moment from 'moment';
import 'moment-precise-range-plugin';

export default{
    calculaEdad(nacimiento){
        const now = moment().format("YYYY-MM-DD");
        return moment.preciseDiff(nacimiento,now,true);
    }
}