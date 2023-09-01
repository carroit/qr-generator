import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";
import Generat from "./Generat";

const InputForm = () => {
  const [text, setText] = useState("");
  const [logo, setLogo] = useState(null);
 
  const [qrCodeData, setQrCodeData] = useState('');
  const qrCodeRef = useRef(null);

  

  const handleDownload = () => {
    const canvas = qrCodeRef.current.querySelector("canvas");
    const dataURL = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode.png";

    downloadLink.click();
  };

  return (
    <div className="col-span-3 p-6 grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <label className="font-semibold text-md">Your text</label>
        <div className="flex  py-3 ">
          <input
            type="text"
            className="w-full h-7 border-2 py-1 px-3 text-gray-700 rounded-sm"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
          <div>
          <label className="font-semibold text-md">Your logo or any image *optional* </label>
           <div className="flex  py-3 ">
          <input
            type="file"
            accept="image/*"
            className="w-full h-110 border-2 py-1 px-2 text-gray-700 rounded-sm ml-2"
            onChange={(e) => setLogo(e.target.files[0])}
          />
      </div>
          </div>
          <div className="  text-center px-10  py-10">
          <Generat setQrCodeData={setQrCodeData} />
          </div>
          </div>
     
      <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
        <div ref={qrCodeRef}>
          {qrCodeData ? (
            <div>
              <QRCode
                value={qrCodeData}
                size={200} // Size of the QR code
                fgColor="#000" // Foreground color of the QR code (e.g., black)
                bgColor="#FFFFFF" // Background color of the QR code (e.g., white)
                level="H" // Error correction level (L, M, Q, or H)
              />
              <button
                className="bg-blue-400 text-white mt-4 px-4 py-1 w-full"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          ) : (
            <div>
              <QRCode
                value="Default QR Code"
                size={200}
                fgColor="#000000"
                bgColor="#ffffff"
                level="H"
              />
              <p className="mt-4">Default QR Code</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputForm;