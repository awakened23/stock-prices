import * as apiService from "../services/apiService";

const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
const TOGGLE_RECORDING = 'TOGGLE_RECORDING';

export function receiveStockPrices(json){
    return {
        type: RECEIVE_STOCK_PRICES,
        data: json
    }
}

export function toggleRecording(){
    return {
        type: TOGGLE_RECORDING
    }
}

export function fetchStockPrices(){
    return (dispatch) => {
        apiService.fetchStockPrices(dispatch, receiveStockPrices);
    }
}

export function updateStockSummary(stockSummary, stocks){
    stocks.forEach((stock)=>{
        if(stockSummary[stock.code]){
                stockSummary[stock.code].currentPrice=stock.price;
                if(stockSummary[stock.code].lowestPrice>stock.price){
                    stockSummary[stock.code].lowestPrice=stock.price;
                }
                if(stockSummary[stock.code].highestPrice<stock.price){
                    stockSummary[stock.code].highestPrice=stock.price;
                }
        }else{
            stockSummary[stock.code] = {};
            stockSummary[stock.code].startingPrice=stock.price;
            stockSummary[stock.code].lowestPrice=stock.price;
            stockSummary[stock.code].highestPrice=stock.price;
            stockSummary[stock.code].currentPrice=stock.price;
        }
    });
}

export default function reducer(state = {isRecording: true}, action) {
    switch (action.type) {
        case RECEIVE_STOCK_PRICES:
            let newStockSummary = {...state.stockSummary};
            updateStockSummary(newStockSummary, action.data);

            return {...state,
                stocks: action.data,
                stockSummary: newStockSummary
            };
        case TOGGLE_RECORDING:
            return {...state, isRecording: !state.isRecording};
        default:
            return state;
    }
}
