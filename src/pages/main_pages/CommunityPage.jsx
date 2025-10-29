import Navbar from "../../components/user_pages/Navbar";
import { CommunityPageBody } from "../../components/user_pages/PageBodies";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";


const CommunityPage = () => {
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar isCommunity={true}/>
            <div className="flex justify-between px-16 pt-24">
                <UserProfile />
                <CommunityPageBody />
                <NotificationPanel isCommunity={true} />
            </div>
        </div>
    );
}

export default CommunityPage;