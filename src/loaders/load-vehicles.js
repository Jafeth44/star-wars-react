import Vehicle from '../models/vehicle.js';

const apiVehicleMapper = (jsonObject) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    pilots,
    films,
    url
  } = jsonObject;

  return new Vehicle({
    name,
    model,
    manufacturer,
    costInCredits: cost_in_credits,
    lengthInUnits: length,
    maxAtmospheringSpeed: max_atmosphering_speed,
    crew,
    passengers,
    cargoCapacity: cargo_capacity,
    consumables,
    pilots: pilots.map(data => data.match(/\/people\/[0-9]*/)[0]),
    films: films.map(data => data.match(/\/films\/[0-9]*/)[0]),
    url: url.match(/\/vehicles\/[0-9]*/)[0],
  })
}

export const fetchVehicles = async({params}) => {
  const url = await fetch(`https://swapi.dev/api/vehicles/?${params.pageId || ''}`);
  const res = await url.json();
  const data = res.results.map(apiVehicleMapper);
  console.log(data);
  return data;
};

export const fetchVehicleSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/vehicles/${params.id}`);
  const res = await url.json();
  const data = apiVehicleMapper(res);
  return data;
};

const html = document.createElement