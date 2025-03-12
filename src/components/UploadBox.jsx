
function UploadBox({ uri}) {
  return (
    <div className="bg-indigo-950 p-3 rounded-lg cursor-pointer">
      <img src={`${uri}`} alt="file icon to upload documents" className="w-8 h-8 object-contain" />
    </div>
  );
}

export default UploadBox