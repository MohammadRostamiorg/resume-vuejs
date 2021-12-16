<template>
  <section id="skills">
    <h2>مهارت های اصلی</h2>
    <div id="main-skills-chart">
      <div class="row">
        <span class="skill-title"> HTML </span>
        <span class="skill-chart-parent">
          <span style="width: 90%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">2 تا 4 سال</span>
      </div>
      <div class="row">
        <span class="skill-title"> css </span>
        <span class="skill-chart-parent">
          <span style="width: 75%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">2 تا 4 سال</span>
      </div>
      <div class="row">
        <span class="skill-title"> javascript </span>
        <span class="skill-chart-parent">
          <span style="width: 40%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">2 تا 4 سال</span>
      </div>
      <div class="row">
        <span class="skill-title"> php </span>
        <span class="skill-chart-parent">
          <span style="width: 70%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">2 تا 4 سال</span>
      </div>
      <div class="row">
        <span class="skill-title"> laravel </span>
        <span class="skill-chart-parent">
          <span style="width: 30%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">کمتر از 1 سال</span>
      </div>
    </div>

    <hr />
    <h2>مهارت های فرعی</h2>
    <div id="sub-skills-chart">
      <div class="row">
        <span class="skill-title"> vuejs </span>
        <span class="skill-chart-parent">
          <span style="width: 15%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">کمتر از 1 سال</span>
      </div>
      <div class="row">
        <span class="skill-title"> bootstrap </span>
        <span class="skill-chart-parent">
          <span style="width: 65%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">1 تا 2 سال</span>
      </div>
    </div>

    <hr>
    <h2>
      زبان
    </h2>
    <div id="lang-skills-chart">

      <div class="row">
        <span class="skill-title"> ترکی </span>
        <span class="skill-chart-parent">
          <span style="width: 100%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">زبان مادری</span>
      </div>
      <div class="row">
        <span class="skill-title"> فارسی </span>
        <span class="skill-chart-parent">
          <span style="width: 100%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">زبان ملی</span>
      </div>
      <div class="row">
        <span class="skill-title"> انگلیسی </span>
        <span class="skill-chart-parent">
          <span style="width: 60%" class="skill-chart-child"> </span>
        </span>
        <span class="skill-description">متوسط</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate: function () {
    document.body.className = "skills";
  },
};
</script>

<style></style>
