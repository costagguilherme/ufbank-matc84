import { machinesDB } from "../db";


export async function GET() {
  return Response.json(machinesDB);
}