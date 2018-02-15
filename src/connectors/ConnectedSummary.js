import {connect} from "react-redux";
import Summary from "../components/Summary";

function mapStateToProps(state){
    return {
        stockSummary: state.stockPrices.stockSummary
    }
}

const ConnectedSummary = connect(mapStateToProps)(Summary);

export default ConnectedSummary;
