type MetricCardProps = {
    title: string;
    value: string | number;
};

export default function MetricCard({ title, value }: MetricCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
    );
}
