export interface TeamStanding {
  pos: number;
  name: string;
  logo: string;
  matches: number;
  points: number;
  won: number;
  draw: number;
  lost: number;
  isCurrentTeam?: boolean;
}

export const standingsData: TeamStanding[] = [
  { pos: 1, name: "JUTRZENKA PŁOCK", logo: "/assets/logo.png", matches: 12, points: 28, won: 9, draw: 1, lost: 2, isCurrentTeam: true },
  { pos: 2, name: "ORZEŁ WARSZAWA", logo: "/assets/logo.png", matches: 12, points: 26, won: 8, draw: 2, lost: 2 },
  { pos: 3, name: "WISŁA TORUŃ", logo: "/assets/logo.png", matches: 12, points: 22, won: 7, draw: 1, lost: 4 },
  { pos: 4, name: "SPARTA RADOM", logo: "/assets/logo.png", matches: 12, points: 21, won: 6, draw: 3, lost: 3 },
  { pos: 5, name: "MAZUR SIERPC", logo: "/assets/logo.png", matches: 12, points: 20, won: 6, draw: 2, lost: 4 },
  { pos: 6, name: "POGOŃ PŁOŃSK", logo: "/assets/logo.png", matches: 12, points: 19, won: 5, draw: 4, lost: 3 },
  { pos: 7, name: "UNIA GOSTYNIN", logo: "/assets/logo.png", matches: 12, points: 17, won: 5, draw: 2, lost: 5 },
  { pos: 8, name: "ISKRA KUTNO", logo: "/assets/logo.png", matches: 12, points: 15, won: 4, draw: 3, lost: 5 },
  { pos: 9, name: "SOKÓŁ MŁAWA", logo: "/assets/logo.png", matches: 12, points: 11, won: 3, draw: 2, lost: 7 },
  { pos: 10, name: "WKRA ŻUROMIN", logo: "/assets/logo.png", matches: 12, points: 11, won: 3, draw: 2, lost: 7 },
  { pos: 11, name: "VICTORIA PŁOCK", logo: "/assets/logo.png", matches: 12, points: 7, won: 2, draw: 1, lost: 9 },
  { pos: 12, name: "BŁĘKITNI GĄBIN", logo: "/assets/logo.png", matches: 12, points: 7, won: 2, draw: 1, lost: 9 },
];