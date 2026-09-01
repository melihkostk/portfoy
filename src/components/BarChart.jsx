import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export function BarChart() {
    return (
        <div className="bg-white p-7.5 rounded-lg w-[31%]">
            <div className="bg-[#f7f6fb] w-full rounded-lg mb-7.5 text-center">
                <p className="text-xl py-2.5">Değerlendirmeler</p>
            </div>
            <div>
                <Bar
                    data={{
                        labels: ["1 Yıldız", "2 Yıldız", "3 Yıldız", "4 Yıldız", "5 Yıldız"],
                        datasets: [{
                            label: "Değerlendirmeler",
                            data: [0, 2, 4, 6, 8],
                            backgroundColor: "#2a78d6",
                            maxBarThickness: 48
                        }]
                    }}
                    options={{
                        plugins: { legend: { display: false } }
                    }}
                />
            </div>
        </div>
    )
}