const ORBITAL_PERIODS = {
  earth: 1.00,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const EARTH_YEAR_SECONDS = 31557600

export const age = (planet, seconds) => {
  const orbital_period = ORBITAL_PERIODS[planet]
  return parseFloat((seconds / orbital_period / EARTH_YEAR_SECONDS).toFixed(2))
};
