// import React, { useEffect, useState } from "react";
// import { useFirebase } from "../Firebase/Firebase";

// const History = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { fetchPrediction } = useFirebase();

//   useEffect(() => {
//     const loadHistory = async () => {
//       const querySnapshot = await fetchPrediction();
//       const historyData = querySnapshot.docs.map(doc => doc.data());
//       setHistory(historyData);
//       setLoading(false);
//     };
//     loadHistory();
//   }, [fetchPrediction]);

//   return loading ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <p className="text-3xl font-mono">Loading...</p>
//     </div>
//   ) : history.length === 0 ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <div className="text-3xl">No Predictions Available</div>
//     </div>
//   ) : (
//     <div className="flex bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] font-mono flex-col items-center min-h-[50vh] pb-4">
//       <h1 className="mt-10 text-4xl">Your Mood History</h1>
//       <div className="w-[90vw] lg:w-[60vw] mt-4">
//         <table className="border-collapse border border-gray-300 w-full">
//           <thead>
//             <tr>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Date
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Overall Sentiment
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry) => (
//               <tr key={entry.id}>
//                 <td className="border text-lg border-gray-600 px-4 py-2">
//                   {entry.Time}
//                 </td>
//                 <td className="border text-lg uppercase border-gray-600 text-center py-2">
//                   {entry.MoodPrediction}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default History;
// import React, { useEffect, useState } from "react";
// import { useFirebase } from "../Firebase/Firebase";

// const History = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { fetchPrediction } = useFirebase();

//   useEffect(() => {
//     const loadHistory = async () => {
//       const querySnapshot = await fetchPrediction();
//       const historyData = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setHistory(historyData);
//       setLoading(false);
//     };
//     loadHistory();
//   }, [fetchPrediction]);

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   return loading ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <p className="text-3xl font-mono">Loading...</p>
//     </div>
//   ) : history.length === 0 ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <div className="text-3xl">No Predictions Available</div>
//     </div>
//   ) : (
//     <div className="flex bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] font-mono flex-col items-center min-h-[50vh] pb-4">
//       <h1 className="mt-10 text-4xl">Your Mood History</h1>
//       <div className="w-[90vw] lg:w-[60vw] mt-4 overflow-auto">
//         <table className="border-collapse border border-gray-300 w-full">
//           <thead>
//             <tr>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Date</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Overall Sentiment</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Compound</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Negative</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Neutral</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Positive</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry) => (
//               <tr key={entry.id}>
//                 <td className="border text-lg border-gray-600 px-4 py-2">{formatDateTime(entry.Time)}</td>
//                 <td className="border text-lg uppercase border-gray-600 text-center py-2">{entry.MoodPrediction.sentiment}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.compound}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neg}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neu}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.pos}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default History;
// import React, { useEffect, useState } from "react";
// import { useFirebase } from "../Firebase/Firebase";

// const History = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { fetchPrediction } = useFirebase();

//   useEffect(() => {
//     const loadHistory = async () => {
//       const querySnapshot = await fetchPrediction();
//       const historyData = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setHistory(historyData);
//       setLoading(false);
//     };
//     loadHistory();
//   }, [fetchPrediction]);

//   const parseDate = (dateString) => {
//     const [day, month, year, hour, minute, second] = dateString
//       .match(/\d+/g)
//       .map(Number);
//     return new Date(year, month - 1, day, hour, minute, second);
//   };

//   const formatDateTime = (timestamp) => {
//     const date = parseDate(timestamp);
//     return date.toLocaleString();
//   };

//   return loading ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <p className="text-3xl font-mono">Loading...</p>
//     </div>
//   ) : history.length === 0 ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <div className="text-3xl">No Predictions Available</div>
//     </div>
//   ) : (
//     <div className="flex bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] font-mono flex-col items-center min-h-[50vh] pb-4">
//       <h1 className="mt-10 text-4xl">Your Mood History</h1>
//       <div className="w-[90vw] lg:w-[60vw] mt-4 overflow-auto">
//         <table className="border-collapse border border-gray-300 w-full">
//           <thead>
//             <tr>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Date</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Overall Sentiment</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Compound</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Negative</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Neutral</th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">Positive</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry) => (
//               <tr key={entry.id}>
//                 <td className="border text-lg border-gray-600 px-4 py-2">{formatDateTime(entry.Time)}</td>
//                 <td className="border text-lg uppercase border-gray-600 text-center py-2">{entry.MoodPrediction.sentiment}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.compound}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neg}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neu}</td>
//                 <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.pos}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default History;
// import React, { useEffect, useState } from "react";
// import { useFirebase } from "../Firebase/Firebase";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const History = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { fetchPrediction } = useFirebase();

//   useEffect(() => {
//     const loadHistory = async () => {
//       const querySnapshot = await fetchPrediction();
//       const historyData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setHistory(historyData);
//       setLoading(false);
//     };
//     loadHistory();
//   }, [fetchPrediction]);

//   const parseDate = (dateString) => {
//     const [day, month, year, hour, minute, second] = dateString
//       .match(/\d+/g)
//       .map(Number);
//     return new Date(year, month - 1, day, hour, minute, second);
//   };

//   const formatDateTime = (timestamp) => {
//     const date = parseDate(timestamp);
//     return date.toLocaleString();
//   };

//   const sentimentData = {
//     labels: history.map((entry) => formatDateTime(entry.Time)),
//     datasets: [
//       {
//         label: "Overall Sentiment",
//         data: history.map((entry) => entry.MoodPrediction.compound),
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return loading ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <p className="text-3xl font-mono">Loading...</p>
//     </div>
//   ) : history.length === 0 ? (
//     <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
//       <div className="text-3xl">No Predictions Available</div>
//     </div>
//   ) : (
//     <div className="flex bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] font-mono flex-col items-center min-h-[50vh] pb-4">
//       <h1 className="mt-10 text-4xl">Your Mood History</h1>
//       <div className="w-[90vw] lg:w-[60vw] mt-4 overflow-auto">
//         <table className="border-collapse border border-gray-300 w-full mb-4">
//           <thead>
//             <tr>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Date
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Overall Sentiment
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Compound
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Negative
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Neutral
//               </th>
//               <th className="border text-2xl border-gray-600 px-4 py-2">
//                 Positive
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry) => (
//               <tr key={entry.id}>
//                 <td className="border text-lg border-gray-600 px-4 py-2">
//                   {formatDateTime(entry.Time)}
//                 </td>
//                 <td className="border text-lg uppercase border-gray-600 text-center py-2">
//                   {entry.MoodPrediction.sentiment}
//                 </td>
//                 <td className="border text-lg border-gray-600 text-center py-2">
//                   {entry.MoodPrediction.compound}
//                 </td>
//                 <td className="border text-lg border-gray-600 text-center py-2">
//                   {entry.MoodPrediction.neg}
//                 </td>
//                 <td className="border text-lg border-gray-600 text-center py-2">
//                   {entry.MoodPrediction.neu}
//                 </td>
//                 <td className="border text-lg border-gray-600 text-center py-2">
//                   {entry.MoodPrediction.pos}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div style={{ width: "50vw", height: "300px" }}>
//           <Bar
//             data={sentimentData}
//             options={{ responsive: true, maintainAspectRatio: false }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
import React, { useEffect, useState } from "react";
import { useFirebase } from "../Firebase/Firebase";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchPrediction } = useFirebase();

  useEffect(() => {
    const loadHistory = async () => {
      const querySnapshot = await fetchPrediction();
      const historyData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setHistory(historyData);
      setLoading(false);
    };
    loadHistory();
  }, [fetchPrediction]);

  const parseDate = (dateString) => {
    const [day, month, year, hour, minute, second] = dateString
      .match(/\d+/g)
      .map(Number);
    return new Date(year, month - 1, day, hour, minute, second);
  };

  const formatDateTime = (timestamp) => {
    const date = parseDate(timestamp);
    return date.toLocaleString();
  };

  // Aggregate sentiment counts
  const sentimentCounts = history.reduce((acc, entry) => {
    const sentiment = entry.MoodPrediction.sentiment.toLowerCase();
    if (sentiment === "positive") acc.positive += 1;
    if (sentiment === "negative") acc.negative += 1;
    if (sentiment === "neutral") acc.neutral += 1;
    return acc;
  }, { positive: 0, negative: 0, neutral: 0 });

  const sentimentData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        
        data: [sentimentCounts.positive, sentimentCounts.negative, sentimentCounts.neutral],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            if (label) {
              return `${label}: ${context.raw}`;
            }
            return '';
          }
        }
      }
    }
  };

  return loading ? (
    <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
      <p className="text-3xl font-mono">Loading...</p>
    </div>
  ) : history.length === 0 ? (
    <div className="h-[50vh] bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] flex items-center justify-center">
      <div className="text-3xl">No Predictions Available</div>
    </div>
  ) : (
    <div className="flex bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] font-mono flex-col items-center min-h-[50vh] pb-4">
      <h1 className="mt-10 text-4xl">Your Mood History</h1>
      <div className="w-[90vw] lg:w-[60vw] mt-4 overflow-auto">
        <table className="border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr>
              <th className="border text-2xl border-gray-600 px-4 py-2">Date</th>
              <th className="border text-2xl border-gray-600 px-4 py-2">Overall Sentiment</th>
              <th className="border text-2xl border-gray-600 px-4 py-2">Compound</th>
              <th className="border text-2xl border-gray-600 px-4 py-2">Negative</th>
              <th className="border text-2xl border-gray-600 px-4 py-2">Neutral</th>
              <th className="border text-2xl border-gray-600 px-4 py-2">Positive</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry.id}>
                <td className="border text-lg border-gray-600 px-4 py-2">{formatDateTime(entry.Time)}</td>
                <td className="border text-lg uppercase border-gray-600 text-center py-2">{entry.MoodPrediction.sentiment}</td>
                <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.compound}</td>
                <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neg}</td>
                <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.neu}</td>
                <td className="border text-lg border-gray-600 text-center py-2">{entry.MoodPrediction.pos}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ width: '40vw', height: '400px' }}>
          <Bar data={sentimentData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default History;
