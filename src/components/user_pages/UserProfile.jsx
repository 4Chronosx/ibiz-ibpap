import UserPic from '../../assets/page_profile/profile-pic.png';
import UserBg from '../../assets/page_profile/profile-bg.png';
import { MailIcon } from 'lucide-react';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const UserProfile = () => {
    return (
        <div className="flex flex-col w-[270px] h-fit justify-start bg-primary-white rounded-xl py-6 px-4 border border-stroke-300 relative">
            <div className="flex flex-col justify-start pl-2 mb-4">
                <img src={UserBg} alt="User Background" className="absolute top-0 left-0 w-full object-cover rounded-t-xl cursor-pointer" />
                <img src={UserPic} alt="User Profile" className="w-[64px] h-[64px] rounded-full outline outline-primary-white z-10 cursor-pointer" />
                <h1 className="text-primary-black font-[Istok Web] font-medium text-[16px] mt-2 cursor-pointer">Mercedes Macapagal</h1>
                <div className='flex items-center gap-1'>
                    {/* <Logo className="w-4 h-5" /> */}
                    <p className="text-primary-black font-[Istok Web] font text-[14px] text-wrap cursor-pointer">Owner of Classic Clothing Store</p>
                </div>
            </div>

            <div className='flex flex-col justify-start gap-1 py-2 border-y border-stroke-200'>
                <div className='flex items-center gap-2 hover:bg-stroke-200/40 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg px-2 py-1 cursor-pointer'>
                    <MailIcon className='w-5 h-5 text-primary-black/90' />
                    <p className='text-primary-black/90 font-[Istok Web] text-[16px]'>Inbox</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-stroke-200/40 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg px-2 py-1 cursor-pointer'>
                    <PeopleIcon className='w-5 h-6 text-primary-black/90' />
                    <p className='text-primary-black/90 font-[Istok Web] text-[16px]'>People</p>
                </div>  
            </div>

            <div className='flex flex-col justify-start gap-1 mt-2'>
                <div className='flex items-center gap-2 hover:bg-stroke-200/40 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg px-2 py-1 cursor-pointer'>
                    <WorkIcon className='w-4 h-5 text-primary-black/90' />
                    <p className='text-primary-black/90 font-[Istok Web] text-[16px]'>Businesses</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-stroke-200/40 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg px-2 py-1 cursor-pointer'>
                    <BookmarkIcon className='w-4 h-5 text-primary-black/90' />
                    <p className='text-primary-black/90 font-[Istok Web] text-[16px]'>Bookmarks</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-stroke-200/40 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg px-2 py-1 cursor-pointer'>
                    <CalendarMonthIcon className='w-5 h-5 text-primary-black/90 ' />
                    <p className='text-primary-black/90 font-[Istok Web] text-[16px]'>Calendar</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;