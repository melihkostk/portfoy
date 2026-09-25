import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart({ types = [] }) {

    return (
        <div className="bg-white p-7.5 rounded-lg w-[31%] max-[992px]:w-full">
            <div className="bg-[#f7f6fb] w-full rounded-lg mb-7.5 text-center">
                <p className="text-xl py-2.5">Kategorisine Göre İlanlar</p>
            </div>
            <div>
                <Doughnut
                    data={{
                        labels: types.map(item => item.name),
                        datasets: [{
                            label: "Kategorisine Göre İlanlar",
                            data: types.map(item => item.data),
                            backgroundColor: types.map(item => item.color),
                            borderColor: "#fcfcfb",
                            borderWidth: 2
                        }]
                    }}
                    options={{
                        plugins: { legend: { position: "top" } }
                    }}
                />
            </div>
        </div>
    )
}