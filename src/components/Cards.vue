<template>
  <div class="grid">
    <Card
      v-for="edge in $static.allProduct.edges"
      :key="edge.node.id"
      :imageUrl="edge.node.images.small"
      :title="edge.node.name"
      :description="edge.node.description.short"
      :price="edge.node.price"
    />
  </div>
</template>
<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2% 4%;
    margin: auto;
}
</style>
<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  }
};
</script>
<static-query>
{
    allProduct { 
     edges {
      node {
        id
        name
        images {
          small
        }
        description {
          short
        }
      }
    } 
    }
}
</static-query>