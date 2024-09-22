import { Competition, Event, Result, Round } from "@wca/helpers";
import { SOR, SORWithPosition } from "./interfaces";

export const calculateSor = (wcif: Competition) => {
  const events = wcif.events.map((e) => e.id);
  let data: SOR[] = [];
  for (const person of wcif.persons) {
    if (!person.registration) {
      continue;
    }
    for (const e of events) {
      const eventInfo = wcif.events.find((event: Event) => event.id === e);
      const roundInfo = eventInfo?.rounds.find(
        (round: Round) => round.id === `${eventInfo.id}-r1`
      );
      if (!roundInfo) continue;
      const result = roundInfo?.results.find(
        (result: Result) => result.personId === person.registrantId
      );
      const maxPosition =
        roundInfo.results
          .map((r) => r.ranking)
          .reduce((prev, current) =>
            prev && current && prev > current ? prev : current
          ) || 0;
      const sumToAdd = result ? result.ranking : maxPosition + 1;
      const existingSor = data.find(
        (s) => s.person.registrantId === person.registrantId
      );
      if (!existingSor) {
        data.push({
          person: person,
          value: sumToAdd || 0,
        });
      } else {
        const newSor = {
          person: person,
          value: existingSor.value + sumToAdd!,
        };
        data = data.filter(
          (s) => s.person.registrantId !== person.registrantId
        );
        data.push(newSor);
      }
    }
  }
  let position = 1;
  const sorToReturn: SORWithPosition[] = [];
  data
    .sort((a, b) => a.value - b.value)
    .map((s) => {
      let newSor = {
        person: s.person,
        value: s.value,
        position: position,
      };
      if (position > 1 && s.value === sorToReturn[position - 2].value) {
        newSor = {
          person: s.person,
          value: s.value,
          position: sorToReturn[position - 2].position,
        };
      }
      position++;
      sorToReturn.push(newSor);
    });
  return sorToReturn;
};
