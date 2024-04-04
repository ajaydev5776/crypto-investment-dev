import React from 'react'
import InvestmentPlan from '../../component/InvestmentPlan/InvestmentPlan'

const Plans = () => {
  return (
    <>
    <div class="container-fluid planSection pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="sectionHeading">
                    Choose your plan
                </div>
            </div>
            <div class="col-12">
                <div class="row gy-4 pt-5">
                    <InvestmentPlan plantime="Weekly" plan_prich="20$" totleplantime="per Week" saveprice="$9" planfeature="One account"/>   
                    <InvestmentPlan plantime="Monthly" plan_prich="39$" totleplantime="per month" saveprice="$15" planfeature="One account" isActive = {true}/>   
                    <InvestmentPlan plantime="Yearly" plan_prich="60$" totleplantime="per year" saveprice="$25" planfeature="Six account"/>   
                </div>
            </div>
        </div>
    </div>
</div>
    {/* <InvestmentPlan/> */}
    </>
  )
}

export default Plans