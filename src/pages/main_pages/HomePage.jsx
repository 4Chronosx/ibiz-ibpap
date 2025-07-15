import Navbar from "../../components/user_pages/Navbar";
import { BusinessCard, GuideCard, TrainingCard, LoanCard, ChecklistCard } from "../../components/user_pages/PageCards";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";
import PageBody from "../../components/user_pages/PageBodies";
import PageCards from "../../components/user_pages/PageCards";

const HomePage = () => {
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar />
            <div className="flex justify-between px-16 pt-4">
                <UserProfile />
                <PageBody children={<BusinessCard />}/>
                <NotificationPanel />
            </div>
        </div>
    );
}

export default HomePage;