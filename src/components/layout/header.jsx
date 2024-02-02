import { Link, NavLink } from "react-router-dom";
import routers from "../../config/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { MdOutlineShoppingBag } from "react-icons/md";
import MegaMenu from "../mega-menu";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_SEARCH } from "../../redux/slices/search-modal-slice";

const Header = () => {
  const searchModal = useSelector((state) => state.searchModal);
  const cartUser = useSelector((state) => state.cart);
  const dispath = useDispatch();
  const checkActive = (isActive) => {
    if (isActive || isActive === true) {
      return "text-baseColor";
    } else {
      return "text-black";
    }
  };
  return (
    <div className="bg-white shadow-slate_bottom fixed left-0 top-0 right-0 z-40 scroll-smooth">
      <div className="max-w-container mx-auto flex items-center">
        <NavLink
          to={routers.home}
          className={({ isActive }) => checkActive(isActive) + " block"}
        >
          <img
            src="https://via.placeholder.com/240x50"
            alt="logo"
          />
        </NavLink>
        <div className="flex-1 flex items-center justify-center font-medium text-base py-4">
          <NavLink
            to=""
            // className=""
            className={({ isActive }) =>
              checkActive(isActive) +
              " block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={routers.intro}
            // className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            className={({ isActive }) =>
              checkActive(isActive) +
              " block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Giới thiệu
          </NavLink>
          <div className="relative group">
            <NavLink
              to={routers.products}
              // className="flex items-center px-4 py-4 mx-3 transition-all ease-linear group duration-200 hover:text-baseColor relative"
              className={({ isActive }) =>
                checkActive(isActive) +
                " flex items-center px-4 py-4 mx-3 transition-all ease-linear group duration-200 hover:text-baseColor relative"
              }
            >
              <p>Sản phẩm</p>{" "}
              <p className="ml-1 -mt-1 transition-all ease-linear duration-200 origin-center leading-3">
                <FontAwesomeIcon icon={faSortDown} />
              </p>
            </NavLink>
            <MegaMenu />
          </div>
          <NavLink
            to={routers.blogs}
            // className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            className={({ isActive }) =>
              checkActive(isActive) +
              " block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Tin tức
          </NavLink>
          <NavLink
            to={routers.contact}
            className={({ isActive }) =>
              checkActive(isActive) +
              " block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Liên hệ
          </NavLink>
        </div>
        <ul className="flex text-lg items-center font-normal">
          <li
            className="ml-2 cursor-pointer p-2 hover:text-baseColor relative"
            onClick={() => dispath(OPEN_SEARCH(true))}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="ml-2 cursor-pointer p-2 hover:text-baseColor group relative">
            <FontAwesomeIcon icon={faUser} />
            <div className="shadow-mega_menu hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-40 group-hover:text-black rounded-md overflow-hidden">
              <Link
                to={routers.login}
                className="block text-base py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
              >
                Đăng nhập
              </Link>
              <Link
                to={routers.register}
                className="block text-base py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
              >
                Đăng ký
              </Link>
            </div>
          </li>
          {/* <li className="ml-2 cursor-pointer p-2 hover:text-baseColor">
            <FontAwesomeIcon icon={faHeart} />
          </li> */}
          <li className="ml-2 p-2 hover:text-baseColor relative cursor-pointer text-[22px] group">
            <MdOutlineShoppingBag />
            <p className="absolute top-0 right-0 text-xs w-4 h-4 text-center leading-4 rounded-full bg-baseBg text-white">
              {cartUser.cart.length}
            </p>
            <div className="absolute top-full shadow-mega_menu bg-white w-96 right-0 hidden text-sm rounded-sm overflow-hidden group-hover:block group-hover: cursor-auto">
              {cartUser.cart.length === 0 ? (
                <p className="p-5 group-hover:text-black">
                  Không có sản phẩm nào trong giỏ hàng
                </p>
              ) : (
                <></>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;