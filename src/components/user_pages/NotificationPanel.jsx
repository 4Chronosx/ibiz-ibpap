import { NotificationCard } from "./PageCards";

const NotificationPanel = ({ isCommunity = false }) => {
    return(
        <div className='bg-primary-white w-[280px] h-[320px] p-4 border border-stroke-300 rounded-xl'>
            Notification Panel
            { isCommunity ? <NotificationCard community={true} /> : <NotificationCard /> }
        </div>
    );
}

export default NotificationPanel;