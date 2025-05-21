const Account = () => {
  return (
    <div className="mb-10">
      <div className="mb-10">
        Home <span className="font-semibold"> {location.pathname}</span>
      </div>
      <div className="grid grid-cols-12 max-[870px]:grid-cols-1">
        <div className="col-span-3">
          <div>
            <div className="text-[1.1rem] font-medium">Manage My Account</div>
            <div className="account-menu">
              <ul className="menu-list">
                <li className="active">My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[1.1rem] font-medium mt-6">My Orders</div>
            <div className="account-menu">
              <ul className="menu-list">
                <li className="active">My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>
          </div>
          <div className="text-[1.1rem] font-medium my-6">My WishList</div>
        </div>
        <div
          className="w-[100%] p-10 rounded-md col-span-9 grid rid grid-cols-12 items-center"
          style={{ boxShadow: " 1px 5px 12px 3px #acaaaa" }}
        >
          <form className="col-span-7 border-r-2 pr-6">
            <h1 className="text-xl font-medium text-[#DB4444] mb-5">
              Edit Your Profile
            </h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Họ Và Tên</label>
              <input
                type="text"
                className="border-2 p-2 rounded-md w-full"
                placeholder="Vui lòng nhập họ và tên"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="border-2 p-2 rounded-md w-full"
                placeholder="Vui lòng nhập email"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="">Địa chỉ</label>
              <input
                type="text"
                className="border-2 p-2 rounded-md w-full"
                placeholder="Vui lòng nhập địa chỉ"
              />
            </div>
            <br />
            <button className="bg-red-500 text-white px-7 py-3 rounded-md">
              Submit
            </button>
          </form>
          <div className="m-auto col-span-5 flex-col">
            <img
              src="https://down-vn.img.susercontent.com/file/b9fa7fca0a5f53e295557e6e5d42e676"
              alt=""
              className="mb-5 rounded-full"
            />
            <button className="border-2 p-2 rounded-md">Chọn ảnh</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
