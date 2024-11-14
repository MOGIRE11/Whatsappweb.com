
export default function Card2(){
    return (
      <>
        <div className="card2-wrapper w-full max-w-[20rem] border border-neutral-100 p-4 rounded-md shadow-xl bg-white">
          <div className="section size-12 bg-yellow-100 rounded-md border border-yellow-300 flex items-center justify-center">
            <img
              src= "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0zMS41LDcuODQwOGMtMC4wMDM1My0wLjYyNjYxLTAuNDExODMtMS4xOTY2Ny0wLjk5NTYyLTEuNDEzMDdjMC4wMDAwMi0wLjAwMDAxLTEzLjk5OTk4LTUuMDAwMDEtMTMuOTk5OTgtNS4wMDAwMSAgYy0wLjMyNjE3LTAuMTE1MjMtMC42ODI2Mi0wLjExNTIzLTEuMDA4NzksMGwtMTQsNUMwLjkxMzI3LDYuNjQ1MjcsMC41MDIxLDcuMjEzMSwwLjUwMDAxLDcuODQwODIgIEMwLjUsNy44NDA4LDAuNSwyNC4xNjMwNywwLjUsMjQuMTYzMDdjMC4wMDcyNSwwLjYyMjM0LDAuNDA4MTgsMS4xOTg5OSwwLjk5NTYzLDEuNDExMTIgIEMxLjQ5NTYxLDI1LjU3NDIsMTUuNDk1NjEsMzAuNTc0MiwxNS40OTU2MSwzMC41NzQyYzAuMzIwMTIsMC4xMTE2NCwwLjY4ODY4LDAuMTEzNzEsMS4wMDg3OS0wLjAwMDAzICBjMCwwLjAwMDAzLDE0LTQuOTk5OTcsMTQtNC45OTk5N2MwLjM3NjIxLTAuMTQzMzQsMC42OTA4My0wLjQyNjEsMC44NTkzLTAuNzkzNDdjMC4wODU0Mi0wLjE5NTMsMC4xMjYwNi0wLjQwNTIsMC4xMzYyOS0wLjYxNzY3ICBDMzEuNSwyNC4xNjMwNywzMS41LDcuODQwOCwzMS41LDcuODQwOHogTTMuNSw5Ljk2OTc3bDExLDMuOTI4NTN2MTMuMTM0MjhsLTExLTMuOTI4OTZWOS45Njk3N3ogTTE3LjUsMTMuODk4M2wxMS0zLjkyODUzdjEzLjEzMzg1ICBsLTExLDMuOTI4OTZWMTMuODk4M3ogTTE2LDQuNDMzNThsOS41NDAwNCwzLjQwNzIzTDE2LDExLjI0ODAzTDYuNDU5OTYsNy44NDA4TDE2LDQuNDMzNTh6Ii8+PC9zdmc+"
              alt="design-icon"
              className="w-1/2 object-cover"/>
          </div>

          <h2 className="text-lg font-semibold tracking-wide my-4 text-black">
            Swedoc UI components
          </h2>

          <p className="text-neutral-600 mb-8">
            These are well curated components with their base being tailwind css
            , a well known CSS library for creating stunning user interfaces .
            What you see is what you get ! Simply copy and paste the component
            into your code . Smooth as butter .
          </p>

          <button className="border border-transparent w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors active:bg-blue-700 active:translate-y-[2px] font-semibold tracking-wide">
            Learn More
          </button>
        </div>
      </>
    );
}