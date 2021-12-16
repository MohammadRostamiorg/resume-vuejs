<template>
  <div id="projects">
    <h2>پروژه ها</h2>
    <div class="row">
      <h4>password manager</h4>
      <p class="project-about">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <span style="font-size: 1.4rem;margin-bottom:10px">لینک : </span>

      <br>
      <a style="color: #0000ff;text-decoration : none;" href="http://github.com">github</a>
      
    </div>
    <div class="row">
      <h4>Basketshop</h4>
      <p class="project-about">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <span style="font-size: 1.4rem;margin-bottom:10px">لینک : </span>

      <br>
      <a style="color: #0000ff;text-decoration : none;" href="http://github.com">github</a>
      
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    document.body.className = "projects";
  },
};
</script>

<style>
#nav-about-li a {
  color: white !important;
}
</style>
