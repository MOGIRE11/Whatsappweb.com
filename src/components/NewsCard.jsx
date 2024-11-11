export default function NewsCard() {
  return (
    <>
      <div className="NewsCard-wrapper w-full max-w-[20rem] border rounded-md bg-neutral-100 overflow-hidden flex flex-col shadow-lg">
        <section className="p-1 flex items-center gap-3 bg-white shadow-sm">
          <div className="dp size-10 bg-neutral-200 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/wellness-center-logo-template-gold-professional-design-vector_53876-136292.jpg?t=st=1731341007~exp=1731344607~hmac=6df6313cefe8a68a889f6065a2030343f5b9ff9be1fb598861a6b6001c156faf&w=740"
              alt="company-profile-picture"
              className="object-cover"
            />
          </div>

          <div className="heading">
            <h1 className="font-semibold tracking-wide text-neutral-900">
              Swedoc UI
            </h1>
            <p className="text-xs text-neutral-500 tracking-wide">
              633K followers
            </p>
          </div>

          <div className="context-menu flex flex-col gap-[2px]  ml-auto border border-transparent p-2 px-3 hover:bg-neutral-100 transition-colors active:bg-neutral-100 rounded-md cursor-pointer">
            <div className="dot size-1 bg-neutral-600 rounded-full"></div>
            <div className="dot size-1 bg-neutral-600 rounded-full"></div>
            <div className="dot size-1 bg-neutral-600 rounded-full"></div>
          </div>
        </section>

        <section className="info-container p-2 ">
          <div className="info bg-white rounded-md overflow-hidden p-1">
            <img
              src="https://img.freepik.com/free-photo/male-journalist-doing-his-job_23-2149029366.jpg?t=st=1731343322~exp=1731346922~hmac=8fcc553f619887e3140ded70e3b15366328b096c071a931141178d700d921d8e&w=826"
              alt="man-talking-to-a-therapist"
              className="object-cover object-center h-44 w-full rounded-t-md"
            />

            <div className="topic bg-neutral-100 p-2 text-sm tracking-wide text-neutral-900 rounded-b-md">
              <h1 className="font-medium">
                Dear men, your bodies are your most precious possessions
              </h1>

              <p className="text-xs tracking-wide text-neutral-500 mt-4 mb-1">
                ... they deserve better service than your car
              </p>

              <a
                href="#"
                className="text-neutral-500 text-xs hover:underline transition-all"
              >
                Swedoc UI 
              </a>
            </div>

            <div className="text-sm p-1">
              <p className="my-2 text-black">
                November has been renamed Movember ! It is the Men's health
                awareness ... <span className="text-blue-700 hover:underline transition-all cursor-pointer">Read more</span>
              </p>
              <p className=" border w-1/2 flex justify-between items-center px-2 rounded-full mt-2 bg-neutral-100 text-neutral-700 font-bold cursor-pointer hover:bg-neutral-200 transition-colors">
                <span>😂 👍💙🤝</span>
                24
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
