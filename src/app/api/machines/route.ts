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
  };

  machinesDB.push(machine);

  return Response.json(machine, { status: 200 });
}
