const OTPInput = () => {
 return (
   <>
     <div className="OTPIput-wrapper text-black tracking-wide border p-4 rounded-lg border border-neutral-200 text-center bg-white shadow-lg w-full max-w-[20rem]">
       <h1 className="text-xl font-semibold text-neutral-800">
         Authenticate Your Account
       </h1>
       <p className="text-neutral-500 text-sm mt-1">
         Please enter the code sent to your phone.
       </p>

       <div className="input-group flex items-center justify-between gap-2 my-12 bg-white">
         <div className="left-btn-group space-x-1.5 flex">
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
         </div>

         <div className="line w-6 h-0.5 rounded-full bg-neutral-300"></div>

         <div className="left-btn-group space-x-1.5 flex">
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
           <input
             type="text"
             maxLength="1"
             className="size-10 text-center text-lg border border-dashed border-neutral-400 rounded-md focus:outline-none focus:border-blue-500 text-center bg-white"
           />
         </div>
       </div>

       <div className="button-group w-full flex items-center justify-between gap-4">
         <button className="outline-none focus:outline-none hover:bg-neutral-100 py-2 px-4 rounded-md border border-transparent hover:border-neutral-300 transition-colors">
           Resend code
         </button>
         <button className=" border border-blue-500 bg-blue-500 rounded-md py-2 px-4 text-white  hover:bg-blue-600 hover:border-blue-600 transition-colors active:translate-y-[2px]">
           Submit code
         </button>
       </div>
     </div>
   </>
 );
};

export default OTPInput;
