function Header() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex pt-5">
        <svg width="60" height="60">
          <use href="/sprite.sheet.svg#main-logo"></use>
        </svg>
      </div>

      <div className="flex text-nowrap gap-2 rounded-md py-1.5 px-4 border border-gray-300 text-gray-500 text-sm font-semibold mt-10">
        <p>حساب کاربری</p>
        <svg className="border-2 rounded-full border-gray-300" width="25px" height="25">
          <use href="/sprite.sheet.svg#profile-icon"></use>
        </svg>
      </div>
    </div>
  );
}

export default Header;
