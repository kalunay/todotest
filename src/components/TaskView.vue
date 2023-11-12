<template>
    <div class="tasks__item">
        <div class="tasks__item-header">{{ task.label }}</div>
        <div class="tasks__item-status">{{ task.status }}</div>
        <div class="tasks__item-btns">
            <button @click.prevent="$emit('remove', task)">Удалить</button>
            <button @click="$router.push(`/task/${task.id}`)">Редактировать</button>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.tasks__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    background-color: #eee;
    padding: 5px;
    align-items: center;
}
.tasks__item-header {
    font-weight: bold;
    font-size: 18px;
}
.tasks__item-status {
    background-color: #f8f9fa;
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
}
.tasks__item-btns button {
    display: inline-block;
    padding: 5px 10px;
    margin-right: 10px;
    background-color: #0d6efd;
    color: #fff;
    border-radius: 5px;
    border: none;
}
.tasks__item-btns button:first-child {
    background-color: #dc3545;
}
</style>