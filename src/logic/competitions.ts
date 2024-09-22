import { CompetitionInfo } from "./interfaces";
import { wcaApiRequest } from "./request";

export const searchCompetitions = async (name?: string) => {
  const search = name ? name : "";
  try {
    const today = new Date();
    let start = "";
    if (!name || name.length < 1) {
      start = `${today.getFullYear()}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    }
    const response = await wcaApiRequest(
      `competitions?q=${search}&start=${start}&per_page=50&sort=start_date`
    );
    const data = await response.json();
    const competitions = data.filter(
      (competition: CompetitionInfo) =>
        new Date(competition.start_date).getFullYear() >= 2023
    );
    return competitions;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getWcif = async (id: string) => {
  try {
    const response = await wcaApiRequest(`competitions/${id}/wcif/public`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
