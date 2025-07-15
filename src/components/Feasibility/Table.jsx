

function Table({content}) {


    return(
        <>
        <div className="w-full h-auto flex bg-secondary-orange h-auto shadow-md flex-col">
            <div className="w-full h-[2.5rem] flex justify-between my-[1px] text-primary-black font-bold">
                <div className="h-full w-[33%] bg-primary-yellow flex justify-center items-center"><p>Competitor</p></div>
                <div className="h-full w-[40%] bg-primary-yellow flex justify-center items-center"><p>Description</p></div>
                <div className="h-full w-[26%] bg-primary-yellow flex justify-center items-center"><p>Link</p></div>
            </div>

            {content.map((item) => {
                return (
                    <div className="w-full min-h-[2.5rem] flex justify-between my-[1px] text-primary-black text-[14px] ">
                    <div className="min-h-[2.5rem] w-[33%] bg-secondary-yellow flex justify-center items-center"><p>{item.name}</p></div>
                    <div className="min-h-[2.5rem] w-[40%] bg-secondary-yellow flex justify-start items-center px-1"><p className="overflow-x-hidden">{item.shortDescription}</p></div>
                    <div className="min-h-[2.5rem] w-[26%] bg-secondary-yellow flex justify-center items-center"><button className="px-4 py-1 rounded-md bg-primary-yellow shadow-md">View</button></div>
                </div>
                );
            })}

            
            
        </div>
        </>
    );
}


export default Table;