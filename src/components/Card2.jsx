
export default function Card2(){
    return (
        <>
         <div className="card2-wrapper self-start w-full max-w-[20rem] border border-transparent p-2 rounded-md shadow-xl bg-white">
            <div className="section size-10 bg-yellow-100 rounded-md border border-yellow-200 flex items-center justify-center">            
                🧑‍🎄
            </div>
            <h2 className="text-lg font-semibold tracking-wide my-4 text-black">Swedoc UI components</h2>
            <p className="text-neutral-600 mb-8">These are well curated components with their base being tailwind css , a well known CSS library for creating stunning user interfaces . What you see is what you get ! Simply copy and paste the component into your code . Smooth as butter .</p>
            <button className="border border-transparent w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors active:bg-blue-700 active:translate-y-[2px] font-semibold tracking-wide">Learn More</button>
         </div>
        </>
    )
}