import { Race } from "@/src/types/Race"

export interface Horse {
  frame: string;
  horseNumber: number;
  horseName: string;
  winOdds: number;
  popularity: number;
  record: string;
  totalPrizeMoney: string;
  weight: string;
  ownerName: string;
  trainerName: string;
  sire: string;
  dam: string;
  damSire: string;
  sexAge: string;
  weightPenalty: null;
  jockeyName: string;
  preRating: number;
  previousRace: Race;
}