import MachineCard from "../molecules/MachineCard";

type Props = {
    machines: any[];
    onEditMachine: (machine: any) => void;
    onDeleteMachine: (machine: any) => void;
};

export default function MachinesList({ machines, onEditMachine, onDeleteMachine }: Props) {
    return (
        <div className="grid gap-4">
            {machines.map((m) => (
                <MachineCard
                    key={m.id}
                    name={m.name}
                    serial={m.serial}
                    model={m.model}
                    valor={m.valor}
                    onEdit={() => onEditMachine(m)}
                    onDelete={() => onDeleteMachine(m)}
                />
            ))}
        </div>
    );
}
