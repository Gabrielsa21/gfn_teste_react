import { fetchMyData } from '../../custom/fetch/Config';
import { API } from '../../custom/path/Api';
export const MAP = 'MAP';


export function callMapApi() {
    return function (dispatch) {
        return fetchMyData(API.map, 'GET').then(response => {
            dispatch({
                type: MAP,
                map: response
            })
        }).catch((error) => {});
    }
}
