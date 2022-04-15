const getNearestRides = (rides, station_code) => {
  if (rides.length === 0) return [];
  const newRides = [...rides];

  newRides.sort(function (ride1, ride2) {
    var d1 = 1000000,
      d2 = 1000000;

    for (let i = 0; i < ride1.station_path.length; i++) {
      d1 = Math.min(d1, Math.abs(ride1.station_path[i] - station_code));
    }
    for (let i = 0; i < ride2.station_path.length; i++) {
      d2 = Math.min(d2, Math.abs(ride2.station_path[i] - station_code));
    }

    if (d1 < d2) return -1;
    if (d1 > d2) return 1;
    return 0;
  });
  return newRides;
};
const getUpcomingRides = (rides, station_code) => {
  if (rides.length === 0) return [];
  const newRides = rides.filter((ride) => {
    return new Date(ride.date) - new Date() > 0;
  });

  newRides.sort(function (ride1, ride2) {
    if (new Date(ride1.date) < new Date(ride2.date)) return -1;
    if (new Date(ride1.date) > new Date(ride2.date)) return 1;
    return 0;
  });

  return newRides;
};

const getPastRides = (rides, station_code) => {
  if (rides.length === 0) return [];
  const newRides = rides.filter((ride) => {
    return new Date(ride.date) - new Date() < 0;
  });
  newRides.sort(function (ride1, ride2) {
    if (new Date(ride1.date) < new Date(ride2.date)) return 1;
    if (new Date(ride1.date) > new Date(ride2.date)) return -1;
    return 0;
  });
  return newRides;
};

export { getNearestRides, getUpcomingRides, getPastRides };
