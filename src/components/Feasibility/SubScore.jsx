import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



function SubScore({txPrimary, bgSecondary, score, title, shortSummary}) {


    return (
        <>
        <div className={`w-[48%] h-auto ${bgSecondary} p-2 flex rounded-xl`}>
            <div className="flex w-[30%] h-auto p-2 flex-col justify-center items-center">
                <FontAwesomeIcon icon={faStar} className={`${txPrimary}`}></FontAwesomeIcon>
                <p className="mt-5">{score}</p>
            </div>
            <div className="flex flex-col w-[70%] h-auto p-2">
                <h1 className={`font-bold mb-2 ${txPrimary}`}>{title}</h1>
                <p className="text-justify">{shortSummary}</p>
            </div>
        </div>
        </>
    );
}


export default SubScore;