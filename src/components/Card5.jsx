 export default function Card5(){
    return (
      <>
        <div className="card4-wrapper w-full max-w-[20rem] overflow-hidden text-black tracking-wide border border-neutral-100 bg-white rounded-lg shadow-lg">
          <img
            src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1731505076~exp=1731508676~hmac=6fd4d083f53394e59dd129b78358a88d832c75f55717c23315d475f6d0b484e8&w=996"
            alt="card-image"
            className="bg-neutral-100 h-44 w-full object-cover object-center rounded-t-lg"
          />

          <section className="space-y-5 py-2 px-4">
            <div className="heading mt-1">
              <h1 className="font-semibold text-lg text-neutral-800">
                Advanced Card
              </h1>
              <h2 className="text-neutral-500 text-sm">Card subtitle</h2>
            </div>

            <p className="text-sm text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequunt error repudiandae numquam deserunt
              quisquam repellat sed consequuntur .
            </p>

            <div className="button-group flex items-center gap-4">
              <button
                type="button"
                className="flex border py-2 px-6 rounded-md bg-blue-300 border-blue-400 items-center gap-2"
              >
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ4MCAxMjhjMCA4LjE4OC0zLjEyNSAxNi4zOC05LjM3NSAyMi42MmwtMjU2IDI1NkMyMDguNCA0MTIuOSAyMDAuMiA0MTYgMTkyIDQxNnMtMTYuMzgtMy4xMjUtMjIuNjItOS4zNzVsLTEyOC0xMjhDMzUuMTMgMjcyLjQgMzIgMjY0LjIgMzIgMjU2YzAtMTguMjggMTQuOTUtMzIgMzItMzJjOC4xODggMCAxNi4zOCAzLjEyNSAyMi42MiA5LjM3NUwxOTIgMzM4LjhsMjMzLjQtMjMzLjRDNDMxLjYgOTkuMTMgNDM5LjggOTYgNDQ4IDk2QzQ2NS4xIDk2IDQ4MCAxMDkuNyA0ODAgMTI4eiIvPjwvc3ZnPg=="
                  alt="checked-mark"
                  className="size-4"
                />
                <p className="">Save</p>
              </button>

              <button
                type="button"
                className="flex border py-2 px-6 rounded-md bg-red-400 border-red-500 items-center gap-2"
              >
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iT3V0bGluZSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTIzLjcwNy4yOTNoMGExLDEsMCwwLDAtMS40MTQsMEwxMiwxMC41ODYsMS43MDcuMjkzYTEsMSwwLDAsMC0xLjQxNCwwaDBhMSwxLDAsMCwwLDAsMS40MTRMMTAuNTg2LDEyLC4yOTMsMjIuMjkzYTEsMSwwLDAsMCwwLDEuNDE0aDBhMSwxLDAsMCwwLDEuNDE0LDBMMTIsMTMuNDE0LDIyLjI5MywyMy43MDdhMSwxLDAsMCwwLDEuNDE0LDBoMGExLDEsMCwwLDAsMC0xLjQxNEwxMy40MTQsMTIsMjMuNzA3LDEuNzA3QTEsMSwwLDAsMCwyMy43MDcuMjkzWiIvPjwvc3ZnPg=="
                  alt="checked-mark"
                  className="size-4"
                />
                <p className="">Cancel</p>
              </button>
            </div>
          </section>
        </div>
      </>
    );
    
 }