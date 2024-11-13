
export default function Card4(){
    return (
      <>
        <div className="w-full max-w-[20rem] border bg-neutral-100 text-black rounded-lg overflow-hidden p-2">
          <div className="img-container overflow-hidden">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4584840-e590-4cdc-b44a-16f1432e6fc8/NIKE+DUNK+LOW+RETRO+SE.png"
              alt="nike-shoe"
              className=" h-52 w-full object-cover object-center hover:scale-125 transition-all"
            />
          </div>

          <section className="product-title flex justify-between mb-8 mt-2">
            <div className="">
              <h3 className="tracking-wide font-semibold">Sneaker</h3>
              <p className="text-neutral-500 text-sm font-medium tracking-wide">
                Premium Quality
              </p>
            </div>

            <h3 className="font-semibold text-xl tracking-wider">$990</h3>
          </section>

          <button className="flex items-center border-2 w-full gap-2 py-2.5  border-blue-500 hover:bg-neutral-200/70 hover:border-blue-400 active:translate-y-[2px] transition-colors px-4 rounded-md">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zaG9wcGluZy1jYXJ0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjkiIGN5PSIyMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiLz48cGF0aCBkPSJNMSAxaDRsMi42OCAxMy4zOWEyIDIgMCAwIDAgMiAxLjYxaDkuNzJhMiAyIDAgMCAwIDItMS42MUwyMyA2SDYiLz48L3N2Zz4="
              alt="shopping-cart"
              className="size-5 mr-auto"
            />
            <p className="self-center tracking-wide font-semibold w-[95%]">
              Add to Cart
            </p>
          </button>
        </div>
      </>
    );
}