<template>
  <div>

      <!-- <NuxtPage></NuxtPage> -->

        <quill-editor ref="editor" theme="snow" v-model:content="htmlMessage" toolbar="essential"
          content-type="html"></quill-editor>
          <div v-html="htmlMessage"></div>


  </div>
  <input type="date" placeholder="YYYY-MM-DD">
</template>

<script setup>
// import { ClientOnly } from '#build/components';
const htmlMessage = ref('');
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>



