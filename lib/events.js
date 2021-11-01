import fs from "fs";
import path from "path";

const eventsFile = "events.json";

export function getAllEvents() {
  return JSON.parse(fs.readFileSync(eventsFile), "utf8");
}
