

function Navmenu() {
  return (
    <div className="flex flex-row items-center justify-between pt-6 bg-white shadow-[0_4px_10px_-6px_rgba(0, 0, 0, 0.2)]">
        
            <svg className="mr-2" width="30px" height="30">
                <use href="/sprite.sheet.svg#hamburger-icon"/>
            </svg>
        
        <div className="flex text-nowrap gap-2 rounded-md py-1.5 px-4 text-gray-500 text-sm font-medium">
            <p>سبد خرید</p>
            <svg width="22" height="22">
                <use href="/sprite.sheet.svg#cart-icon"/>
            </svg>
        </div>
    </div>
  )
}

export default Navmenu;