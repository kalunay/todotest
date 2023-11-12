<template>
    <div>
        <TaskView v-for="task in tasks" :task="task" :key="task.id" @remove="removeTask" />
        <router-link to="/add" class="btn-add">Добавить</router-link>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TaskView from '@/components/TaskView.vue'
export default {
    components: {
        TaskView
    },
    methods: {
        ...mapMutations({
            removeTasks: 'removeTasks'
        }),
        removeTask(task){
            this.removeTasks(task);
        }
    },
    mounted() {
        //this.setTasks();        
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks,
        })
    },
}
</script>

<style>
.btn-add {
    border: none;
    color: #fff;
    background-color: #198754;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 10px;
    margin-top: 10px;
}
</style>