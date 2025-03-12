import UploadBox from "./components/UploadBox";

function App() {

  return (
    <main className="bg-gray-900 h-screen flex justify-center items-center">
      <section className="flex flex-col md:flex-row items-end gap-y-6 md:p-36 md:pt-12 md:gap-x-6">
        <div className="z-10 w-[360px] h-[250px] p-12 flex flex-col justify-start items-start gap-y-7 bg-indigo-900/80 rounded-b-lg rounded-tl-lg rounded-tr-[130px]">
          <img src="/images/logo.svg" alt="logo" className="w-40 h-12" />
          <div className="flex gap-x-3">
            <UploadBox uri="/images/icon-document.svg" />
            <UploadBox uri="/images/icon-folder.svg" />
            <UploadBox uri="/images/icon-upload.svg" />
          </div>
        </div>

        <div className="z-10 w-[360px] md:w-[600px] h-[150px] self-end flex flex-col bg-indigo-900/80 text-center p-7 rounded-lg">
          <h2 className="text-white text-lg font-semibold">
            You've used <span className="text-[#2acfcf]">815 GB</span> of your
            storage
          </h2>
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
