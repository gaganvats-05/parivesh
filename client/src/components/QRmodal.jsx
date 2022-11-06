import { QRCodeSVG } from "qrcode.react";

const QRmodal = ({ setOpenModal, value }) => {
  console.log("value", value);
  return (
    <>
      <div
        className="fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] w-screen h-screen z-[100]"
        onClick={() => setOpenModal(false)}
      />
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 min-w-[300px] max-w-[400px] h-[500px] w-full flex flex-col justify-evenly bg-white z-[999] m-auto shadow-lg rounded-lg p-4`}
      >
        <QRCodeSVG value={value} className="w-full h-full" />
        {/* <div className="w-full flex flex-row justify-center">
          <button
            type="button"
            class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Print
          </button>
        </div> */}
      </div>
    </>
  );
};

export default QRmodal;
