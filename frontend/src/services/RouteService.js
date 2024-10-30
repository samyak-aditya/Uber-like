const API_URL = process.env.REACT_APP_BACKEND_API_URL;

const RouteService = {
  getOptimizedRoute: async (driverLocation, destination) => {
    const response = await fetch(`${API_URL}/v1/optimize-route`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: driverLocation,
        end: destination,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch optimized route");
    }

    return response.json();
  },
};

export default RouteService;