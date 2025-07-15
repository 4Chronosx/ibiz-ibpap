
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function Score({title, rating, description}) {


    return (
        <>
        <div className="bg-primary-green w-full h-auto py-4 my-2 flex flex-1 flex-col text-primary-white items-center rounded-xl min-w-[10rem] justify-center">
            <p className="text-xs my-1">{title}</p>
            <p className="my-1"><span className="font-bold text-4xl">{rating}</span>/10</p>
            <div className="w-[90%] py-2 bg-overlay-green rounded-3xl text-center text-[14px] font-bold">{description}</div>
            <div className="w-[90%] h-auto bg-overlay-green flex mt-4 rounded-xl">
                <div className="bg-primary-white h-[0.5rem] rounded-xl" style={{width: `${rating / 10 * 100}%`}}>

                </div>
            </div>
        </div>
        </>
    );
}

export default Score;