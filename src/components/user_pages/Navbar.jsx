import WebLogo from '../../assets/ibiz-logo.svg';
import { HomeIcon as HomeIconOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid';
import { BookOpenIcon as GuidesIconOutline } from '@heroicons/react/24/outline';
import { BookOpenIcon as GuidesIconSolid } from '@heroicons/react/24/solid';
import { LightBulbIcon as TrainingsIconOutline } from '@heroicons/react/24/outline';
import { LightBulbIcon as TrainingsIconSolid } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon as SearchIconOutline } from '@heroicons/react/24/outline';
import HandshakeOutline from '@mui/icons-material/HandshakeOutlined';
import Handshake from '@mui/icons-material/Handshake';
import GroupsOutline from '@mui/icons-material/GroupsOutlined';
import Groups from '@mui/icons-material/Groups';
import { HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div className='flex w-full items-center justify-center py-4 '>
            <div className='flex items-center gap-2 fixed top-5 left-16'>
                <img src={WebLogo} className='w-[40px] h-[40px]' /> 
                <h1 className='font-[Rowdies] text-[24px] text-primary-pink '>iBiz</h1>
            </div>
            <ul className='bg-primary-white flex items-center self-center p-1 rounded-full gap-2 border border-stroke-300'>
                <li onClick={() => navigate('/')} className='flex items-center gap-1 px-4 py-2 hover:bg-stroke-200/80 rounded-full cursor-pointer'><HomeIconOutline className='w-[24px] h-[24px]'/> Home</li>
                <li onClick={() => navigate('/guides')} className='flex items-center gap-1 px-4 py-2 hover:bg-stroke-200/80 rounded-full cursor-pointer'><GuidesIconOutline className='w-[24px] h-[24px]'/> Guides</li>
                <li onClick={() => navigate('/trainings')} className='flex items-center gap-1 px-4 py-2 hover:bg-stroke-200/80 rounded-full cursor-pointer'><TrainingsIconOutline className='w-[24px] h-[24px]'/> Trainings</li>
                <li onClick={() => navigate('/loans')} className='flex items-center gap-1 px-4 py-2 hover:bg-stroke-200/80 rounded-full cursor-pointer'><GroupsOutline className='w-[24px] h-[24px]'/> Loans</li>
                <li onClick={() => navigate('/community')} className='flex items-center gap-1 px-4 py-2 hover:bg-stroke-200/80 rounded-full cursor-pointer'><HandshakeOutline className='w-[24px] h-[24px]'/> Community</li>
            </ul>
        </div>
    );
}

export default Navbar;