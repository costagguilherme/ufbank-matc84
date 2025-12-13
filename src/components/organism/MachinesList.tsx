import MachineCard from "../molecules/MachineCard";

type Props = {
    machines: any[];
    onEditMachine: (machine: any) => void;
};

export default function MachinesList({ machines, onEditMachine }: Props) {
    return (
        <div className="grid gap-4">
            {machines.map((m) => (
                <MachineCard
                    key={m.id}
                    name={m.name}
                    serial={m.serial}
                    model={m.model}
                    onEdit={() => onEditMachine(m)}
                />
            ))}
        </div>
    );
}
