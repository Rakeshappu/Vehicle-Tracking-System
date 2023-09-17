// Initialize Google Maps
function initMap() {
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const apiKey = 'AIzaSyBljewomeyAcDWwTLgoD_mxYqjUipNp1lM';

    // Create a map instance centered on a specific location
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12.5218, lng: 76.8951 }, // Replace with initial map coordinates
        zoom: 12, // Adjust the initial zoom level
    });

    // Add a traffic layer to display real-time traffic information
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    // Call a function to add markers for bus stops
    addBusStops(map);
}

// Function to add markers for bus stops
function addBusStops(map) {
    // Replace with actual bus stop coordinates and information
    const busStops = [
        { lat: 12.5286, lng: 76.9013, name: 'Bus Stop 1' },
        { lat: 0, lng: 0, name: 'Bus Stop 2' },
        // Add more bus stop data as needed
    ];

    // Create markers for each bus stop
    busStops.forEach((busStop) => {
        const marker = new google.maps.Marker({
            position: { lat: busStop.lat, lng: busStop.lng },
            map: map,
            title: busStop.name,
        });

        // Add an info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${busStop.name}</h3>`, // Customize content as needed
        });

        // Open the info window when a user clicks on a marker
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Initialize the map when the page loads
google.maps.event.addDomListener(window, 'load', initMap);

// Add your custom JavaScript functionality for user interactions here



const states = ['Karnataka']; // Array of states
const districtStateMap = {'Bagalkot':'Karnataka', 'Ballari (Bellary)':'Karnataka', 'Belagavi (Belgaum)':'Karnataka', 'Bengaluru_Rural':'Karnataka', 'Bengaluru_Urban':'Karnataka', 'Bidar':'Karnataka', 'Chamarajanagar':'Karnataka', 'Chikballapur':'Karnataka', 'Chikkamagaluru (Chikmagalur)':'Karnataka', 'Chitradurga':'Karnataka', 'DakshinaKannada':'Karnataka', 'Davanagere':'Karnataka', 'Dharwad':'Karnataka', 'Gadag':'Karnataka', 'Hassan':'Karnataka', 'Haveri':'Karnataka', 'Kalaburagi (Gulbarga)':'Karnataka', 'Kodagu (Coorg)':'Karnataka', 'Kolar':'Karnataka', 'Koppal':'Karnataka', 'Mandya':'Karnataka', 'Mysuru (Mysore)':'Karnataka', 'Raichur':'Karnataka', 'Ramanagara':'Karnataka', 'Shivamogga (Shimoga)':'Karnataka', 'Tumakuru (Tumkur)':'Karnataka', 'Udupi':'Karnataka', 'UttaraKannada (Karwar)':'Karnataka', 'Vijayapura (Bijapur)':'Karnataka', 'Yadgir':'Karnataka'}; // Array of districts
const citiesStateMap = {'Kollegal':'Chamarajnagar', 'Hanur':'Chamarajnagar', 'Chamarajnagar':'Chamarajnagar', 'Yellandur':'Chamarajnagar', 'Gundalpet':'Chamarajnagar'}; // Array of cities
const busStops = {'Kollegal_bus_stop':'Chamarajnagar', 'Hanur_bus_stop':'Chamarajnagar', 'Chamarajnagar_bus_stop':'Chamarajnagar', 'Yellandur_bus_stop':'Chamarajnagar', 'Gundalpet_bus_stop':'Chamarajnagar'}; // Array of bus stops

const stateSelect = document.getElementById('state-select');
const districtSelect = document.getElementById('district-select');
const citySelect = document.getElementById('city-select');
const busStopSelect = document.getElementById('bus-stop-select');
const searchButton = document.getElementById('search-button');

// Populate the state dropdown
states.forEach((state) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// Event listener for state selection
stateSelect.addEventListener('change', () => {
    // Enable the district dropdown and populate it based on the selected state
    districtSelect.disabled = false;
    districtSelect.innerHTML = '<option value="">-- Select District --</option>';
    const selectedState = stateSelect.value;

    // Filter districts based on the selected state
    for (const district in districtStateMap) {
        if (districtStateMap[district] === selectedState) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        }
    }
    
    for (const cities in citiesStateMap) {
        if (citiesStateMap[cities] === selectedState) {
            const option = document.createElement('option');
            option.value = cities;
            option.textContent = cities;
            citySelect.appendChild(option);
        }
    }



    // Disable and reset city, bus stop dropdowns, and search button
    citySelect.disabled = true;
    busStopSelect.disabled = true;
    searchButton.disabled = true;
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    busStopSelect.innerHTML = '<option value="">-- Select Bus Stop --</option>';
});

// Event listener for district selection
districtSelect.addEventListener('change', () => {
    // Enable the city dropdown and populate it based on the selected district
    citySelect.disabled = false;
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    const selectedDistrict = districtSelect.value;

    // Filter cities based on the selected district
    // Modify this part based on your data structure for cities
    // You might need to create a mapping similar to districtStateMap for cities
    // Example: const cityDistrictMap = { 'Kollegal': 'Chamarajnagar', ... };
    // Then, you can use cityDistrictMap[selectedCity] to get the district for the selected city
    // and filter the cities accordingly.
    
    // Disable and reset bus stop dropdown and search button
    busStopSelect.disabled = true;
    searchButton.disabled = true;
    busStopSelect.innerHTML = '<option value="">-- Select Bus Stop --</option>';
});

// Event listener for city selection

// Event listener for bus stop selection

// Event listener for search button (trigger the search based on selections)
searchButton.addEventListener('click', () => {
    // Implement the search logic and display bus information
});
// JavaScript code for populating dropdowns and handling user interactions

document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state-select');
    const districtSelect = document.getElementById('district-select');
    const citySelect = document.getElementById('city-select');
    const busStopSelect = document.getElementById('bus-stop-select');
    const searchButton = document.getElementById('search-button');
    const mapContainer = document.getElementById('map');
    const busInfoContainer = document.getElementById('bus-info');

    // Simulated real-time bus data (replace with actual data from an API)
    const busData = [
        { busNumber: 'Bus 1', currentLocation: { lat: 12.9716, lng: 77.5946 }, estimatedArrival: '5 mins' },
        { busNumber: 'Bus 2', currentLocation: { lat: 12.9602, lng: 77.6255 }, estimatedArrival: '8 mins' },
        // Add more bus data here
    ];

    // Event listener for search button
    searchButton.addEventListener('click', () => {
        const selectedBusStop = busStopSelect.value;

        // Filter bus data for the selected bus stop
        const bus = busData.find(bus => bus.busStop === selectedBusStop);

        if (bus) {
            // Display bus information on the map and bus info container
            displayBusOnMap(bus);
            displayBusInfo(bus);
        } else {
            // Handle the case where no bus data is available for the selected stop
            clearMap();
            busInfoContainer.innerHTML = 'No bus information available for this stop.';
        }
    });

    // Function to display bus information on the map
    function displayBusOnMap(bus) {
        // Simulate adding a marker for the bus on a map (replace with actual map integration)
        const mapUrl = `https://maps.google.com/maps?q=${bus.currentLocation.lat},${bus.currentLocation.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        mapContainer.innerHTML = `<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${mapUrl}"></iframe>`;
    }

    // Function to display bus information in the bus info container
    function displayBusInfo(bus) {
        const busInfoHTML = `
            <h2>${bus.busNumber}</h2>
            <p>Estimated Arrival: ${bus.estimatedArrival}</p>
        `;
        busInfoContainer.innerHTML = busInfoHTML;
    }

    // Function to clear the map and bus info container
    function clearMap() {
        mapContainer.innerHTML = '';
        busInfoContainer.innerHTML = '';
    }

    // Populate states dropdown (You can replace this with actual data)
    const states = ['Karnataka'];
    states.forEach((state) => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // Add logic to populate districts, cities, and bus stops dynamically
    // Add logic for enabling/disabling dropdowns based on selections
});
