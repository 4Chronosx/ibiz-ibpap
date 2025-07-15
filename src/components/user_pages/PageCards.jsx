import { DownloadIcon } from 'lucide-react';
import { useState } from 'react';
import DTILogo from '../../assets/page_cards/dti-logo.png';
import LandbankLogo from '../../assets/page_cards/landbank-logo.png';
import ASEANLogo from '../../assets/page_cards/asean-logo.png';
import DTIPic from '../../assets/page_cards/dti-training.jpg';
import BusinessLogo from '../../assets/page_cards/restaurant-logo.png';
import guides from '../../../dummy_data/scraped_webData/scrapedDTI.json';
import trainings from '../../../dummy_data/scraped_webData/scrapedASEANSME.json';
import loans from '../../../dummy_data/scraped_webData/scrapedLandbank.json';

const guidesTitle = guides.title || '';
const guidesLink = guides.links || '';

const guidesUsable = guidesTitle.map((title, index) => ({
    title,
    link: guidesLink[index]
}));

const trainingsTitle = trainings.title || '';
const trainingsLink = trainings.links || '';

const trainingsUsable = trainingsTitle.map((title, index) => ({
    title,
    link: trainingsLink[index]
}));

const loansTitle = loans.title || '';
const loansSubtitle = loans.subtitle || '';
const loansLink = loans.links || '';
const loansImage = loans.image || '';

const loansUsable = loansTitle.map((title, index) => ({
    title,
    subtitle: loansSubtitle[index],
    link: loansLink[index],
    image: loansImage[index]
}))

const Button = ({ name, link }) => {
    return(
        <button onClick={() => window.open(link, '_blank')} className='w-fit bg-primary-white border border-stroke-300 rounded-md px-4 py-2 text-[14px]'>
            {name}
        </button>
    );
}

const DownloadButton = ({ link }) => {
    return(
        <button onClick={() => window.open(link, '_blank')} className='flex items-center gap-2 bg-primary-rose border rounded-md px-4 py-2 text-primary-white text-[14px] '>
            Download <DownloadIcon className='h-[20px] w-[20px]'/>
        </button>
    );
}

