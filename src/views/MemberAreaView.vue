<template>
    <div>
        <div v-for="(tax, index) in taxes" :key="index">
            <input v-model="taxes[index]" />
            <button type="number" @click="remove(index)">Remove</button>
        </div>
        <button type="number" @click="add">Add</button>
        <p>Count: {{ taxes.length }}</p>
    </div>
</template>

<script>0
export default {
    name: 'MemberArea',
    data() {
        return {
            taxes: [0]
        }
    },
    methods: {
        add() {
            this.taxes.push(0);
        },

        remove(index) {
            if (this.taxes.length > 1) {
                this.taxes.splice(index, 1);
            }
        }
    }
};
</script>