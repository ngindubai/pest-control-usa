import type { CityLocation, CityTier } from "@/types";
import { texasCities } from "./texas";
import { floridaCities } from "./florida";
import { arizonaCities } from "./arizona";
import { minnesotaCities } from "./minnesota";

// The authoritative city corpus. The Librarian adds one state file per batch and
// registers it here. Pages are built incrementally, never all towns at once.
// Town population floor: 5,000 (see MEMORY.md, adjustable).
export const cities: CityLocation[] = [
  ...texasCities,
  ...floridaCities,
  ...arizonaCities,
  ...minnesotaCities,
];

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): CityLocation | undefined {
  return cities.find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}

export function getCitiesByState(stateSlug: string): CityLocation[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getCitiesByTier(tier: CityTier): CityLocation[] {
  return cities.filter((c) => c.tier === tier);
}

// All state+city pairs for generateStaticParams.
export function allCityParams(): { state: string; city: string }[] {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}
