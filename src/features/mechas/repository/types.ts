import { type MechaStructure } from "../types";

export interface MechasRepository {
  getMechas: () => Promise<MechaStructure[]>;
}
