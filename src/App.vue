<template>
  <ul id="navigation">
    <li id="nav-about-li">
      <router-link to="/About">
        <img src="./assets/images/nav-about-icon.png" alt="" srcset="" />
        <span> درباره </span>
      </router-link>
    </li>
    <li>
      <router-link to="/skills">
        <img src="./assets/images/nav-about-icon.png" alt="" srcset="" />
        <span> مهارت ها </span>
      </router-link>
    </li>
    <li>
      <router-link to="/Projects">
        <img src="./assets/images/nav-about-icon.png" alt="" srcset="" />
        <span>نمونه کار ها</span>
      </router-link>
    </li>
    <li>
      <router-link to="/Achievement">
        <img src="./assets/images/nav-about-icon.png" alt="" srcset="" />
        <span>دستاورد ها</span>
      </router-link>
    </li>
  </ul>
  <div id="main-info">
    <div id="main-info-images">
      <img src="./assets/images/main-info-banner.png" alt="" />
      <img src="./assets/images/avatar.jpg" alt="" />
    </div>
    <h2 id="name">جان اسمیت</h2>
    <p id="min-about">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است
    </p>
    <div id="main-info-social-icons">
      <a href="https://www.github.com/">
        <img src="./assets/images/github.png" alt="" srcset="" />
      </a>
    </div>
  </div>
  <div id="router-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
