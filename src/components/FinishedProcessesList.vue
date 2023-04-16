<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Processos finalizados</h3>
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-data-table
        no-data-text="Ainda não existem processos finalizados."
        :headers="headers"
        :items="finished_processes"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    finished_processes: Array
  },
  computed: {
    headers () {
      return [
        { text: 'Nome', value: 'name' },
        { text: 'Duração', value: 'duration' },
        { text: 'Hora chegada', value: 'created_at' },
        { text: 'Hora finalizado', value: 'finished_at' }
      ]
    }
  }
}
</script>