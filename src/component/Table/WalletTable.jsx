import React from 'react';
import Table from './Table';

function WalletTable() {
    const columns = ["Type", "INR Amount", "Date", "Time", "Transection"];
    const data = [
        ["Dogy", "100", "2024-03-26", "11:38:28", "INR Deposited"],
        ["Dogy1", "200", "2024-03-27", "11:38:28", "INR Withdrawn"],
        ["Dogy2", "300", "2024-03-28", "11:38:28", "INR Deposited"],
    ];

    return (
        <>
            <Table columns={columns} data={data} />
        </>
    );
}

export default WalletTable;
