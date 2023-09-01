import React from 'react';

const Generat = ({ setQrCodeData }) => {
  const generateQrCode = () => {
    // Perform necessary operations to get the 'text' value
    const text = 'Example Text';
    setQrCodeData(text);
  };

  return (
    <div className="flex">
      <button
        className="bg-gray-400 max-w-xs ml-2 px-2 py-1 text-white rounded-sm mt-auto hover:bg-blue-500 disabled:bg-gray-300"
        onClick={generateQrCode}
      >
        Generate QR Code
      </button>
    </div>
  );
}

export default Generat;