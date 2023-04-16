<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Processos prontos (aguardando execução)</h3>
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-data-table
        no-data-text="Adicione processos para vê-los aqui."
        :headers="headers"
        :items="processes"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    processes: Array
  },
  computed: {
    headers () {
      return [
        { text: 'Nome', value: 'name' },
        { text: 'Duração', value: 'duration' },
        { text: 'Tempo restante', value: 'remaining_time' },
        { text: 'Hora chegada', value: 'created_at' }
      ]
    }
  }
}
</script>

<style>

</style>