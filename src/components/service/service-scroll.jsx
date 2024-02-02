const Service = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-5 flex whitespace-nowrap animate-marquee">
        <span className="text-base mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
      </div>

      <div className="absolute text-base flex top-0 py-5 whitespace-nowrap animate-marquee2">
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
        <span className=" mx-4">
          <Item content="Giao Hàng Lắp Đặt Tận Nơi " />
        </span>
      </div>
    </div>
  );
};

const Item = ({ content = "dịch vụ" }) => {
  return (
    <div className="flex items-center select-none">
      <svg
        // className="scrolling-text__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.4704"
          stroke="#627c24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 21.61V12.54"
          stroke="#627c24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.93011 2.48L4.59012 5.45003C3.38012 6.12003 2.39014 7.80001 2.39014 9.18001V14.83C2.39014 16.21 3.38012 17.89 4.59012 18.56L9.93011 21.53C11.0701 22.16 12.9401 22.16 14.0801 21.53L19.4201 18.56C20.6301 17.89 21.6201 16.21 21.6201 14.83V9.18001C21.6201 7.80001 20.6301 6.12003 19.4201 5.45003L14.0801 2.48C12.9301 1.84 11.0701 1.84 9.93011 2.48Z"
          stroke="#627c24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.9998 13.2396V9.57965L7.50977 4.09961"
          stroke="#627c24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <p className="px-2 text-[#627c24] font-medium">{content}</p>
    </div>
  );
};

export default Service;