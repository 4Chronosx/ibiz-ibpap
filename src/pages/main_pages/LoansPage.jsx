import Navbar from "../../components/user_pages/Navbar";
import UserProfile from "../../components/user_pages/UserProfile";
import NotificationPanel from "../../components/user_pages/NotificationPanel";
import PageBody from "../../components/user_pages/PageBodies";
import PageCards from "../../components/user_pages/PageCards";



const LoansPage = () => {
    return(
        <div className="w-full min-h-screen normal-bg">
            <Navbar />
            <div className="flex justify-between px-16 pt-24">
                <UserProfile />
                <PageBody pageName='Loans' subtitle='See All Loans' children={<PageCards pageName='loans'  grid={2} />}/>
                <NotificationPanel />
            </div>
        </div>
    );
}

export default LoansPage;