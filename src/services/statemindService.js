export const fetchProjects = async () => {
  try {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://statemind.io/projects.json"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch projects. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    throw error;
  }
};
