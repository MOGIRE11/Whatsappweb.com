export default function Card3(){
    return (
      <>
        <div className="Card3-wrapper w-full max-w-[20rem]">
          <section className="overflow-hidden bg-neutral-200 h-48 rounded-xl relative">
            <img
              src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074304.jpg?t=st=1731400004~exp=1731403604~hmac=63158f4965bde1bde24d0b7eb49a25d1ed2b362fc3c44a91c25ccf24b1504251&w=826"
              alt="product-photo"
              className="h-48 w-full object-cover object-center"
            />
            <span className="py-1 px-3 border border-transparent absolute top-1 rounded-lg left-1 text-sm font-bold backdrop-blur-md bg-neutral-100 tracking-wide">GEAR</span>
          </section>
          
          <h2 className="mt-4 font-semibold tracking-wide">Premium Earbuds</h2>
          
          <p className="text-neutral-500 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eti lorem iwltfck guten .</p>
          
          <p className="price font-semibold tracking-wide">$389.99 USD</p>
        </div>
      </>
    );
}