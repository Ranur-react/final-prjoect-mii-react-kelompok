import React, { Children } from "react";
import { Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/porto", element: <PortoNav />, 
        children: [
          {index: true, element: <Porto/>},
          {path: ":portoId", element: <PortoMember/>}
        ] },
    ],
  },
]);

function NavLayout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

function PortoNavLayout(){
  return(
    <>
    <PortoNav/>
    <Outlet context ="Hi from outlet"/>
    </>
  )
}