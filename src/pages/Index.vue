<template>
  <Layout>
    <div class="bubble">
      <h1 class="title">Never sleep again</h1>
      <h2 class="subtitle">With our custom-made digital ghost replicas</h2>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
@use '~/theme.scss';

.bubble {
  border: 1px solid #c9d4fa;
  border-radius: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 494px;
  margin: 0 auto;
  width: 93%;
}

</style>
