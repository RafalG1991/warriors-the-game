import {WarriorRecord} from "../records/warrior.record";
import {FieldPacket} from "mysql2";

export type WarriorRecordResults = [WarriorRecord[], FieldPacket[]];