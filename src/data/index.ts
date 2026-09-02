import { Unit } from "../entities/Unit.ts";
import InfantryBattalion from "../entities/InfantryBattalion.ts";
import EngineerBattalion from "../entities/EngineerBattalion.ts";
import CavalrySquadron from "../entities/CavalrySquadron.ts";
import ArtilleryBattalion from "../entities/ArtilleryBattalion.ts";
import SupportBattalion from "../entities/SupportBattalion.ts";
import Brigade from "../entities/Brigade.ts";

const NATO: Unit = {
  id: "NATO",
  name: "NATO",
  color: "#004990",
  subordinates: [
    new Brigade({
      id: "IBCT",
      name: "Infantry Brigade Combat Team",
      type: "infantry",
      subordinates: [
        {
          unit: new EngineerBattalion({
            id: "BEB",
            name: "Brigade Engineer Battalion",
          }),
          count: 1,
        },
        {
          unit: new InfantryBattalion({
            id: "IB1",
            name: "Infantry Battalion",
          }),
          count: 3,
        },
        {
          unit: new CavalrySquadron({
            id: "CS",
            name: "Cavalry Squadron",
          }),
          count: 1,
        },
        {
          unit: new ArtilleryBattalion({
            id: "FB",
            name: "Fires Battalion",
          }),
          count: 1,
        },
        {
          unit: new SupportBattalion({
            id: "BSB",
            name: "Brigade Support Battalion",
          }),
          count: 1,
        },
      ],
    }),
    new Brigade({
      id: "HBCT",
      name: "Heavy Brigade Combat Team",
      type: "mechanized_infantry",
      subordinates: [],
    }),
    new Brigade({
      id: "BCT",
      name: "Brigade Combat Team",
      type: "aviation",
      subordinates: [],
    }),
  ],
};

const CSAT: Unit = {
  id: "CSAT",
  name: "CSAT",
  color: "#700000",
  subordinates: [],
};

const AAF: Unit = {
  id: "AAF",
  name: "AAF",
  color: "#00a731",
  subordinates: [],
};

export const ARMIES: Record<ArmyType, Unit> = {
  nato: NATO,
  csat: CSAT,
  aaf: AAF,
};

export type UnitType =
  | "hq"
  | "aviation"
  | "armored"
  | "artillery"
  | "combat_logistic"
  | "communication"
  | "engineer"
  | "infantry"
  | "logistic"
  | "maintenance"
  | "mechanized_infantry"
  | "medical"
  | "mortar"
  | "radar"
  | "recon"
  | "weapon";

export type ArmyType = "nato" | "csat" | "aaf";

export type NatoAlphabet =
  | "Alpha"
  | "Bravo"
  | "Charlie"
  | "Delta"
  | "Echo"
  | "Foxtrot"
  | "Golf"
  | "Hotel"
  | "India"
  | "Juliett"
  | "Kilo"
  | "Lima"
  | "Mike"
  | "November"
  | "Oscar"
  | "Papa"
  | "Quebec"
  | "Romeo"
  | "Sierra"
  | "Tango"
  | "Uniform"
  | "Victor"
  | "Whisky"
  | "Xray"
  | "Yankee"
  | "Zulu";
