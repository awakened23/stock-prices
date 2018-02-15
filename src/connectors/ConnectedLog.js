import {connect} from "react-redux";
import Log from "../components/Log";
import {fetchStockPrices, toggleRecording} from "../modules/stockPrices";

function mapStateToProps(state){
    return {
        isRecording: state.stockPrices.isRecording,
        stocks: state.stockPrices.stocks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStockPrices: () => dispatch(fetchStockPrices()),
        toggleRecording: () => dispatch(toggleRecording())
    };
}

const ConnectedLog = connect(mapStateToProps, mapDispatchToProps)(Log);

export default ConnectedLog;
