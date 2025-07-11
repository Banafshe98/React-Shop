function Categoryitem() {
  return (
    <div className="flex flex-col justify-center items-center bg-white pb-4 shadow-[0_4px_10px_-6px_rgba(0, 0, 0, 0.2)] px-8 py-6">
      <svg className="items-center cursor-pointer duration-300 delay-100 transition ease-in-out hover:-translate-y-2.5" width="140px" height="140">
        <use href="/sprite.sheet.svg#tree-icon" />
      </svg>
      <div className="flex flex-col gap-2">
        <p className="text-sm">اسماج</p>
        <p className="text-gray-300 font-semibold">۵۴ کالا</p>
      </div>
    </div>
  );
}

export default Categoryitem;
