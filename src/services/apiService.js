import axios from "axios";

export function fetchStockPrices(dispatch, actionCreator){
    axios.get(process.env.REACT_APP_API_PATH || 'http://localhost:3005/stockPrices')
        .then(response => {
            dispatch(actionCreator(response.data));
        })
        .catch(error => {
            console.log(error);
        });
}
