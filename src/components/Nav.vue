<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" :href="$baseUrl">
        Keeping Track of Hate Subreddits
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              :class="['nav-link', { active: $urlPathname === '/mgtow' }]"
              :href="$baseUrl + 'mgtow'"
            >
              MGTOW
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
