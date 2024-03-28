import React from 'react';
import TableBodyCell from './TableBodyCell';

function Table({ columns, data, addClassToLastCell = true }) { 
    return (
        <>
            <table className="table align-middle m-0">
                <thead>
                    <tr>
                        {columns.map((name, index) => (
                            <th key={index} scope="col">{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <TableBodyCell coinName={row[0]} coinType={row[0]} CoinImg='../../assets/img/doge.png' />
                            {row.slice(1).map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))
                            }       
                        </tr>
                    ))} */}
                    {/* {data.map((row, rowIndex) => {
                    const isDeposited = row[row.length - 1] === "INR Deposited";
                    return (
                        <tr key={rowIndex}>
                            <TableBodyCell coinName={row[0]} coinType={row[0]} CoinImg='../../assets/img/doge.png' />
                            {row.slice(1).map((cell, cellIndex) => (
                                <td key={cellIndex} className={cellIndex === row.length - 2 ? (isDeposited ? "text-theme3" : "text-theme4") : ""}>{cell}</td>
                            ))}
                        </tr>
                    );
                })} */}
                    {data.map((row, rowIndex) => {
                        const isDeposited = row[row.length - 1] === "INR Deposited";
                        return (
                            <tr key={rowIndex}>
                                <TableBodyCell coinName={row[0]} coinType={row[0]} CoinImg='../../assets/img/doge.png' />
                                {row.slice(1).map((cell, cellIndex) => (
                                    <td key={cellIndex} className={addClassToLastCell && cellIndex === row.length - 2 ? (isDeposited ? "text-theme3" : "text-theme4") : ""}>{cell}</td>
                                ))}
                            </tr>
                        );
                    })}
                    {/* <td><span className={`text-theme${row[4] === "INR Deposited" ? "4" : "3"}`}>{row[4]}</span></td> */}
                </tbody>
            </table>
        </>
    );
}

export default Table;
