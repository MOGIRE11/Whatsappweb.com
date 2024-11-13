const OTPInput = () => {
 return (
   <>
     <div className="OTPIput-wrapper text-black tracking-wide border p-4 rounded-lg border border-neutral-200 text-center bg-white shadow-lg">
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
         <button className="outline-none focus:outline-none">
           Resend code
         </button>
         <button className=" border border-blue-500 bg-blue-400 rounded-md py-2 px-4 text-white  hover:bg-blue-500 hover:border-blue-600 transition-colors active:translate-y-[2px]">
           Submit code
         </button>
       </div>
     </div>
   </>
 );
};

export default OTPInput;

/*
<div className="flex items-center justify-center space-x-4">
      
      <input
        type="text"
        maxLength="1"
        className="w-12 h-12 text-center text-2xl border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        maxLength="1"
        className="w-12 h-12 text-center text-2xl border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <div className="border-r-2 h-12"></div> 
      <input
        type="text"
        maxLength="1"
        className="w-12 h-12 text-center text-2xl border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        maxLength="1"
        className="w-12 h-12 text-center text-2xl border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
*/