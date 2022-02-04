import { FC } from "react";

export const Main: FC = () => {
return (
<div>
  <div className="flex justify-center items-center mt-20">
    <div className="md:w-7/12 w-10/12 mt-5">
      <div className="md:flex">
        <div className="mb-5 md:mb-0">
          <img src="/icon.png" className="rounded-full border-4 border-gray-800 md:w-auto w-1/2" alt="" />
        </div>
        <div className="md:ml-5">
          <p className="text-5xl font-bold text-gray-100">Mert Doğu</p>
          <p className=" text-fuchsia-400 text-opacity-70 text-xl font-medium">
            Full Stack Developer
          </p>
          <div className="mt-2 flex text-xl text-gray-400 font-semibold">
            <p className="">I'm a full stack developer with over { new Date().getFullYear() - 2019 } years of
              experience<br />
              And a student who spends most all of his free time doing open source projects/websites/softwares.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center w-screen mt-20 bg-[#1f1f1f] py-20">
    <div className="md:flex md:w-7/12 w-10/12 justify-between items-center">
      <div className="md:w-1/2  text-gray-200">
        <p className="text-3xl font-semibold">About Me</p>
        <p className="mt-4">
          I've been playing with web development since 2018. Over the years, I've been learning more and more
          technologies.
        </p>
        <p className="mt-4">
          I mainly use Node based technologies. On the right, you can see a couple of my favourite techhnologies, which
          are also the ones I use in most of my projects.
        </p>
      </div>
      <div className="justify-center md:w-1/2 flex grid grid-cols-2 gap-4 text-gray-200 font-medium md:mt-0 mt-5">
      <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#42b983" className="">
                    <path d="m3 6 13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1 6.5 8z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Vue
                </p>
                <p>
                  Since 2021
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-blue-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#38bdf8" className="">
                  <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Tailwind
                </p>
                <p>
                  Since 2021
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-blue-400 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#5ed3f3" className="">
                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854S17.573 13.146 16 13.146zm-7.99 8.526-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156.177.625a31.42 31.42 0 0 0 1.818 4.771l.135.281-.135.286a31.047 31.047 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33.28 33.28 0 0 1 1.578-4.063 32.958 32.958 0 0 1-1.578-4.063zm16.901 9.74-.177-.625a31.163 31.163 0 0 0-1.818-4.766l-.135-.286.135-.286a31.047 31.047 0 0 0 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.524 32.524 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a33.663 33.663 0 0 1-1.578 4.063zM7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464a31.458 31.458 0 0 0-3.229 3.958l-.182.255-.313.026a31.612 31.612 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005a33.343 33.343 0 0 1 4.313-.672 32.828 32.828 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464a31.458 31.458 0 0 0 3.229-3.958l.177-.255.313-.031a30.668 30.668 0 0 0 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135a3.095 3.095 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005a32.644 32.644 0 0 1-4.313.667 32.886 32.886 0 0 1-2.734 3.396zm7.99-13.802-.63-.161a31.993 31.993 0 0 0-5.052-.813l-.313-.026-.177-.255a31.458 31.458 0 0 0-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33.22 33.22 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943a34.067 34.067 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255a31.458 31.458 0 0 0 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943a32.886 32.886 0 0 1-2.734-3.396 32.517 32.517 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26a39.947 39.947 0 0 1-1.797-2.828 39.917 39.917 0 0 1-1.557-2.969l-.135-.286.135-.286a40.498 40.498 0 0 1 3.354-5.797l.182-.26.313-.026a39.962 39.962 0 0 1 6.708 0l.313.026.182.26a40.077 40.077 0 0 1 3.354 5.797l.135.286-.135.286a39.62 39.62 0 0 1-3.354 5.797l-.182.26-.313.026a40.483 40.483 0 0 1-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0a39.03 39.03 0 0 0 2.927-5.063 37.53 37.53 0 0 0-2.932-5.063 37.881 37.881 0 0 0-5.854 0 37.302 37.302 0 0 0-2.932 5.063 38.624 38.624 0 0 0 2.932 5.063z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  React
                </p>
                <p>
                  Since 2020
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 128 128" fill="#42b983" className="">
                    <path d="m 1633.71,2.64062 c -4.3,0 -8.57,1.125 -12.33,3.30079 l -39.27,23.23439 c -5.86,3.2812 -3,4.4414 -1.07,5.1172 7.83,2.7148 9.41,3.3398 17.76,8.0742 0.87,0.4883 2.02,0.3047 2.92,-0.2227 l 30.16,-17.9101 c 1.1,-0.6055 2.64,-0.6055 3.65,0 l 117.6,67.8789 c 1.1,0.625 1.8,1.8867 1.8,3.1836 l 0,135.7231 c 0,1.328 -0.7,2.57 -1.82,3.242 l -117.56,67.824 c -1.09,0.633 -2.53,0.633 -3.63,0 l -117.53,-67.844 c -1.14,-0.652 -1.86,-1.933 -1.86,-3.222 l 0,-135.7231 c 0,-1.2969 0.72,-2.5274 1.85,-3.1446 l 32.22,-18.6132 c 17.48,-8.7383 28.19,1.5547 28.19,11.8945 l 0,134.0044 c 0,1.894 1.52,3.39 3.41,3.39 l 14.92,0 c 1.86,0 3.4,-1.496 3.4,-3.39 l 0,-134.0044 c 0,-23.3281 -12.7,-36.707 -34.82,-36.707 -6.8,0 -12.15,0 -27.09,7.3632 l -30.84,17.754 c -7.62,4.4023 -12.33,12.6367 -12.33,21.4531 l 0,135.7231 c 0,8.82 4.71,17.05 12.33,21.437 l 117.61,67.957 c 7.44,4.211 17.33,4.211 24.71,0 l 117.6,-67.957 c 7.62,-4.406 12.35,-12.617 12.35,-21.437 l 0,-135.7231 c 0,-8.8164 -4.73,-17.0196 -12.35,-21.4531 L 1646.09,5.94141 c -3.76,-2.17579 -8.02,-3.30079 -12.38,-3.30079"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Node.js
                </p>
                <p>
                  Since 2019
                </p>
              </div>
            </div>
    </div>  
      </div>
    </div>
  </div>
</div>
);
};