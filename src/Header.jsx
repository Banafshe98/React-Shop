function Header() {
  return (
    <div className="flex flex-row items-center justify-between bg-white">
      <div className="flex pt-6 pr-2">
        <svg width="70" height="70">
          <use href="/sprite.sheet.svg#main-logo"></use>
        </svg>
      </div>

      <div className="flex text-nowrap gap-2 rounded-md items-center py-1.5 px-4 border border-gray-300 text-gray-500 text-sm font-semibold mt-10">
        <p>حساب کاربری</p>
        <svg className="border-2 rounded-full border-gray-500 text-gray-500" width="18px" height="18">
          <use href="/sprite.sheet.svg#profile-icon"></use>
        </svg>
      </div>
    </div>
  );
}

export default Header;