export const BusinessCard = ({ title, location, description, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('feasibility');

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const BusinessModal = () => {
        return (
            <div onClick={() => setIsOpen(false)} className='h-full w-screen flex items-center justify-center bg-black/50 fixed inset-0 z-50'>
                <div onClick={(e) => e.stopPropagation()} className='flex bg-primary-white rounded-xl w-[900px] h-[600px] shadow-xl p-4 overflow-hidden'>
                    <div className='flex flex-col justify-between w-2/5 h-full '>
                        <div className='mr-8'>
                            <h1 className='text-primary-black font-[Istok Web] text-[18px] font-medium mb-4'>Business Details</h1>
                            <div className='flex flex-col items-center'>
                                <img src={image} alt="Business Logo" className='w-[80px] h-[80px] rounded-full' />
                                <h1 className='text-primary-black font-[Istok Web] text-[18px] '>{title}</h1>
                                <p className='text-primary-black font-[Istok Web] text-[14px]'>📍{location}</p>
                            </div>
                            <p className='text-primary-black font-[Istok Web] text-[14px] mt-4 border-t border-stroke-200 py-4'>{description}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={() => setIsOpen(false)} className='bg-primary-white hover:bg-stroke-200/80 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50 flex-shrink-0'>
                                Close
                            </button>
                            <button
                                onClick={''}
                                className='flex items-center gap-2 bg-secondary-brown hover:bg-secondary-brown/70 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md border border-primary-black/50 px-8 py-2 flex-shrink-0'
                            >
                                Download PDF<DownloadIcon className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col w-3/5 h-full'>
                        <div className='flex justify-evenly mb-2 gap-1 border-b border-stroke-200'>
                            <button onClick={() => setSelectedTab('feasibility')} className={`py-2 hover:bg-secondary-brown/70 w-full transition-all duration-300 text-primary-black font-[Istok Web] text-[14px] rounded-t-md ${selectedTab === 'feasibility' ? 'bg-secondary-brown/70 font-medium' : ''}`}>
                                Feasibility Report
                            </button>
                            <button onClick={() => setSelectedTab('businessPlan')} className={`py-2 hover:bg-secondary-brown/70  w-full transition-all duration-300 text-primary-black font-[Istok Web] text-[14px] rounded-t-md ${selectedTab === 'businessPlan' ? 'bg-secondary-brown/70 font-medium' : ''}`}>
                                Business Plan
                            </button>
                        </div>
                        <div className='flex-1'>
                            {selectedTab === 'feasibility' ? '' : <iframe src={''} className='w-full h-full' title="Business Plan PDF" />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className='bg-primary-white border border-stroke-300 w-fit flex flex-col justify-center items-center gap-4 pt-4 rounded-lg'>
            { isOpen && <BusinessModal />}
            <img src={BusinessLogo} className='h-[80px] w-[80px]' />
            <div className='bg-secondary-brown flex items-center p-4 py-2 flex gap-4'>
                <div>
                    <h1>Your Business Name</h1>
                    <p>Your Business Location</p>
                </div>
                <button onClick={handleOpen} className='bg-primary-white px-3 py-1 rounded-md border border-stroke-300'>
                    Open
                </button>
            </div>
        </div>
    );
}

export const GuideCard = ({ image, title, agency, description, downloadLink, link}) => {
    return(
        <div className='w-full flex justify-between bg-secondary-blue/80 p-4 rounded-lg border border-stroke-300 '>
            <div className='flex flex-col gap-2 '>
                <div className='flex gap-2'>
                    <img src={image} className='w-12 h-12'/>
                    <div>
                        <h1 className='font-bold'>{title}</h1>
                        <p>{agency}</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
            <div className='flex justify-end items-center gap-2 w-full'>
                <DownloadButton link={downloadLink} /> 
                <Button name='See More' link={link}/>
            </div>
        </div>
    );
}

export const TrainingCard = ({ image, title, agency, description, link }) => {
    return(
        <div className='bg-secondary-green/80 h-full w-full  rounded-lg border border-stroke-300 flex flex-col gap-2 overflow-hidden' >
            <img src={DTIPic} className='h-[150px] w-full object-cover rounded-t-lg'/>
            <div className='px-4 py-2 flex flex-col h-full justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2'>
                        <img src={image} className='w-12 h-12'/>
                        <div>
                            <h1 className='font-bold overflow-hidden no-wrap'>{title}</h1>
                            <p>{agency}</p>
                        </div>
                    </div>
                    <p className=''>{description}</p>
                </div>
               
                <Button name='See More' link={link}/>
            </div>
        </div>
    );
}

export const LoanCard = ({ image, logo, title, subtitle, agency, link }) => {
    return(
        <div className='bg-secondary-green/80 h-full  rounded-lg border border-stroke-300 flex flex-col gap-2 overflow-hidden' >
            <img src={image} className='h-[150px] w-full object-cover rounded-t-lg'/>
            <div className='px-4 py-2 flex flex-col h-full justify-between gap-8'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <img src={logo} className='w-12 h-12'/>
                        <div>
                            <h1 className='font-bold overflow-hidden no-wrap'>{title}</h1>
                            <p>{agency}</p>
                        </div>
                    </div>
                    <p className=''>{subtitle}</p>
                </div>
               
                <Button name='See More' link={link}/>
            </div>
        </div>
    );
}

export const ChecklistCard = () => {
    return(
        <div>
            
        </div>
    );
}

const PageCards = ({ pageName, grid = 2  }) => {
    return(
        <div className={`w-full grid grid-cols-${grid} gap-3`}>
            { pageName === 'guides' && guidesUsable.map((guide, index) => (
                <GuideCard key={index} image={DTILogo} title={guide.title} agency='Department of Trade and Industry' 
                    description='A handbook in starting a business such as the rewards and risks of going into entrepreneurship and the small business process flow.'
                    downloadLink={guide.link} link='https://www.dti.gov.ph/resources/e-library/business/starting-a-business/guide-in-starting-a-business-enterprise/'/>
            ))}
            { pageName === 'trainings' && trainingsUsable.map((training, index) => (
                <TrainingCard key={index} image={ASEANLogo} title={training.title} agency='ASEAN SME Academy' 
                    description='A training program that aims to provide the necessary skills and knowledge to entrepreneurs and business owners'
                    link='https://asean-sme-academy.org/courses/maximizing-business-potential-using-digital-tools-and-insights-3-2/'/>
            ))}
            { pageName === 'loans' && loansUsable.map((loan, index) => (
                <LoanCard key={index} image={loan.image} logo={LandbankLogo} title={loan.title} subtitle={loan.subtitle} agency='Land Bank of the Philippines' 
                    link={loan.link}/>
            ))}
        </div>
    );
}

export default PageCards;