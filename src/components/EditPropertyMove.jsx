import { TransactionCard } from "./TransactionCard";

export function EditPropertyMove({ transactions }) {
    return (
        <div className="w-full max-w-[90%] p-2.5 border border-[#f8f8f8] rounded-lg">
            <div className="w-full p-4">
                {transactions?.data?.map((item, index) => (
                    <TransactionCard
                        name={item.user.name}
                        avatar={item.user.avatar}
                        message={item.message}
                        key={index}
                        time={item.time}
                        index={index}
                        transactions={transactions}
                    />
                ))}
            </div>
        </div>
    )
}
