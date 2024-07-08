import React, { useEffect, useState } from "react";
import { useFirebase } from "../Firebase/Firebase";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchPrediction } = useFirebase();

  useEffect(() => {
    const loadHistory = async () => {
      const res = await fetchPrediction();
      const historyData = res.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          Time: data.Time,
          MoodPrediction: data.MoodPrediction,
        };
      });
      historyData.sort((a, b) => parseDate(b.Time) - parseDate(a.Time));
      setHistory(historyData);
      setLoading(false);
    };
    loadHistory();
  }, [fetchPrediction]);

  const parseDate = (dateString) => {
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds);
  };

  const getPieChartData = () => {
    const moodCount = history.reduce((acc, entry) => {
      acc[entry.MoodPrediction] = (acc[entry.MoodPrediction] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(moodCount);
    const data = Object.values(moodCount);

    return {
      labels,
      datasets: [
        {
          label: "Mood Distribution",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 20,
          padding: 15,
          usePointStyle: true,
        },
      },
    },
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
      <div className="w-[90vw] lg:w-[60vw] mt-4">
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border text-2xl border-gray-600 px-4 py-2">
                Date
              </th>
              <th className="border text-2xl border-gray-600 px-4 py-2">
                Overall Sentiment
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry.id}>
                <td className="border text-lg border-gray-600 px-4 py-2">
                  {entry.Time}
                </td>
                <td className="border text-lg uppercase border-gray-600 text-center py-2">
                  {entry.MoodPrediction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-[50vw] mt-10">
        <h2 className="text-4xl text-center mb-4">Mood Distribution</h2>
        <Pie data={getPieChartData()} options={chartOptions} />
      </div>
    </div>
  );
};

export default History;
