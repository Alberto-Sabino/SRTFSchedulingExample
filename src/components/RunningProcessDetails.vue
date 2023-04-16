<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ getTitle }}</h3>
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <div v-if="process">
        <div>
          <span class="property">Duração: </span>
          <span class="value">{{ process.duration }} segundos</span>
        </div>
        <div>
          <span class="property">Tempo restante: </span>
          <span class="value">{{ process.remaining_time }} segundos</span>
        </div>
        <div>
          <span class="property">Hora criação: </span>
          <span class="value">{{ process.created_at }}</span>
        </div>
      </div>
      <div v-else>
        <span>Adicione um processo para ver detalhes.</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RunningProcessDetailsVue',
  props: {
    process: Object,
    is_processing: Boolean
  },
  computed: {
    getTitle () {
      return (this.is_processing ? 'Em execução: ': 'Próximo: ') + (this.process?.name ?? 'desconhecido')
    }
  }
}
</script>

<style scoped>
  .property {
    font-size: 20px;
  }

  .value {
    color: #1976d2;
    font-size: 18px;
  }
</style>