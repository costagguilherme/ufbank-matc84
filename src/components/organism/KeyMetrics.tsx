import MetricCard from "../atoms/MetricCard";

type KeyMetricsProps = {
    machines: any[];
};

export default function KeyMetrics({ machines }: KeyMetricsProps) {
    const totalMachines = machines.length;

    const totalAssetValue = machines.reduce((acc, machine) => acc + machine.valor, 0);

    const averageMachineValue = totalMachines > 0 ? totalAssetValue / totalMachines : 0;

    const modelCounts = machines.reduce((acc, machine) => {
        acc[machine.model] = (acc[machine.model] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const mostCommonModel = Object.keys(modelCounts).reduce((a, b) => modelCounts[a] > modelCounts[b] ? a : b, "N/A");
    
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Total de Máquinas" value={totalMachines} />
            <MetricCard title="Valor Total dos Ativos" value={formatCurrency(totalAssetValue)} />
            <MetricCard title="Valor Médio por Máquina" value={formatCurrency(averageMachineValue)} />
            <MetricCard title="Modelo Mais Comum" value={mostCommonModel} />
        </div>
    );
}
