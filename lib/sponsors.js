const PLATINUM = "Platinum";
const GOLD = "Gold";
const SILVER = "Silver";
const BRONZE = "Bronze";

function sponsor(name, rank, logoUrl, url) {
  return {
    name,
    rank,
    logoUrl,
    url,
  };
}

export function getAllSponsors() {
  return [
    sponsor(
      "altium",
      PLATINUM,
      "/sponsors/altium.png",
      "https://www.altium.com/"
    ),
    sponsor(
      "solidworks",
      GOLD,
      "/sponsors/solidworks.png",
      "https://www.solidworks.com/"
    ),
    sponsor(
      "comsol",
      SILVER,
      "/sponsors/comsol.png",
      "https://www.comsol.com/"
    ),
    sponsor(
      "uom",
      BRONZE,
      "/sponsors/manchester-university.png",
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
      "smf",
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
      "180",
      PLATINUM,
      "/sponsors/180dgrs-consulting.png",
      "https://180dc.org/"
    ),
    sponsor(
      "germ",
      PLATINUM,
      "/sponsors/germuhendislik.png",
      "https://www.germuhendislik.com.tr/index.php/en/"
    ),
  ];
}
