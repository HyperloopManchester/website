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
      "altair",
      SILVER,
      "/sponsors/altair.svg",
      "https://www.altair.com/"
    ),
    sponsor(
      "comsol",
      SILVER,
      "/sponsors/comsol.svg",
      "https://www.comsol.com/"
    ),
    sponsor(
      "altium",
      PLATINUM,
      "/sponsors/altium.svg",
      "https://www.altium.com/"
    ),
    sponsor(
      "solidworks",
      GOLD,
      "/sponsors/solidworks.svg",
      "https://www.solidworks.com/"
    ),
    sponsor(
      "university of manchester",
      BRONZE,
      "/sponsors/uom.svg",
      "https://www.manchester.ac.uk/"
    ),
    sponsor(
      "tracopower",
      GOLD,
      "/sponsors/traco.png",
      "https://www.tracopower.com/int"
    ),
    sponsor(
      "digikiy",
      BRONZE,
      "/sponsors/digikey.png",
      "https://www.digikey.com/"
    ),
    sponsor(
      "social mobility foundation",
      GOLD,
      "/sponsors/social-mobility-foundation.png",
      "https://www.socialmobility.org.uk/"
    ),
    sponsor(
      "eurocircuit",
      PLATINUM,
      "/sponsors/euro-circuits.png",
      "https://www.eurocircuits.com/"
    ),
    sponsor(
      "vectornav",
      SILVER,
      "/sponsors/vectornav.png",
      "https://www.vectornav.com/"
    ),
    sponsor(
      "projectaccess",
      PLATINUM,
      "/sponsors/project-access.png",
      "https://projectaccess.org/"
    ),
    sponsor(
      "themoonshotfactory",
      PLATINUM,
      "/sponsors/the-moonshot-factory.png",
      "https://x.company/"
    ),
    sponsor(
      "germuhendislik",
      PLATINUM,
      "/sponsors/germuhendislik.png",
      "https://www.germuhendislik.com.tr/index.php/en/"
    ),
  ];
}
