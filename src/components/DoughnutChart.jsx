import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart() {

    return (
        <div className="bg-white p-7.5 rounded-lg w-[31%]">
            <div className="bg-[#f7f6fb] w-full rounded-lg mb-7.5 text-center">
                <p className="text-xl py-2.5">Kategorisine Göre İlanlar</p>
            </div>
            <div>
                <Doughnut
                    data={{
                        labels: ["Apartman", "Arsa", "Villa", "Tarla", "Proje Villa", "Proje Apartman"],
                        datasets: [{
                            label: "Değerlendirmeler",
                            data: [0, 2, 4, 6, 8, 10],
                            backgroundColor: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4", "#008300"],
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