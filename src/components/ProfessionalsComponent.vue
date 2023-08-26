<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-file-person me-2"></i>Professionals</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'nurses' } }"
              >Nurses</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'rescuers' } }"
              >Rescuers</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'doctors' } }"
              >Doctors</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span><router-view name="professionals" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalsComponent",
};
</script>
