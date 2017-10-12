<template>
  <div>
    <h1>{{title}}</h1>
    <ul v-for="item in appointments">
      <li>{{item.name}}</li>
    </ul>
    

    
  </div>
</template>

<script>
var appts = [
      {"name":"Spot","owner":"Bob Cobb","appDate":"2017-7-24 8:30","appNotes":"Nice dog to meet"},
      {"name":"Hector","owner":"Hal Hope","appDate":"2017-7-29 2:00","appNotes":"Has long hair"},
      {"name":"Sam","owner":"Kal Kool","appDate":"2017-8-02 12:00","appNotes":"Likes to play with a ball"},
      {"name":"Doggie","owner":"Jim Jupe","appDate":"2017-8-06 4:30","appNotes":"Needs a bath"}
    ]

export default {
  name: "MainApp",
  data() {
    return {
      title: "Appointments",
      appointments: appts
    }
  }  
}
</script>