import { Person } from "@wca/helpers";

export interface WCACompetition {
  id: string;
  name: string;
  website: string;
  countryIso2: string;
  country_iso2?: string;
}

export interface CompetitionInfo {
  id: string;
  name: string;
  url: string;
  country_iso2: string;
  registration_open: string;
  start_date: string;
}

export interface SOR {
    person: Person;
    value: number;
}

export interface SORWithPosition extends SOR {
    position: number;
}