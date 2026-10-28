export interface Player {
  id: number;
  number: number;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
}

export const playersData: Player[] = [
  { id: 1, number: 14, firstName: "ANNA", lastName: "KOWALSKA", position: "ROZGRYWAJĄCA", image: "/assets/player-silhouette.png" },
  { id: 2, number: 16, firstName: "ANNA", lastName: "KOWALSKA", position: "ROZGRYWAJĄCA", image: "/assets/player-silhouette.png" },
  { id: 3, number: 8,  firstName: "ANNA", lastName: "KOWALSKA", position: "ROZGRYWAJĄCA", image: "/assets/player-silhouette.png" },
  { id: 4, number: 21, firstName: "ANNA", lastName: "KOWALSKA", position: "ROZGRYWAJĄCA", image: "/assets/player-silhouette.png" },
];