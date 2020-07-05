<template>
  <div class="card">
      <g-image src="~/assets/ghosts/small/blinky.png" />
      <h3 class="card-title">Blinky</h3>
      <p class="card-description">Pack leader</p>
      <p class="card-price">$1337</p>
      <button class="cta-button-theme card-cta-button-layout">Add to cart</button>
  </div>
</template>
<style lang="scss">
@import "~/_theme.scss";

.card {
    background-color: $primary-color;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(103, 100, 100, 0.25);
    /* layout rules */
    height: 364px;
    width: 270px;
    /* flex rules */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card-title {
    color: $custom-white;
    font-family: $primary-font;
    font-size: 34px;
    font-weight: $header-font-weight;
    line-height: 49px;
}

.card-description {
    color: $custom-white;
    font-family: $secondary-font;
    font-size: 18px;
    font-weight: $normal-font-weight;
    line-height: 25px;

}

.card-price {
    color: $custom-white;
    font-family: $secondary-font;
    font-size: 26px;
    font-weight: $normal-font-weight;
    line-height: 35px;
    margin-bottom: 8px;
}

.card-cta-button-layout {
  font-size: 26px;
  height: 45px;
  width: 206px;
}
</style>