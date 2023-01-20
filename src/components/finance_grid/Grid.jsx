import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import { AgGridReact } from 'ag-grid-react';
import React, { useRef, useState, useEffect } from 'react';

const defaultColData = [
    { headerName: "Group A", children: [
        { field: 'Date', resizable: true },
        { field: 'open', resizable: true },
        { field: 'high', resizable: true }
    ]},
    { headerName: "Group B", children: [
        { field: 'low', resizable: true },
        { field: 'close', resizable: true },
        { field: 'volume', resizable: true },
        { field: 'buy?', resizable: true, editable: true },
    ]}
]

const Grid = () => {
    const gridRef = useRef();
    const [rowData, setRowData] = useState([{ 'Year': 2020, 'Debt-to-Equity': 2.2 }]);
    const [columnDefs, setColumnDefs] = useState(defaultColData);
    const [symbol, setSymbol] = useState();

    // set columns
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ef53ae197amsh177c70d72f4b3eep196983jsna2935fa20b89',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };

        const rows = [];

        fetch('https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=UBS&outputsize=compact&datatype=json', options)
            .then(response => response.json())
            .then(response => {
                setSymbol(response['Meta Data']['2. Symbol'])
                const dates = Object.keys(response['Time Series (Daily)']);
                for (let i = 0; i < dates.length; i++) {
                    let data = response['Time Series (Daily)'];
                    let nextRow = {
                        'Date': dates[i],
                        'open': data[dates[i]]['1. open'],
                        'high': data[dates[i]]['2. high'],
                        'low': data[dates[i]]['3. low'],
                        'close': data[dates[i]]['4. close'],
                        'volume': data[dates[i]]['5. volume'],
                    }
                    rows.push(nextRow);
                }
                setRowData(rows);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div>
                <span>Stock Symbol: {symbol}</span>
            </div>
            <div className='ag-theme-alpine' style={{ width: 1200, height: 1200 }}>
                <AgGridReact 
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={{ width: 100, editable: false, filter: 'agNumberColumnFilter' }}
                />
            </div>
        </div>
    )
}

export default Grid;