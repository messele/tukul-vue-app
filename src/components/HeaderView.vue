<template>
  <header
    class="fixed flex flex-start bg-slate-600 text-2xl text-green-50 p-4 m-2 rounded-md drop-shadow-md"
  >
    <div id="logo" class="m-auto ml-14">
      <RouterLink to="/">Tukul llc</RouterLink>
    </div>
    <nav class="m-auto border-l-slate-100">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-color: rgb(243 244 246 / var(--tw-text-opacity, 1));
  border-left: 1px solid;
  user-select: none;
}

ul {
  display: flex;
}
li {
  list-style: none;
}
nav a.router-link-exact-active {
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
nav a.router-link-exact-active:hover {
  color: rgb(22 163 74 / var(--tw-text-opacity, 1));
}

/* 

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}





@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  
}

#logo {
  padding-left: 10px;
  flex-grow: 1;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  background: #6666;
  padding: 10px;
  display: flex;
}

a:active {
  background: transparent;
}
li:hover {
  opacity: 0.8;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
