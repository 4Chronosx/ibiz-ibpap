

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; 


function Feedback({icon, bgPrimary, bgSecondary, txPrimary, txSecondary, title, content}) {
    return (
        <>
        <div className={`${bgPrimary} flex flex-1 h-auto my-2 rounded-xl pl-2`}>
            <div className={`${bgSecondary} flex-1 h-full rounded-xl flex flex-col py-2 pb-4`}>
                <div className="flex justify-start px-4 py-2">
                    <div className={`${bgPrimary} h-[1.5rem] w-[1.5rem] rounded-md flex justify-center items-center`}><FontAwesomeIcon icon={icon} className={`${txSecondary}`}></FontAwesomeIcon></div>
                    <h1 className={`${txPrimary} font-bold ml-2`}>{title}</h1>
                </div>
                {content.map((item) => {
                    return (
                        <div className="flex justify-start items-center px-4 pl-7 py-1">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            <p className="ml-4 text-justify text-[14px]">{item}</p>
                        </div>
                    );
                })}
                

            </div>
        </div>
        </>
    );
}

export default Feedback;