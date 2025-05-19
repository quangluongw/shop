const Notfound = () => {
  return (
    <div className="mb-8">
      <div className="mb-10">
        Home <span className="font-semibold"> / Not found</span>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-[6rem]">404 Not Found</h1>
        <p>Không tìm thấy đường truy cập . Bạn có thể quay về trang chủ </p>
        <button
          className="bg-red-500 text-white p-3 rounded-md hover:bg-white
             hover:text-red-500 hover:border-2 hover:border-red-500 mt-20 mb-10"
        >
          Trở về trang chủ
        </button>
      </div>
    </div>
  );
};

export default Notfound;
