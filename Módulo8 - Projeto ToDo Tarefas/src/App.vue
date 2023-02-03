<template>
	<div id="app">
		<h1>Tarefas</h1>

		<ProgressBar :progress="progress"/>

		<Newtask @taskAdded="addTask"/>

		<TasksGrid :tasks="tasks"
		@taskDeleted="deleteTask"
		@taskStateChanged="toogleTaskState"/>
		
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import Newtask from './components/Newtask.vue';
import TasksGrid from './components/TasksGrid.vue';

export default {
	components: { ProgressBar, Newtask, TasksGrid },
	data(){
        return{
            tasks: []
        }
    },
	computed: {
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length

			return Math.round(done / total * 100 || 0)
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task){
			//verificar se já existe
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0 

			if(reallyNew){
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},

		deleteTask(i) {
			this.tasks.splice(i, 1)
		},

		toogleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		},
		created() {
			const json = localStorage.getItem('tasks')
			const array = JSON.parse(json)
			this.tasks = Array.isArray(array) ? array : []
		}
	}
	
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(90deg, rgba(50,176,255,1) 0%, rgba(173,53,255,1) 61%);
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 1em;
		font-weight: 300;
		font-size: 3rem;
		color: #fff;
	}
</style>
