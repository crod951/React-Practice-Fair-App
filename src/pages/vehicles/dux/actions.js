export const GET_VEHICLES = "vehicles get-vehicles"
export const RECEIVED_VEHICLES = "vehciles received-vehicles"

export function getVehicles() {
  return function(dispatch) {
    dispatch({ type: GET_VEHICLES });
    fetch("https://private-f14e4-interviewapi3.apiary-mock.com/vehicles?page=1")
      .then((response) => response.json())
      .then((vehicles) => dispatch({ type: RECEIVED_VEHICLES, vehicles: vehicles.data.vehicles }));
  }
}
