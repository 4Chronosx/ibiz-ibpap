
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faLightbulb, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Score from "./Score";
import Feedback from "./Feedback";
import Table from './Table';
import SubScore from './SubScore';
import FinanceDetail from './FinanceDetail';


function Feasibility({genPdf, handleSumbmit, result}) {

    const [activeTab, setActiveTab] = useState("overview");
    const navigate = useNavigate();




    return(<>
        {/* PDF Loading Overlay */}
        

        <div className="h-screen w-screen flex justify-center items-center font-istok">
            <div className="h-[47rem] w-[40rem] bg-stroke-100 rounded-3xl flex flex-col shadow-lg">
                {/* Header*/}
                <div className="h-[10%] w-full bg-primary-pink rounded-t-3xl flex items-center px-10">
                    <div className="h-[2.5rem] w-[2.5rem] bg-secondary-pink rounded-lg"></div>
                    <div className="flex flex-col px-5">
                        <h1 className="text-secondary-pink text-lg font-inria font-bold">{result.businessName}</h1>
                        <div className="flex items-center h-[1.5rem]">
                            <div className="bg-secondary-pink h-[1rem] w-[1rem] rounded-sm"></div>
                            <p className="text-secondary-pink px-2">{result.location}</p>
                        </div>
                    </div>
                </div>
                {/* Navbar*/}

                <div className="w-full h-[8%] bg-stroke-200 flex items-center justify-center">
                    <div className="bg-primary-white p-2 w-[90%] rounded-lg flex justify-between">
                        <button className={activeTab==="overview" ? `bg-secondary-pink px-4 rounded-lg text-primary-pink` : `bg-primary-white px-4 rounded-lg text-secondary-pink`}  onClick={() => setActiveTab('overview')}>Overview</button>
                        <button className={activeTab==="product" ? `bg-secondary-pink px-4 rounded-lg text-primary-pink` : `bg-primary-white px-4 rounded-lg text-secondary-pink`}  onClick={() => setActiveTab('product')}>Product/Service</button>
                        <button className={activeTab==="market" ? `bg-secondary-pink px-4 rounded-lg text-primary-pink` : `bg-primary-white px-4 rounded-lg text-secondary-pink`}  onClick={() => setActiveTab('market')}>Market</button>
                        <button className={activeTab==="organization" ? `bg-secondary-pink px-4 rounded-lg text-primary-pink` : `bg-primary-white px-4 rounded-lg text-secondary-pink`}  onClick={() => setActiveTab('organization')}>Organization</button>
                        <button className={activeTab==="finance" ? `bg-secondary-pink px-4 rounded-lg text-primary-pink` : `bg-primary-white px-4 rounded-lg text-secondary-pink`}  onClick={() => setActiveTab('finance')}>Finance</button>
                    </div>
                </div>

                {/* CONTENT */}

                <div className="bg-primary-white flex-1 rounded-b-3xl p-4">
                    <h1 className="pb-2">Business Feasibility Analysis</h1>
                    {activeTab==="overview" && 
                        <div className="overflow-y-scroll h-[30rem]">
                            <Score title="Overall Feasibility Score" rating={result.summary.overallRating} description={result.summary.verdict}></Score>
                            <div className="flex flex-wrap gap-1 justify-center py-1">
                                <SubScore title={result.summary.overview[0].category} bgSecondary={"bg-secondary-pink"} txPrimary={"text-primary-pink"} shortSummary={result.summary.overview[0].summary} score={result.summary.overview[0].rating}></SubScore>
                                 <SubScore title={result.summary.overview[0].category} bgSecondary={"bg-secondary-blue"} txPrimary={"text-primary-blue"} shortSummary={result.summary.overview[0].summary} score={result.summary.overview[0].rating}></SubScore>
                            </div>
                            <div className="flex flex-wrap gap-1 justify-center py-1">
                                 <SubScore title={result.summary.overview[0].category} bgSecondary={"bg-seconary-orange"} txPrimary={"text-primary-orange"} shortSummary={result.summary.overview[0].summary} score={result.summary.overview[0].rating}></SubScore>
                                 <SubScore title={result.summary.overview[0].category} bgSecondary={"bg-secondary-yellow"} txPrimary={"text-primary-yellow"} shortSummary={result.summary.overview[0].summary} score={result.summary.overview[0].rating}></SubScore>
                            </div>
                            <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"key Findings"} content={result.summary.keyFindings} txSecondary={"text-secondary-green"}></Feedback>
                            
                        </div>
                    }

                    {activeTab==="product" && 
                        <div className="overflow-y-scroll h-[30rem]">
                            <div className="flex w-full justify-center flex-wrap gap-2">
                                <Score title={"Category Feasibility Score"} rating={result.category.productService.rating} description={result.category.productService.verdict}></Score>
                                <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={[result.category.productService.summary]} txSecondary={"text-secondary-green"}></Feedback>
                            </div>
                            <Feedback icon={faDumbbell} bgPrimary={"bg-primary-blue"} bgSecondary={"bg-secondary-blue"} txPrimary={"text-primary-blue"} title={"Strengths"} content={result.category.productService.strengths} txSecondary={"text-secondary-blue"}></Feedback>
                            <Feedback icon={faTriangleExclamation} bgPrimary={"bg-primary-red"} bgSecondary={"bg-secondary-red"} txPrimary={"text-primary-red"} title={"Risks"} content={result.category.productService.risks} txSecondary={"text-secondary-red"}></Feedback>
                            <Feedback icon={faPenNib} bgPrimary={"bg-primary-yellow"} bgSecondary={"bg-secondary-yellow"} txPrimary={"text-primary-yellow"} title={"Suggestions"} content={result.category.productService.suggestions} txSecondary={"text-secondary-yellow"}></Feedback>
                        </div>
                    }

                    {activeTab==="market" && 
                        <div className="overflow-y-scroll h-[30rem]">
                            <div className="flex w-full justify-center flex-wrap gap-2">
                                <Score title="Category Feasibility Score" rating={result.category.market.rating} description={result.category.market.verdict}></Score>
                                <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={[result.category.market.summary]} txSecondary={"text-secondary-green"}></Feedback>
                            </div>

                            <div>
                                <Table content={result.category.market.competitors}></Table>
                            </div>
                            <Feedback icon={faPenNib} bgPrimary={"bg-primary-yellow"} bgSecondary={"bg-secondary-yellow"} txPrimary={"text-primary-yellow"} title={"Suggestions"} content={result.category.market.suggestions} txSecondary={"text-secondary-yellow"}></Feedback>

                            
                        </div>
                    }

                    {activeTab==="organization" && 
                        <div className="overflow-y-scroll h-[30rem]">
                            <div className="flex w-full justify-center flex-wrap gap-2">
                                <Score title={"Category Feasibility Score"} rating={result.category.organizational.rating} description={result.category.organizational.verdict}></Score>
                                <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={[result.category.organizational.summary]} txSecondary={"text-secondary-green"}></Feedback>
                            </div>
                            <Feedback icon={faDumbbell} bgPrimary={"bg-primary-blue"} bgSecondary={"bg-secondary-blue"} txPrimary={"text-primary-blue"} title={"Strengths"} content={result.category.organizational.strengths} txSecondary={"text-secondary-blue"}></Feedback>
                            <Feedback icon={faTriangleExclamation} bgPrimary={"bg-primary-red"} bgSecondary={"bg-secondary-red"} txPrimary={"text-primary-red"} title={"Risks"} content={result.category.organizational.risks} txSecondary={"text-secondary-red"}></Feedback>
                            <Feedback icon={faPenNib} bgPrimary={"bg-primary-yellow"} bgSecondary={"bg-secondary-yellow"} txPrimary={"text-primary-yellow"} title={"Suggestions"} content={result.category.organizational.suggestions} txSecondary={"text-secondary-yellow"}></Feedback>
                        </div>
                    }

                    {/** finance tab */}
                    {activeTab === "finance" && 
                    <div className="overflow-y-scroll h-[30rem]">
                        <div className="flex flex-wrap gap-2">
                            <Score title={"Category Feasibility Score"} score={result?.category.financial.rating || "Loading..."} description={result?.category.financial.verdict || "Loading..."}></Score>
                            <Feedback title={"Summary"} icon={faLightbulb} content={[result?.category.financial.summary] || ["Loading..."]} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} txSecondary={"text-secondary-green"}></Feedback>
                        </div>
                        <div className="flex flex-wrap gap-3">
                        <FinanceDetail title={"Startup Capital"} value={result?.category?.financial ? `${result?.category.financial.startupCapital}` : "Loading..."} icon={faMoneyBill} bgSecondaryColor={"bg-secondary-red"} bdPrimaryColor={"border-primary-red"} txPrimaryColor={"text-primary-red"}></FinanceDetail>
                        <FinanceDetail title={"Monthly Revenue"} value={result?.category?.financial ? `${result?.category.financial.monthlyRevenueRange[0]} - ${result?.category.financial.monthlyRevenueRange[1]}` : "Loading..."} icon={faChartSimple} bgSecondaryColor={"bg-secondary-orange"} bdPrimaryColor={"border-primary-orange"} txPrimaryColor={"text-primary-orange"}></FinanceDetail>
                        <FinanceDetail title={"Breakeven"} value={result?.category?.financial ? `${result?.category.financial.breakevenMonths[0]} - ${result?.category.financial.breakevenMonths[1]} months` : "Loading..."} icon={faScaleBalanced} bgSecondaryColor={"bg-secondary-blue"} bdPrimaryColor={"border-primary-blue"} txPrimaryColor={"text-primary-blue"}></FinanceDetail>
                        
                        </div>
                        <Feedback title={"Suggestions"} icon={faPenNib} content={result?.category.financial.suggestions || ["Loading..."]} bgPrimary={"bg-primary-yellow"} bgSecondary={"bg-secondary-yellow"}  txPrimary={"text-primary-yellow"} txSecondary={"text-secondary-yellow"}></Feedback>
                    </div>
                    }
                </div>


                <button className='bg-primary-white mx-4 border border-primary-black mb-2 rounded-lg py-2' onClick={handleSumbmit}>Retry Analysis</button>
                <button className='bg-primary-pink mx-4 text-white rounded-lg py-2' onClick={() => navigate('/home')}>Generate Business Plan</button>


            </div>

        </div>


    </>);
}


export default Feasibility;
