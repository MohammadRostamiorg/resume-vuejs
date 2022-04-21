<template>
  <div id="achievement">
    <h2>سابقه کار</h2>
    <div id="evidence">
      <div class="row">
        <h4>هجرینو</h4>
        <p class="project-about">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <span style="font-size: 1.4rem; margin-bottom: 10px">لینک : </span>

        <br />
        <a
          style="color: #0000ff; text-decoration: none"
          href="http:/w3schools.com"
          >github</a
        >
      </div>
      <div class="row">
        <h4>دیجیکالا</h4>
        <p class="project-about">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <span style="font-size: 1.4rem; margin-bottom: 10px">لینک : </span>

        <br />
        <a
          style="color: #0000ff; text-decoration: none"
          href="http://w3schools.com"
          >github</a
        >
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    document.body.className = "experience";
  },
};
</script>

<style>
#nav-about-li a {
  color: white !important;
}
</style>
