<template>
  <div class="service-catalog">
    <div class="text-32 font-bold">Service Hub</div>
    <div class="text-16/24">Organize services, manage and track versioning and API service documentation. <a href="#">Learn more</a></div>

    <service-catalog-list></service-catalog-list>
    <!-- <input v-model="searchQuery" class="search-input" placeholder="Search services"> -->
    <!-- <ul class="catalog">
      <li v-for="service in services" :key="service.id" class="service">
        <div>
          <p>
            {{ service.name }}
          </p>
          <p>{{ service.description }}</p>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// components
import ServiceCatalogList from './ServiceCatalogList.vue'

export default defineComponent({
  name: 'ServiceCatalog',
  components: {
    ServiceCatalogList,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.service-catalog {
  max-width: 1366px;
  margin: 2rem auto;
  padding: 0 20px;
}

.catalog {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  list-style: none;
}

.service {
  width: 200px;
  margin: 6px;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 8px 16px;

  p:first-of-type {
    color: #333;
    font-weight: 700;
  }

  p {
    color: #666;
  }
}

input {
  padding: 8px 4px;
}
</style>
