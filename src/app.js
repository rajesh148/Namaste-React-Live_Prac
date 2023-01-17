import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *  -Logo (title)
 *  -NavItems [Right side]
 *  -Cart
 * Body
 *  -Search bar
 *  -RestaurantList
 *    -RestaurantCards [many cards]
 *      -Images
 *      -Name
 *      -Rating
 *      -Cusines
 * Footer
 *  -links
 *  -copyright
 */

// //Config Driven UI
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "30% off",
//       },
//       {
//         offerName: "No delivery fee",
//       },
//     ],
//   },
//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "SSS Idle",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
//         cusines: ["South Indian", "Tiffin"],
//         rating: "4.2",
//       },
//       {
//         name: "Cake zone",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
//         cusines: ["South Indian", "Tiffin"],
//         rating: "4.2",
//       },
//       {
//         name: "Taste of Wonder",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
//         cusines: ["South Indian", "Tiffin"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
