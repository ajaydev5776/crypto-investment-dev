import React from 'react';
import Table from './Table';

function PortfolioTable() {
    const columns = ["Coin/Asset", "Availble Balance", "Locked Balance", "Total Holding", "Invested Value (INR)", "Current Value (INR)", "Total P&L (INR)", "Total P&L (%)"];
    const data = [
        ["Dogy", "₹100.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "0.00%"],
        ["Dogy1", "₹200.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "0.00%"],
        ["Dogy2", "₹300.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "₹0.00", "0.00%"],
    ];

    return (
        <>
            <Table columns={columns} data={data} addClassToLastCell={false} />
        </>
    );
}

export default PortfolioTable;
