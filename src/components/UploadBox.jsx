
function UploadBox({ uri, onUpload }) {

  function handleFileChange(event) {
    const file = event.target.files[0];
    if(file){
      const sizeInGb = file.size / (1024 ** 3);
      onUpload(sizeInGb);
    }
  }

  return (
    <label className="cursor-pointer">
      <input type="file" className="hidden" onChange={handleFileChange} />
      <div className="bg-indigo-950 p-3 rounded-xl">
        <img
          src={uri}
          alt="file icon to upload documents"
          className="w-8 h-8 object-contain"
        />
      </div>
    </label>
  );
}

export default UploadBox