<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>Team Configuration</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <p>Nurse:</p>
        <p>Rescuer:</p>
        <p>Doctor:</p>
        <p>Car:</p>
        <p>Phone:</p>
        <p>Resuscitation kit:</p>
      </div>
      <div class="col-12 col-md-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulances/undefined.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Set up team</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamConfigurationComponent",
};
</script>
