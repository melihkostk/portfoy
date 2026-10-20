import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export function BarChart({ review = {}  , translation}) {
    return (
        <div className="bg-white p-7.5 rounded-lg w-[31%] max-[992px]:w-full">
            <div className="bg-[#f7f6fb] w-full rounded-lg mb-7.5 text-center">
                <p className="text-xl py-2.5">{translation?.data?.business?.reviews}</p>
            </div>
            <div>
                <Bar
                    data={{
                        labels: review?.labels ?? [],
                        datasets: [{
                            label: translation?.data?.business?.reviews,
                            data: review?.datasets?.data ?? [],
                            backgroundColor: "#2a78d6",
                            maxBarThickness: 48
                        }]
                    }}
                    options={{
                        plugins: { legend: { display: top } }
                    }}
                />
            </div>
        </div>
    )
}