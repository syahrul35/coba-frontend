<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '~/composables/useApi';

const { fetchItems, createItem, updateItem, deleteItem } = useApi();
const items = ref([]);
const newItem = ref({ name: '', description: '' });

onMounted(async () => {
    items.value = await fetchItems();
});

const addItem = async () => {
    const addedItem = await createItem(newItem.value);
    items.value.push(addedItem);
    newItem.value = { name: '', description: '' };
};

const removeItem = async (id) => {
    await deleteItem(id);
    items.value = items.value.filter(item => item._id !== id);
};
</script>

<template>
    <div class="container">
        <h1>CRUD Nuxt.js + Express.js</h1>

        <input v-model="newItem.name" placeholder="Nama Item" />
        <input v-model="newItem.description" placeholder="Deskripsi" />
        <button @click="addItem">Tambah</button>

        <ul>
            <li v-for="item in items" :key="item._id">
                {{ item.name }} - {{ item.description }}
                <button @click="removeItem(item._id)">Hapus</button>
            </li>
        </ul>
    </div>
</template>

<style>
.container { max-width: 600px; margin: auto; text-align: center; }
input { display: block; margin: 5px auto; padding: 5px; }
button { margin: 5px; padding: 5px; cursor: pointer; }
</style>