import Navbar from "../../components/user_pages/Navbar";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";
import PageBody from "../../components/user_pages/PageBodies";
import PageCards from "../../components/user_pages/PageCards";


const GuidesPage = () => {
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar />
            <div className="flex justify-between px-16 pt-24">
                <UserProfile />
                <PageBody pageName='Guides' children={<PageCards pageName='guides' grid={1} />}/>
                <NotificationPanel />
            </div>
        </div>
    );
}

export default GuidesPage;