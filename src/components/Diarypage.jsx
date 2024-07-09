import axios from "axios";
import React, { useState } from "react";
import { History } from "lucide-react";
import { useFirebase } from "../Firebase/Firebase";
import LoadingModal from "./Loading";
const Diarypage = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { savePrediction, isLoggedIn } = useFirebase();

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    if (text.length === 0) {
      setLoading(false);
      setError("No text provided");
      return;
    }

    const options = {
      method: "GET",
      url: import.meta.env.VITE_X_RAPIDAPI_URL,
      params: {
        text: `${text}`,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
      },
    };

    try {
      const result = await axios.request(options);
      setResponse(result.data);
      setLoading(false);
      if (isLoggedIn) {
        savePrediction(result.data);
      }
      console.log(result.data);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the prediction.");
    }
  };

  const handleClear = () => {
    setText("");
    setResponse("");
    setError("");
    setLoading(false);
  };
  const percentage = (data) => {
    return data * 100;
  };
  // if(loading)return

  return (
    <div className="flex flex-col bg-gradient-to-t  from-[#F1F8E8] to bg-[#D8EFD3] font-mono items-center pb-4">
      <h1 className="mt-10  text-2xl">Scribble your thoughts here</h1>
      <textarea
        className="border bg-orange-100 border-orange-400 w-[90vw] h-[60vh] lg:w-[60vw] lg:h-[50vh] text-xl font-mono resize-none rounded-md p-2 my-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-row w-[60vw] items-center justify-between">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r text-white from-orange-500 to-orange-800 font-mono text-xl font-semibold py-2 px-4 mx-6 rounded-md"
        >
          Predict
        </button>
        <button
          onClick={handleClear}
          className="mx-6 p-2  text-red-700 justify-center items-center rounded-full"
        >
          <History size={35} />
        </button>
      </div>
      {error && <div className="text-red-800">{error}</div>}
      {loading === true ? (
        <div>
          <LoadingModal />
        </div>
      ) : (
        response && (
          <div className="mt-4">
            <table className=" border-2 border-gray-600 mt-2">
              <thead>
                <tr>
                  <th className=" p-1 text-2xl" colSpan="2">
                    PREDICTED SENTIMENTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-gray-600 px-4 py-2">
                    OVERALL SENTIMENT
                  </th>
                  <th className="border text-gray-600 border-gray-600 uppercase px-4 py-2">
                    {response.sentiment}
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-600 px-4 py-2">
                    POSITIVE SENTIMENT
                  </th>
                  <th className="border font-sans text-gray-600 border-gray-600 uppercase px-4 py-2">
                    {`${percentage(response.pos)}%`}
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-600 px-4 py-2">
                    NEGATIVE SENTIMENT
                  </th>
                  <th className="border font-sans text-gray-600 border-gray-600 uppercase px-4 py-2">
                    {`${percentage(response.neg)}%`}
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-600 px-4 py-2">
                    NEUTRAL SENTIMENT
                  </th>
                  <th className="border border-gray-600 font-sans text-gray-600 uppercase px-4 py-2">
                    {`${percentage(response.neu)}%`}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default Diarypage;
