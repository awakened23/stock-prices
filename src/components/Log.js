import React, { Component } from 'react';
import './Log.css';
import moment from 'moment';

class Log extends Component {

    constructor(props) {
        super(props);
        this.state = {
            log: []
        };
        setInterval(function() {
            props.fetchStockPrices();
        }, 2000);
    }

    componentWillReceiveProps(nextProps){

        if(this.props.stocks !== nextProps.stocks && nextProps.isRecording){
            const {log} = this.state;

            if(log.length>0){
                log.unshift(<br key={log.length}/>);
            }
            log.unshift(nextProps.stocks.map((stock)=> <div key={stock.code}>{stock.code}: ${stock.price}</div> ));
            log.unshift(<div key={log.length}>Updates for {moment().format('YYYY-MM-DD HH:mm:ss')}</div>);

            this.setState({log});
        }
    }

    render() {
        const {isRecording, fetchStockPrices, toggleRecording} = this.props;

        return (
            <div className="log">
                <div className="log-header">Log <button onClick={()=>{
                    toggleRecording();
                }}>{isRecording?'Pause Log':'Resume Log'}</button></div>
                <div className="log-content">{this.state.log}</div>
            </div>
        );
    }
}

export default Log;
