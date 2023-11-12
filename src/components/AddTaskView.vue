<template>
    <div>
        <h1>Добавить задачу</h1>
            <div>
                <input type="text" v-model="task.label">
            </div>
            <div>
                <v-select v-model="task.status" :options="['one of done', 'cancel', 'new']"></v-select>
            </div>
            <button @click.stop="addTask">Добавить</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            task: {
                id: Date.now(),
                label: "",
                status: "",
                created_at: Date()
            },
        };
    },
    methods: {
        ...mapMutations({
            setTasks: 'setTasks'
        }),
        addTask(){
            if(this.task.label.length > 6 && this.task.status.length > 0){
                this.setTasks(this.task);
                this.$router.push('/');
            }
        }        
    }
}
</script>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    border: #ddd solid 1px;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 10px auto;
}
button {
    border: none;
    background-color: #ff0051;
    margin-top: 10px;
    padding: 5px 10px;
    color: #fff;
    border-radius: 10px;
}
</style>