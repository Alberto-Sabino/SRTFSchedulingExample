<template>
  <Bar
    id="process-time-bar-chart"
    :options="getChartOptions"
    :data="getChartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    processes: Array
  },
  computed: {
    getChartData () {
      let labels = []
      let data = []
      let backgroundColor = []

      this.processes.map(process => {
        labels.push(process.name)
        data.push(process.remaining_time)

        // random color
        backgroundColor.push('#' + Math.floor(Math.random() * 16777215).toString(16))
      })

      return {
        labels,
        datasets: [
          {
            label: 'Tempo restante',
            backgroundColor,
            data
          }
        ]
      }
    },
    getChartOptions () {
      return {
        responsive: true
      }
    }
  }
}
</script>