import React from 'react'
import WalletTable from '../../component/Table/WalletTable'
import Pnlimg from '../../assets/img/pnlimg.svg'
import ArrowIMg from '../../assets/img/right-arrow.svg'
import ManageBalanceCard from '../../component/ManageBalanceCard/ManageBalanceCard';
const Wallet = () => {

    function WalletCardItems({ data }) {
        return (
            <div className="row gx-0 row-gap-3">
                {data.map((item, index) => (
                    <div className="col-6 col-md">
                        <ManageBalanceCard key={index} title={item.title} amount={item.amount} isHighlightTitleImg={item.isHighlightTitleImg}/>
                    </div>
                ))}
            </div>
        );
    }

    
    const data = [
        { title: "Total Balance", amount: "5457.00" , isHighlightTitleImg: false },
        { title: "Available Balance", amount: "5457.00", isHighlightTitleImg: true },
        { title: "Locked Balance", amount: "5457.00" , isHighlightTitleImg: true },
        { title: "TDS Paid", amount: "5457.00" , isHighlightTitleImg: true }
    ];


    return (
        <>
            <div className="container-fluid walletSection py-4 mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <ul className="nav nav-tabs navTabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active navLink" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Wallet</button>
                            </li>
                        </ul>
                        <div className="tab-content tabContent" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                <div className="contentBody">
                                    <div className="bg-theme1 carditemparent py-3">
                                            <WalletCardItems data={data} />
                                    </div>
                                    <div className="pnlDiv">
                                        <div className="row align-items-center row-gap-2">
                                            <div className="col">
                                                <div className="pnltxt">
                                                    Your Tax P&L statement is available. Kindly click to download.
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <div className="mainCArd position-relative">
                                                    <a href="javascript:;" className="stretched-link"></a>
                                                    <div className="row align-items-center gx-2">
                                                        <div className="col-auto">
                                                            <div className="pnlimg">
                                                                <img src={Pnlimg} alt="pnlImg" className="h-100 w-100" />
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="txt">
                                                                P&L Report
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="arrowimg">
                                                                <img src={ArrowIMg} alt="pnlImg" className="h-100 w-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="walletTable  table-responsive">
                                    <WalletTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Wallet