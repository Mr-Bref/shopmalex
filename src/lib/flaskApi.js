export const loadData = async (dataset, features, algorithm = 'content-based') => {
    try {
        const response = await fetch('http://localhost:5000/load_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dataset,
                features,
                algorithm,
            }),
        });
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
};

export async function fetchRecommendations(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} Message ${data.error}`);
        }

        return data;
    } catch (error) {
        console.error('Error fetching recommendations:', error.message);
        // Handle error appropriately, e.g., show error message to user
        throw error; // Rethrow the error to propagate it further if needed
    }
}