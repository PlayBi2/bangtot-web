import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import routers from "../config/router";
import { useEffect, useRef, useState } from "react";
import instance from "../axios/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTIVE_TOAST_ERROR,
  ACTIVE_TOAST_SUCCESS,
  ACTIVE_TOAST_WARNING,
  CLOSE_TOAST,
} from "../redux/slices/toast-slice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const emailRef = useRef();
  const fullnameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await instance.post("/register", {
      method: "post",
      data: {
        email: emailRef.current.value,
        fullname: fullnameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
      },
    });
    if (data.status == 200) {
      showToastSuccess();
      emailRef.current.value = ""
      fullnameRef.current.value = ""
      addressRef.current.value = ""
      passwordRef.current.value = ""
      phoneRef.current.value = ""
    } else {
      showToastError();
    }
  };

  const showToastSuccess = () => {
    toast.success("Đăng kí tài khoản thành công!");
  };

  const showToastError = () => {
    toast.error("Đăng kí tài khoản thất bại!");
  };

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="py-10">
          <h1 className="text-center uppercase font-semibold text-2xl pb-4">
            Đăng ký
          </h1>
          <form
            method="post"
            className="block w-full lg:w-1/3 mx-auto"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="my-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={emailRef}
              />
            </div>
            <div className="my-4">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Họ và tên"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={fullnameRef}
              />
            </div>
            <div className="my-4">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Địa chỉ"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={addressRef}
              />
            </div>
            <div className="my-4">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Số điện thoại"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={phoneRef}
              />
            </div>
            <div className="my-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mật khẩu"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={passwordRef}
              />
            </div>
            <button
              type="submit"
              className="uppercase bg-baseColor text-white px-4 py-2 block mx-auto rounded-sm"
            >
              Đăng ký
            </button>
          </form>
          <p className="text-center text-sm py-2 mt-2">
            Nếu bạn đã có tài khoản?{" "}
            <Link to={routers.login} className="underline hover:text-baseColor">
              đăng nhập tại đây!
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Register;
