<template>
    <div>
        <h1>{{ task.label }}</h1>
        <div>
            <input type="text" v-model="task.label">
        </div>
        <div>
            <v-select v-model="task.status" :options="['one of done', 'cancel', 'new']"></v-select>
        </div>
        <button @click.stop="update">Редактировать</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return{
            task: {
                id: Date.now(),
                label: "",
                status: "",
                created_at: Date()
            },
        }
    },
    methods: {
        ...mapMutations({
            updateTask: 'updateTask'
        }),
        update(){
            this.updateTask(this.task);
            this.$router.push('/')
        }          
    },
    mounted() {
        let t = this.tasks.filter(item => item.id == this.$route.params.id)[0];
        this.task = {...t};        
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks,
        })
    },
}
</script>