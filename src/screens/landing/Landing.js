import React from "react";
import {Outlet} from "react-router-dom";

// import {StateContext} from "../../state/global_state/StateProvider";
import firebase from "../../services/firebase";
import LandingComponent from "../../components/ui/landing/Landing";
// import Dropdown from "../../components/Dropdown";

// const DROPDOWN = [
//   {
//     text: "Dasboard",
//     path: "/dashboard/products",
//   },
//   {
//     text: "Profile",
//     path: "/dashboard/profile",
//   },
//   {
//     text: "Sign out",
//     path: "/sign_out",
//   },
// ];
const MENU = [
  // {
  //   text: "Products Checker",
  //   path: "/products",
  // },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Github",
    url: "https://github.com/nicolkill",
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/nicolkill",
  },
  {
    text: "Twitter/X",
    url: "https://twitter.com/nicolkill",
  },
];
// const AUTH_MENU = [
//   {
//     align: "right",
//     desktop: true,
//     element: (
//       <Dropdown options={DROPDOWN}>
//         <span className="material-icons text-lg">person</span>
//       </Dropdown>
//     ),
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Dasboard",
//     path: "/dashboard/products",
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Profile",
//     path: "/dashboard/profile",
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Sign out",
//     path: "/sign_out",
//   },
// ];
// const UNAUTH_MENU = [
//   {
//     align: "right",
//     text: "Login",
//     path: "/login",
//   },
//   {
//     align: "right",
//     text: "/",
//     desktop: true,
//   },
//   {
//     align: "right",
//     text: "Register",
//     path: "/register",
//   },
// ];

function Landing() {
  // const [ state, ] = useContext(StateContext)
  // const menu = MENU.concat(state.session ? AUTH_MENU : UNAUTH_MENU);

  return (
    <LandingComponent menu={MENU}>
      <Outlet/>
    </LandingComponent>
  );
}
export default Landing;
