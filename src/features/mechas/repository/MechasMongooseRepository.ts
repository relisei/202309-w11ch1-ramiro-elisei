import { type MechaStructure } from "../types";
import { type MechasRepository } from "./types";
import Mechas from "../model/Mechas.js";
import { mechaApiToMecha } from "../utils/mechasUtils.js";

class MechasMongooseRepository implements MechasRepository {
  public async getMechas(): Promise<MechaStructure[]> {
    const mechas = await Mechas.find({}).lean();

    return mechas.map((mecha) => mechaApiToMecha(mecha));
  }
}

export default MechasMongooseRepository;
