const CardSkeleton = () => {
  return (
    <>
      <div className="cardskeleton-wrapper text-black w-full max-w-[20rem] border border-neutral-200 p-4 rounded-lg bg-white">
        <section className="flex gap-2 animate-pulse">
          <div className="dp size-12 rounded-full bg-neutral-200">
            {/* profile picture section */}
          </div>
          <div className="bio flex flex-col gap-1">
            <span className="h-4 w-52 bg-neutral-200 rounded-full"></span>
            <span className="h-3 w-44 bg-neutral-200 rounded-full"></span>
            <span className="h-2 w-36 bg-neutral-200 rounded-full"></span>
          </div>
        </section>

        <div className="content-section h-36 w-full bg-neutral-200 mt-4 rounded-lg animate-pulse"></div>

        <div className="content-section h-4 w-1/2 rounded-full bg-neutral-200 mt-5 animate-pulse"></div>
        <div className="content-section h-2 w-1/2 rounded-full bg-neutral-200 mt-1 animate-pulse"></div>
        <div className="content-section h-12 w-full rounded-md bg-neutral-200 mt-2 animate-pulse"></div>

        <div className="button-group mt-4 flex items-center gap-4">
          <button className="h-10 rounded-md w-24 bg-neutral-200 animate-pulse"></button>
          <button className="h-10 rounded-md w-24 bg-neutral-200 animate-pulse"></button>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
