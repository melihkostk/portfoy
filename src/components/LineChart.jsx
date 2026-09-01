import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export function LineChart() {
    return (
        <div className="bg-white p-7.5 rounded-lg w-[31%]">
            <div className="bg-[#f7f6fb] w-full rounded-lg mb-7.5 text-center">
                <p className="text-xl py-2.5">Son Profil Ziyaretleri</p>
            </div>
            <div>
                <Line
                    data={{
                        labels: ["1 Yıldız", "2 Yıldız", "3 Yıldız", "4 Yıldız", "5 Yıldız"],
                        datasets: [{
                            label: "Son Profil Ziyaretleri",
                            data: [0, 2, 4, 6, 8],
                            borderColor: "#2a78d6",
                            backgroundColor: "rgba(42, 120, 214, 0.12)",
                            pointBackgroundColor: "#2a78d6",
                            pointBorderColor: "#fcfcfb",
                            pointRadius: 4,
                            borderWidth: 2,
                            fill: true,
                            tension: 0.3,
                        }]
                    }}
                    options={{
                        plugins: { legend: { display: true } }
                    }}
                />
            </div>
        </div>
    )
}