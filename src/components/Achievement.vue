<template>
  <div id="achievement">
    <h2>گواهی ها</h2>
    <div id="evidence">
      <div class="row">
        <h4>php</h4>
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
        <h4>javascript</h4>
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

    <hr />
    <h2>جایزه ها</h2>
    <div id="awards">
      <div class="row">
        <h4>quera.ir</h4>
        <p class="project-about">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <span style="font-size: 1.4rem; margin-bottom: 10px">لینک : </span>

        <br />
        <a style="color: #0000ff; text-decoration: none" href="http:/quera.ir"
          >github</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    document.body.className = "achievement";
  },
};
</script>

<style>
#nav-about-li a {
  color: white !important;
}
</style>
