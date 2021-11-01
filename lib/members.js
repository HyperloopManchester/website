import fs from "fs";
import path from "path";

const memberRoot = "members";

export function getAllMembers() {
  return fs
    .readdirSync(memberRoot, { withFileTypes: true })
    .filter((file) => {
      return file.isFile() && path.extname(file.name) === ".json";
    })
    .map((file) => {
      return {
        filename: file.name,
        year: file.name.split(".")[0],
        teams: JSON.parse(
          fs.readFileSync(path.join(memberRoot, file.name), "utf8")
        ),
      };
    });
}
