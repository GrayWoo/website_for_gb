<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://w-dog.ru/wallpapers/9/13/470805443452221/pejzazh-gory-ozero-voda-gory-water-priroda-zimnie-sneg-derevya-kanada-ozera.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://w-dog.ru/wallpapers/9/13/470805443452221/pejzazh-gory-ozero-voda-gory-water-priroda-zimnie-sneg-derevya-kanada-ozera.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://w-dog.ru/wallpapers/9/13/470805443452221/pejzazh-gory-ozero-voda-gory-water-priroda-zimnie-sneg-derevya-kanada-ozera.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Preview extends Vue {}
</script>

<style scoped lang="scss"></style>
