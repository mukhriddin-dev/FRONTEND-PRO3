<template>
    <div class="extra">
      <h1>Extra 2</h1>
      <h1>{{$store.state}}</h1>
      <select @change="e=>$store.commit('toogleMode', e.target.value)">
        <option selected disabled >select mode</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <button @click="$store.commit('decrement')">DECR</button> 
      <button @click="$store.commit('increment')">INCR</button>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .extra{
      padding: 80px;
      border: 2px dashed black;
  }
  </style>
  