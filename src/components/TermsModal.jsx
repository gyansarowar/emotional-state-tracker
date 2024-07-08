import React from "react";

const TermsModal = ({ showModal, onAccept, onReject }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 max-w-[60vw] rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Terms and Conditions
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">I consent to provide Google credentials for authentication.</li>
          <li>I consent to provide access to my sentiment prediction.</li>
        </ul>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md mr-2"
            onClick={onReject}
          >
            Reject
          </button>
          <button
            className="bg-green-500 px-4 py-2 text-white rounded-md"
            onClick={onAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
