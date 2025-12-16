import { machinesDB } from "../db";

export async function GET() {
  return Response.json(machinesDB);
}

export async function POST(req: Request) {
  const body = await req.json();

  const machine = {
    id: machinesDB.length + 1,
    name: body.name,
    serial: body.serial,
    model: body.model,
    valor: Number(body.valor),
  };

  machinesDB.push(machine);
  
  return Response.json(machine, { status: 200 });
}

export async function PATCH(req: Request) {
  const body = await req.json();

  const machineId = machinesDB.findIndex((m) => m.id === body.id);

  if (machineId === -1) {
    return Response.json({ error: "Máquina não encontrada" }, { status: 404 });
  }

  const updatedPatchMachine = {
    ...machinesDB[machineId],
    name: body.name ?? machinesDB[machineId].name,
    serial: body.serial ?? machinesDB[machineId].serial,
    model: body.model ?? machinesDB[machineId].model,
    valor: Number(body.valor) ?? 0,
  };

  machinesDB[machineId] = updatedPatchMachine;

  return Response.json(updatedPatchMachine, { status: 200 });
}

export async function PUT(req: Request) {
  const body = await req.json();

  const machineId = machinesDB.findIndex((m) => m.id === body.id);

  if (machineId === -1) {
    return Response.json({ error: "Máquina não encontrada" }, { status: 404 });
  }

  const updatedPutMachine = {
    id: body.id,
    name: body.name,
    serial: body.serial,
    model: body.model,
    valor: Number(body.valor),
  };

  machinesDB[machineId] = updatedPutMachine;

  return Response.json(updatedPutMachine, { status: 200 });
}

export async function DELETE(req: Request) {
  const body = await req.json();

  const machineId = machinesDB.findIndex((m) => m.id === body.id);

  if (machineId === -1) {
    return Response.json({ error: "Máquina não encontrada" }, { status: 404 });
  }

  machinesDB.splice(machineId, 1);

  return Response.json({ message: "Máquina deletada com sucesso" }, { status: 200 });
}