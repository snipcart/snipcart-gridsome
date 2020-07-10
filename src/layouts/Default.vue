<template>
  <div class="wrapper">
    <header class="header">
      <nav class="nav">
        <g-link class="nav-link" :class="isCurrentRoute('/')? 'underlined' : ''" to="/">Home</g-link>
        <g-link
          class="nav-link"
          :class="isCurrentRoute('/products/')? 'underlined' : ''"
          to="/products/"
        >Products</g-link>
      </nav>
      <nav class="nav">
        <g-link class="nav-link" to="/">
          <ProfileLogo />
        </g-link>
        <g-link class="nav-link">
            <CartLogo class="snipcart-checkout" />
        </g-link>
      </nav>
    </header>
    <div>
      <slot />
      <div
        id="snipcart"
        data-api-key="MzEyY2MxODctNmM2Yi00NTVkLWFhZTAtNDRlNDdjMDY5MzFmNjM3Mjk5MzE0ODM3NTc1MzA3"
        hidden
      ></div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "~/theme/_main.scss";

html,
body {
  background: $primary-color;
  background: $background-gradient;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.wrapper {
  height: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.nav {
  margin: 26px 0;
}

.nav-link {
  color: $custom-white;
  font-family: $primary-font;
  font-style: normal;
  font-size: 17px;
  font-weight: $normal-font-weight;
  line-height: 36px;
  margin: 34px;
  text-decoration: none;
}

.nav-link:hover {
  color: $accent-color;
  fill: $accent-color;
}

.underlined {
  border-bottom: 4px solid $accent-color;
}
</style>

<script>
import CartLogo from "~/assets/cart.svg";
import ProfileLogo from "~/assets/profile.svg";

export default {
  components: {
    CartLogo,
    ProfileLogo
  },
  data: function() {
    return {
      currentRoute: ""
    };
  },
  methods: {
    isCurrentRoute: function(route) {
      return this.$route.fullPath === route;
    }
  },
  created: function() {
    this.activeTab = this.$route;
  }
};
</script>