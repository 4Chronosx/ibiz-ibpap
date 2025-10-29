import Navbar from "../../components/user_pages/Navbar";
import { BusinessCard, GuideCard, TrainingCard, LoanCard } from "../../components/user_pages/PageCards";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";
import PageBody from "../../components/user_pages/PageBodies";
import PageCards from "../../components/user_pages/PageCards";


import { useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const businessPlanPdfUrl = location.state?.businessPlanPdfUrl;
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar />
            <div className="flex justify-between px-16 pt-24">
                <UserProfile />

                <PageBody children={<BusinessCard title="EcoWash Mobile Laundry" location="Lahug, Cebu City" businessPlanPdfUrl={businessPlanPdfUrl} PDF=''/>} pageName='Business Plan' subtitle='See All Business Plans'/>

               
                <NotificationPanel />
            </div>
        </div>
    );
}

export default HomePage;