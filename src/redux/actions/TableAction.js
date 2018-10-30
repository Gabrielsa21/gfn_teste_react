import { fetchMyData } from '../../custom/fetch/Config';
import { API } from '../../custom/path/Api'
export const TABLE = 'TABLE';


export function getInfoTable(rows) {
    return function (dispatch) {
        return fetchMyData(API.dados, 'GET', rows).then(response => {
            dispatch({
                type: TABLE,
                rows: response
            })
        }).catch((error) => {});
    }
}
