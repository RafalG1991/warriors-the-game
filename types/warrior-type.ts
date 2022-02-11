import {WarriorRecord} from "../records/warrior.record.js";
import {FieldPacket} from "mysql2";

export type WarriorRecordResults = [WarriorRecord[], FieldPacket[]];