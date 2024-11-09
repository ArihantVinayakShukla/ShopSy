const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = await res.json();
        return shuffleArray(result);
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const result = await res.json();
        return result;
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        const filteredResults = result.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        return shuffleArray(filteredResults);
    },
};

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export { FakeStoreApi };
