<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-bag me-2"></i>Devices</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'devices', params: { type: 'cars' } }"
              >Cars</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'devices', params: { type: 'phones' } }"
              >Phones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{
                name: 'devices',
                params: { type: 'resuscitation-kits' },
              }"
              >Resuscitation kits</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span><router-view name="devices" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevicesComponent",
};
</script>
