import MachineCard from "../molecules/MachineCard";

type Props = {
    machines: any[];
};

export default function MachinesList({ machines }: Props) {
    return (
        <div className="grid gap-4">
            {machines.map((m) => (
                <MachineCard
                    key={m.id}
                    name={m.name}
                    serial={m.serial}
                    model={m.model}
                />
            ))}
        </div>
    );
}
