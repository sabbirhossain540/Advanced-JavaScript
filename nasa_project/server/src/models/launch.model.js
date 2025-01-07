const launches = new Map();
const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket: 'Explorar ISI',
    launchDate: new Date('December 17, 2030'),
    destination: 'Keplear-442 b',
    customer: ['MSD', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
};