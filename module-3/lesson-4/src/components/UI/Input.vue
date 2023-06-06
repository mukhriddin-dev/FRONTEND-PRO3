<template>
  <label :for="labelID">
    <p>{{lableText}}</p>
    <input :class="inputClass" :type="inputType" :id="labelID" :placeholder="inputPlaceholder" />
  </label>
</template>

<script>

export default {
  props:{
    lableText:String,
    labelID:String,
    inputClass:String,
    inputPlaceholder:String,
    inputType:String,
  }
};
</script>
<style lang="scss">
.form-input {
  padding: 12px;
  width: 300px;
  border: 1px solid #ccc;
}

label p {
  text-transform: uppercase;
  margin: 2px;

}
</style>
