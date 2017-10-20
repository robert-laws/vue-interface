<template>
  <div id='main-app'>
    <ul class='appointment-list' v-for="(item, i) in theAppointments" :key="i">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainApp",
  data() {
    return {
      theAppointments: []
    }
  },
  created: function() {
    $.getJSON('./builds/appointments.json')
      .done( info => {
        this.theAppointments = info
      })
  }
}
</script>

<style scoped>
  .appointment-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin: 10px 5%;
    font-size: 1.7rem;
  }
</style>