<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ToDoList</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style="margin-left: auto">
        <a class="nav-link" :class="rota == 'TarefasRouter' ? 'active' : ''" aria-current="page" @click="navegar('TarefasRouter')">Tarefas</a>
        <a class="nav-link" :class="rota == 'ConfiguracoesRouter' ? 'active' : ''" @click="navegar('ConfiguracoesRouter')">Configurações</a>
        <a class="nav-link" :class="rota == 'SobreRouter' ? 'active' : ''" @click="navegar('SobreRouter')">Sobre</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default{
        name: "BarraNavegacao",
        data: () => ({
            rota: "TarefasRouter"
        }),
        methods: {
            navegar(rota){
                this.rota = rota
                this.$emit("update:navegar",rota)
            }
            
        }
    }
</script>

<style scoped>
    .nav-link:hover{
        cursor: pointer
    }
</style>
