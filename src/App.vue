<template>
  <barra-navegacao v-model:navegar="rota"></barra-navegacao>
  <div class="container mt-3">
    <component :is="rota"></component>
  </div>
</template>

<script>
  import BarraNavegacao from '@/components/BarraNavegacao.vue'
  import TarefasRouter from '@/rotas/TarefasRouter.vue'
  import ConfiguracoesRouter from '@/rotas/ConfiguracoesRouter.vue'
  import SobreRouter from '@/rotas/SobreRouter.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacao,
    TarefasRouter,
    ConfiguracoesRouter,
    SobreRouter
  },
  data: () => ({
    rota: "TarefasRouter"
  })
}
</script>

<style>
#app {

}
</style>
