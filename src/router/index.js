import routers from "../config/router";
import About from "../pages/about";
import AddProduct from "../pages/admin/add-product";
import Dashboard from "../pages/admin/dashboard";
import ManageBlogs from "../pages/admin/manage-blogs";
import ManageOrder from "../pages/admin/manage-order";
import ManageProduct from "../pages/admin/manage-product";
import ManageRevenue from "../pages/admin/manage-revenue";
import ManageUser from "../pages/admin/manage-user";
import NewPost from "../pages/admin/new-post";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/user/profile";
import Cart from "../pages/cart";
import Order from "../pages/user/order";
import Bill from "../pages/user/bill";
import Products from "../pages/products";
import ProductDetail from "../pages/detail/product-detail";
import Search from "../pages/search";
import BuyNow from "../pages/user/buy-now";

const publicRouter = [
  {
    path: routers.home,
    component: Home,
  },
  {
    path: routers.about,
    component: About,
  },
  {
    path: routers.contact,
    component: Contact,
  },
  {
    path: routers.blogs,
    component: Blogs,
  },
  {
    path: routers.login,
    component: Login,
  },
  {
    path: routers.register,
    component: Register,
  },
  {
    path: routers.cart,
    component: Cart,
  },
  {
    path: routers.order,
    component: Order,
  },
  {
    path: routers.bill,
    component: Bill,
  },
  {
    path: routers.products,
    component: Products
  },
  {
    path: routers.productDetail,
    component: ProductDetail
  },{
    path: routers.cart,
    component: Cart
  },{
    path: routers.search,
    component: Search
  },{
    path: routers.buynow,
    component: BuyNow
  }
];

const priveRouter = [
  {
    path: routers.profile,
    component: Profile,
  },
];

const adminRouter = [
  {
    path: routers.manageStore,
    component: Dashboard,
  },
  {
    path: routers.manageOrder,
    component: ManageOrder,
  },
  {
    path: routers.manageUser,
    component: ManageUser,
  },
  {
    path: routers.manageProduct,
    component: ManageProduct,
  },
  {
    path: routers.manageRevenue,
    component: ManageRevenue,
  },
  {
    path: routers.addProduct,
    component: AddProduct,
  },
  {
    path: routers.manageBlogs,
    component: ManageBlogs,
  },
  {
    path: routers.newPost,
    component: NewPost,
  },
];

export { publicRouter, priveRouter, adminRouter };
