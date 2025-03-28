import { useState } from "react";
import UploadBox from "./components/UploadBox";

function App() {
  const totalGB = 1000;
  const [usedGB, setUsedGB] = useState(100);
  const porcentaje = (usedGB / totalGB) * 100;
  const freeGB = totalGB - usedGB;
  const freeGBArray = Array.from(String(freeGB), Number);

  return (
    <main className="bg-gray-900 h-screen flex justify-center items-center">
      <section className="flex flex-col md:flex-row items-end gap-y-6 md:p-36 md:pt-12 md:gap-x-6">
        <div className="z-10 w-[360px] h-[230px] p-12 flex flex-col justify-start items-start gap-y-7 bg-indigo-900 rounded-b-lg rounded-tl-lg rounded-tr-[130px]">
          <img src="/images/logo.svg" alt="logo" className="w-40 h-12" />
          <div className="flex gap-x-3">
            <UploadBox uri="/images/icon-document.svg" />
            <UploadBox uri="/images/icon-folder.svg" />
            <UploadBox uri="/images/icon-upload.svg" />
          </div>
        </div>

        <div className="relative z-10 w-[360px] md:w-[600px] h-[180px] self-end flex flex-col bg-indigo-900 text-center p-7 rounded-lg">
          <h2 className="text-white text-lg font-semibold">
            You've used <span className="text-[#2acfcf]">{usedGB} GB</span> of your
            storage
          </h2>
          {/* Progress Bar */}
          <div className="pt-5">
            <div className="h-7 w-full rounded-4xl bg-indigo-950 flex items-center">
              <span
                className="flex m-1 bg-gradient-to-r from-orange-200 to-amber-600 h-5 rounded-4xl transition-all duration-300"
                style={{ width: `${porcentaje}%`}}
              >
                <span 
                  className="absolute m-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300"
                  style={{ left: `calc(${porcentaje}% - 40px)` }} 
                />
              </span>
            </div>
          </div>
          {/* Gigas left */}
          <div className="absolute top-35 left-25 py-5 px-8 bg-amber-50 rounded-lg">
            <p className="font-extrabold text-3xl flex items-center tracking-wide">
              <span className="relative top-0.5">{freeGBArray[0]}</span>
              <span className="relative -top-0.5">{freeGBArray[1]}</span>
              <span className="relative top-0.5">{freeGBArray[2]}</span>
              <span className="font-medium text-sm text-gray-400 ms-2 tracking-wider">
                GB LEFT
              </span>
            </p>
          </div>
        </div>

        {/* Image Background */}
        <picture>
          <source srcSet="/images/bg-mobile.png" media="(max-width: 512px)" />
          <source srcSet="/images/bg-desktop.png" media="(min-width: 513px)" />
          <img
            src="/images/bg-desktop.png"
            alt="background image"
            className="fixed bottom-0 left-0 w-full h-auto object-cover"
          />
        </picture>
      </section>
    </main>
  );
}

export default App
