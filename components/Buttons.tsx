interface ButtonsProps {
    onButtonClick: (blockSize: number) => void;
}

export default function Buttons(props: ButtonsProps) {

    return (
        <>
        <div className="flex flex-col align-center fixed right-0 mx-7">
            <div className="flex justify-center">
               <button className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse" onClick={() => props.onButtonClick(1)}>
                1
                </button> 
            </div>
            <div className="flex justify-center">
                <button className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse" onClick={() => props.onButtonClick(2)}>
                2
                </button>
            </div>
            <div className="flex justify-center">
                <button className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse" onClick={() => props.onButtonClick(3)}>
                3
                </button>
            </div>
        </div>
           
        </>
    )
    
}