import { IoCloseSharp } from "react-icons/io5";
               
// eslint-disable-next-line react/prop-types
const LoginRegister = ({onClose}) => {
    return ( 
        <div className="fixed z-50 inset-0 bg-secondary pr-2">
            <div className=" h-full bg-white">
                <div className="flex justify-between p-2">
                    <p></p>
                    <button onClick={onClose} className=" w-8 h-8 flex bg-primary rounded-full"><IoCloseSharp className=" text-2xl text-white m-auto font-bold"/></button>
                </div>
            </div>
            

        </div>
     );
}
 
export default LoginRegister;



// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import image from "../../assets/auth-img-light.png";
// import Logo from "../../assets/logo-for-light.svg";
// import { FaUser, FaTimes } from 'react-icons/fa';
// import currency from "../../assets/currency.png";

// // eslint-disable-next-line react/prop-types
// const LoginRegister = ({ show, handleClose }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//       <div className="relative w-full h-full bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
//         <button
//           className="absolute top-0 right-0 m-4 text-white font-bold bg-orange-600 border-pink-200 border-4 rounded-full p-2 hover:bg-orange-600 hover:border-orange-600 flex items-center justify-center"
//           onClick={handleClose}
//         >
//           <FaTimes className="text-2xl" />
//         </button>

//         <div className="ml-12">
//           <a href="#">
//             <img src={Logo} alt="Logo" className="h-8 mt-4" />
//           </a>
//         </div>
//         <div className="flex flex-wrap">
          
//           {/* Image Section */}
//           <div className="w-full md:w-1/3 p-4 flex justify-center">
//             <a href="#">
//               <img src={image} alt="image" className="w-full h-auto" />
//             </a>
//           </div>

//           {/* Register Section */}
//           <div className="w-full md:w-1/3 p-4 flex justify-center">
//             <div className="bg-white p-4 rounded-2xl shadow-2xl">
//               <h1 className="text-2xl font-bold text-black mb-2">Register</h1>
//               <h2 className="text-xl font-bold text-gray-600 mb-4">And choose your first reward</h2>
//               <form>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="username">Username</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-gray-100" type="text" id="username" placeholder="Username" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="Email">Email</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-gray-100" type="text" id="Email" placeholder="Email" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="Password">Password</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-gray-100" type="password" id="Password" placeholder="Password" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="password-confirmation">Password confirmation</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-gray-100" type="password" id="password-confirmation" placeholder="Enter your password" />
//                 </div>
//                 <button
//                   type="button"
//                   className="flex items-center bg-orange-600 border-pink-200 text-white py-2 px-16 rounded-full hover:bg-orange-600 hover:border-orange-600 border-4 font-bold">
//                   <FaUser className="w-5 h-5 mr-2" />
//                   <span>REGISTER</span>
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Log in Section */}
//           <div className="w-full md:w-1/3 p-4 flex justify-center mt-80 mb-44">
//             <div className="bg-slate-100 p-4 rounded-2xl">
//               <h1 className="text-2xl font-bold text-black mb-2">Log in</h1>
//               <h2 className="text-xl font-bold text-gray-600 mb-4">
//                 Earn
//                 <img src={currency} alt="currency" className="inline-block w-6 h-6 align-middle ml-2 mr-2" />
//                 with easy task
//               </h2>
//               <form>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="username">Username or email</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-white" type="text" id="username" placeholder="Username or email" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2" htmlFor="Password">Password</label>
//                   <input className="w-full py-2 px-3 rounded-full bg-white" type="password" id="Password" placeholder="Password" />
//                 </div>
//                 <button
//                   type="button"
//                   className="flex items-center bg-orange-600 border-pink-200 text-white py-2 px-16 rounded-full hover:bg-orange-600 hover:border-orange-600 border-4 font-bold">
//                   <span>LOG IN</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegister;