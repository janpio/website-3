// import Header from "../headers/Header";
import { cards } from "../../utils/constants/constants";
import Image from "next/image";

import {
  uiFeatures,
  apiFeatures,
  transfersFeatures,
} from "../../utils/constants/constants";

export default function PlatformSection() {
  return (
    <div
      id="platform-section"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        
      <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        
        <div>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-normal sm:text-4xl">
            Built as a turnkey solution
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Connect to Ganymede over its APIs/SDK; or, connect Ganymede directly
            to your database. We provide a powerful React-like library for
            engineers, synced with a web app for end users.
          </p>
        </div>
        <div className="mt-12 pb-10">
          <img
            className="object-center static mx-auto lg:max-w-5xl"
            src="/app/new_platform_light.png"
            alt=""
          />
        </div>

        <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            
      </div>
    </div>
  );
}

// export default function PlatformSection() {
//   return (
//     <>
//       <div
//         id="platform-section"
//         className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
//       >
//         <div className="absolute inset-0">
//           <div className="h-1/3 sm:h-2/3" />
//         </div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center">
//             <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
//               How it works
//             </h2>
//             <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//               Use the Ganymede platform however works best for your lab. We
//               build the infrastructure, you build your business.
//             </p>
//           </div>
//           <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
//             {cards.map((post) => (
//               <div
//                 key={post.title}
//                 className="flex flex-col rounded-lg shadow-lg overflow-hidden"
//               >
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-48 w-full object-cover"
//                     src={post.imageUrl}
//                     alt=""
//                   />
//                 </div>
//                 <div className="flex-1 bg-white p-6 flex flex-col justify-between">
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-indigo-600">
//                       <a href={post.category.href} className="hover:underline">
//                         {post.category.name}
//                       </a>
//                     </p>
//                     <a href={post.href} className="block mt-2">
//                       <p className="text-xl font-semibold text-gray-900">
//                         {post.title}
//                       </p>
//                       <p className="mt-3 text-base text-gray-500">
//                         {post.description}
//                       </p>
//                     </a>
//                   </div>
//                   <div className="mt-6 flex items-center">
//                     <div className="flex-shrink-0">
//                       <a href={post.author.href}>
//                         <span className="sr-only">{post.author.name}</span>
//                         <img
//                           className="h-10 w-10 rounded-full"
//                           src={post.author.imageUrl}
//                           alt=""
//                         />
//                       </a>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium text-gray-900">
//                         <a href={post.author.href} className="hover:underline">
//                           {post.author.name}
//                         </a>
//                       </p>
//                       <div className="flex space-x-1 text-sm text-gray-500">
//                         <time dateTime={post.datetime}>{post.date}</time>
//                         <span aria-hidden="true">&middot;</span>
//                         <span>{post.readingTime} read</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
