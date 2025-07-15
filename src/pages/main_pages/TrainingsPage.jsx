import Navbar from "../../components/user_pages/Navbar";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";
import PageBody from "../../components/user_pages/PageBodies";
import PageCards from "../../components/user_pages/PageCards";

const TrainingsPage = () => {
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar />
            <div className="flex justify-between px-16 pt-24">
                <UserProfile />
                <PageBody subtitle='See All Trainings' pageName='Trainings' children={<PageCards pageName='trainings' grid={2} />}/>
                <NotificationPanel />
            </div>
        </div>
    );
}

export default TrainingsPage;