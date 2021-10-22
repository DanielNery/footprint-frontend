import '../../../node_modules/react-vis/dist/style.css';
import './Charts.css';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { 
    XYPlot, 
    LineMarkSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines
} from 'react-vis';

/* Configurações do socket */
const socket = io('http://127.0.0.1:5000', {
    transports: ['websocket', 'polling']
})

/* Faz a abertura de uma conexão com a API */
socket.on('connect', function() {
    const connectedMsg = 'I\'m connected! ' + String(socket.id)
    socket.emit('newConnect', {data: connectedMsg}, (returns) => {
        //console.log(connectedMsg)
    } );
});

const Cadence = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {

        socket.on('getData', function(newData) {
            //console.log(socket.id, ' ', newData)
            setData(currentData => {
                if (currentData.length > 10){
                    currentData.shift()
                }
                currentData.push(newData)
                return [...currentData]
            })
        })

    }, [])
    

    return (
        <div>
           
            <XYPlot height={400} width={600}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis animation/>
                <YAxis/>
              
                <LineMarkSeries 
                    data={data} 
                    color="#87c3fa"
                    animation
                    curve={'curveMonotoneX'}
                />
                    
            </XYPlot>
        </div>
    )

}


export default Cadence;