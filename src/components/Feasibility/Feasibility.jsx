
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
import Score from "./Score";
import Feedback from "./Feedback";

function Feasibility({genPdf}) {

    const [activeTab, setActiveTab] = useState("overview");

    const content = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet exercitationem quidem dicta fuga rerum officia voluptatum. Cupiditate sit iusto accusamus animi, aspernatur, nemo officia vitae iure eius consectetur tenetur.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet exercitationem quidem dicta fuga rerum officia voluptatum. Cupiditate sit iusto accusamus animi, aspernatur, nemo officia vitae iure eius consectetur tenetur.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet exercitationem quidem dicta fuga rerum officia voluptatum. Cupiditate sit iusto accusamus animi, aspernatur, nemo officia vitae iure eius consectetur tenetur."
    ]

    return(<>

        <div className="h-screen w-screen flex justify-center items-center font-istok">
            <div className="h-[47rem] w-[40rem] bg-stroke-100 rounded-3xl flex flex-col shadow-lg">
                {/* Header*/}
                <div className="h-[10%] w-full bg-primary-pink rounded-t-3xl flex items-center px-10">
                    <div className="h-[2.5rem] w-[2.5rem] bg-secondary-pink rounded-lg"></div>
                    <div className="flex flex-col px-5">
                        <h1 className="text-secondary-pink text-lg font-inria font-bold">Sissy's clothing Store</h1>
                        <div className="flex items-center h-[1.5rem]">
                            <div className="bg-secondary-pink h-[1rem] w-[1rem] rounded-sm"></div>
                            <p className="text-secondary-pink px-2">Talamban, Cebu City</p>
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
                            <Score title="Overall Feasibility Score" rating={7.8} description={"Highly Feasible"}></Score>
                            <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={content} txSecondary={"text-secondary-green"}></Feedback>
                            <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={content} txSecondary={"text-secondary-green"}></Feedback>
                        </div>
                    }

                    {activeTab==="product" && 
                        <div className="overflow-y-scroll h-[30rem]">
                            <div className="flex w-full h-auto gap-2">
                                <Score title="Overall Feasibility Score" rating={7.8} description={"Highly Feasible"}></Score>
                            <Feedback icon={faLightbulb} bgPrimary={"bg-primary-green"} bgSecondary={"bg-secondary-green"} txPrimary={"text-primary-green"} title={"Key Findings"} content={content} txSecondary={"text-secondary-green"}></Feedback>
                            </div>
                            
                        </div>
                    }
                    
                </div>

                <button >Retry Analysis</button>
                <button onClick={genPdf}>Generate Business Plan</button>

            </div>

        </div>


    </>);
}


export default Feasibility;
