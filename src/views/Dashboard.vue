<template>
  <v-container style="padding: 60px 0">
    <v-row>
      <h2>Exemplo de funcionamento do escalonamento SRTF</h2>
    </v-row>
    <v-divider style="margin: 40px 0" />
    <v-row>
      <v-col cols="4" style="display: flex; flex-direction: column;">
        <Button :click="addProcess">Adicionar Processo</Button>
        <Button v-if="!is_processing" color="success" :click="startProcessing">Iniciar Simulação</Button>
        <Button v-else color="error" :click="stopProcessing">Pausar simulação</Button>

        <RunningProcessDetails :process="next" :is_processing="is_processing" style="margin-top: 33px;" />
      </v-col>
      <v-divider vertical style="margin: 0 20px"/>
      <v-col cols="7">
        <BarChart :processes="processes"/>
      </v-col>
    </v-row>
    <v-divider style="margin: 20px 0" />
    <v-row>
      <v-col>
        <ProcessesList :processes="processes" />
      </v-col>
      <v-divider vertical style="margin: 0 20px" />
      <v-col>
        <FinishedProcessesList :finished_processes="finished_processes" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Button from '@/components/Button.vue'
import BarChart from '@/components/BarChart.vue'
import RunningProcessDetails from '@/components/RunningProcessDetails.vue'
import ProcessesList from '@/components/ProcessesList.vue'
import FinishedProcessesList from '@/components/FinishedProcessesList.vue'

export default {
  name: 'DashboardVue',
  components: {
    Button,
    BarChart,
    RunningProcessDetails,
    ProcessesList,
    FinishedProcessesList
  },
  data: () => ({
    processes: [],
    finished_processes: [],
    running_process: undefined,
    next: undefined,
    scheduler: undefined,
    is_processing: false
  }),
  watch: {
    processes () {
      if (this.processes.length > 0) {
        this.selectShortestRemainingTimeProcess()
      } else {
        this.stopProcessing()
        this.clearState()
      }
    }
  },
  methods: {
    addProcess () {
      let name = 'Processo ' + (this.processes.length + 1)
      let duration = Math.floor(Math.random() * 18) + 2;
      let remaining_time = duration
      let created_at = (new Date()).toLocaleTimeString()

      this.processes.push(
        { name, duration, remaining_time, created_at }
      )
    },
    startProcessing () {
      if (this.processes.length === 0) {
        this.$toast('Adicione um processo primeiro!')
        return
      }
      this.is_processing = true

      this.scheduler = setInterval(() => {
        this.running_process = this.next
        this.runNextInstruction()

        if (this.running_process.remaining_time === 0) {
          this.finishProcess()
        }
      }, 1000)
    },
    stopProcessing () {
      this.is_processing = false
      clearInterval(this.scheduler)
    },
    selectShortestRemainingTimeProcess () {
      let shortestRemainingTimeProcess = this.processes.reduce(
        (previous, current) => previous.remaining_time <= current.remaining_time ? previous : current
      )

      this.next = shortestRemainingTimeProcess
    },
    runNextInstruction () {
      this.running_process.remaining_time--
    },
    finishProcess () {
      this.processes = this.processes.filter(process => process.name !== this.running_process.name)
      this.finished_processes.push({ ...this.running_process, finished_at: (new Date()).toLocaleTimeString() })
      this.running_process = undefined
    },
    clearState () {
      this.next = undefined
      this.running_process = undefined
    }
  }
}
</script>

<style>

</style>