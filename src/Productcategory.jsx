
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Productcategory() {
const [current, setcurrent] = useState(0);
const prev = () =>
 setcurrent((current)=> (current === 0 ? Sliders.length - 1 : current -1)) 
  
const next = () =>
   setcurrent((current) => (current === Sliders.length - 1 ? 0 : current +1))

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-white ">
      <p className=" text-gray-400 text-lg font-bold py-3">دسته بندی محصولات</p>

      <div id="controls-carousel" className="relative overflow-hidden">
        <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quod, eligendi perspiciatis facilis non harum cupiditate eaque corrupti officiis illum laudantium rerum tenetur temporibus, blanditiis accusantium numquam labore unde saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatem fugiat, quo alias eveniet itaque consequuntur iure nostrum exercitationem aut quas voluptatum eligendi numquam dolorum, repellendus ipsam nesciunt cum obcaecati. text-gray-800 hover:bg-white text-gray-800 hover:bg-white text-gray-800 hover:bg-white text-gray-800 hover:bg-white text-gray-800 hover:bg-white text-gray-800 hover:bg-whit text-gray-800 hover:bg-white text-dldd</div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            type="button"
            className="p-1 rounded-full cursor-pointer shadow bg-white/80 text-gray-800 hover:bg-white group focus:outline-none"
            data-carousel-prev
          >
            <ChevronRight onClick={next} size={30} />
          </button>
          <button
            type="button"
            className="p-1 rounded-full cursor-pointer shadow bg-white/80 text-gray-800 hover:bg-white group focus:outline-none"
            data-carousel-next
          >
            <ChevronLeft onClick={prev} size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcategory;
