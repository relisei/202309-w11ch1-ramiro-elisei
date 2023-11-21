import { type MechaApiStructure, type MechaStructure } from "../types";

export const mechaApiToMecha = ({
  _id: id,
  characteristics: { speed, strength },
  ...mechaBasic
}: MechaApiStructure): MechaStructure => ({
  id,
  ...mechaBasic,
  characteristics: { speed: +speed, strength: +strength },
});
