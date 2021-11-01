import fs from "fs";
import path from "path";

const eventsFile = "news.json";

export function getAllNews() {
  return JSON.parse(fs.readFileSync(eventsFile), "utf8");
}
