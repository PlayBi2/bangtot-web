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
  CLOSE_TOAST,
} from "../redux/slices/toast-slice";
import { SET_ACTIVE_USER } from "../redux/slices/auth-slice";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const message = useSelector((state) => state.toast);
  const dispath = useDispatch();
  const naigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await instance.post("/login", {
      method: "post",
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
    if (res.data.code == 400) {
      dispath(ACTIVE_TOAST_ERROR(res.data.message));
    } else if (res.data.code == 200) {
      naigate("/");
      dispath(ACTIVE_TOAST_SUCCESS(res.data.message));
      dispath(
        SET_ACTIVE_USER({
          user: res.data.user,
          isLogin: true,
          isAdmin: res.data.user.role === "admin" ? true : false,
          token: res.data.token_type + " " + res.data.token,
        })
      );
      localStorage.setItem("token", res.data.token_type + " " + res.data.token);
      localStorage.setItem("admin", "true");
      const closeToast = setTimeout(() => {
        dispath(CLOSE_TOAST());
      }, 3000);
      clearTimeout(closeToast);
    }
  };

  return (
    <Layout>
      <div className="max-w-container mx-auto">
        <div className="py-10">
          <h1 className="text-center uppercase font-semibold text-2xl pb-4">
            Đăng nhập
          </h1>
          <form
            method="post"
            className="block w-1/3 mx-auto"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="my-4">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="border-[1px] border-solid w-full border-slate-300 rounded-sm overflow-hidden outline-none px-4 py-2 block"
                ref={emailRef}
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
              Đăng nhập
            </button>
          </form>
          <p className="text-center text-sm py-2 mt-2">
            Nếu bạn chưa có tài khoản?{" "}
            <Link
              to={routers.register}
              className="underline hover:text-baseColor"
            >
              đăng ký tại đây!
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
