export const useApi = () => {
    const apiBase = 'https://coba-backend-production-b653.up.railway.app/api/items';

    const fetchItems = async () => {
        const response = await fetch(apiBase);
        return await response.json();
    };

    const createItem = async (item) => {
        const response = await fetch(apiBase, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });
        return await response.json();
    };

    const updateItem = async (id, item) => {
        const response = await fetch(`${apiBase}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });
        return await response.json();
    };

    const deleteItem = async (id) => {
        await fetch(`${apiBase}/${id}`, { method: "DELETE" });
    };

    return { fetchItems, createItem, updateItem, deleteItem };
};
