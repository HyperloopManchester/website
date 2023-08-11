export const PLATINUM = "Platinum";
export const GOLD = "Gold";
export const SILVER = "Silver";
export const BRONZE = "Bronze";

function sponsor(name, rank, logoUrl, websiteUrl) {
  return {
    name,
    rank,
    logoUrl,
    websiteUrl,
  };
}

export function getAllSponsors() {
  return [
    sponsor(
      "university of manchester",
      BRONZE,
      "/sponsors/uom-white.png",
      "https://www.manchester.ac.uk/"
    ),
    sponsor(
      "altair",
      SILVER,
      "/sponsors/altair-white.png",
      "https://www.altair.com/"
    ),
    sponsor(
      "goudsmit",
      SILVER,
      "/sponsors/goudsmit-uk-white.png",
      "https://www.goudsmit.co.uk/"
    ),
    sponsor(
      "pro formance metals",
      SILVER,
      "/sponsors/proformance.png",
      "https://proformancemetals.co.uk/"
    ),
    sponsor(
      "nixenepublishing",
      GOLD,
      "/sponsors/nixenepublishing-white.png",
      "https://www.nixenepublishing.com/"
    ),
    sponsor(
      "cellerate",
      GOLD,
      "/sponsors/cellerate.png",
      "https://www.cellerate.co.uk/"
    ),
    sponsor(
      "3d experience",
      GOLD,
      "/sponsors/3d-experience-white.png",
      "https://www.3ds.com/3dexperience"
    ),
    
  ];
}
