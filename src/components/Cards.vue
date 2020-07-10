<template>
  <div class="grid">
    <Card
      v-for="edge in $static.allProduct.edges"
      :key="edge.node.id"
      :imageUrl="edge.node.images.small"
      :title="edge.node.name"
      :description="edge.node.description.short"
      :linkToProductPage="`/products/` + edge.node.id + `/`"
      :price="edge.node.price"
    />
  </div>
</template>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 184px);
  grid-gap: 2% 4%;
  margin: auto;
  align-items: center;
  justify-items: center;
  width: 100%;
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
    allProduct(sortBy: "id", order: ASC) { 
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
        price
      }
    } 
    }
}
</static-query>