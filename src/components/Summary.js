import React, { Component } from 'react';
import './summary.css';

class Summary extends Component {

    renderSummary(){
        const {stockSummary} = this.props;
        if(stockSummary){
            return Object.keys(stockSummary).map((key)=>
                <tr key={key}>
                    <td>{key}</td>
                    <td>{stockSummary[key].startingPrice}</td>
                    <td>{stockSummary[key].lowestPrice}</td>
                    <td>{stockSummary[key].highestPrice}</td>
                    <td>{stockSummary[key].currentPrice}</td>
                </tr>)
        }
    }

    render() {
        return (
            <div className="summary">
                <div className="summary-header">Summary</div>
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>Starting</th>
                                <th>Lowest</th>
                                <th>Highest</th>
                                <th>Current</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSummary()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Summary;
