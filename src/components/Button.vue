<template>
  <v-btn text large @click="click" :color="color" style="margin: 3px 0">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonVue',
  props: {
    color: {
      type: String,
      default: () => 'primary'
    },
    click: Function
  }
}
</script>

<style>

</style>