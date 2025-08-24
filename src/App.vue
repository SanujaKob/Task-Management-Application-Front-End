<template>
  <div id="app">
    <!-- Top Navbar -->
    <header class="navbar">
      <div class="brand">ABACUS Task Management Application</div>
      <nav>
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/tasks" class="link">Tasks</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <small>© {{ new Date().getFullYear() }} ABACUS Consulting</small>
    </footer>
  </div>
</template>

<script setup>
// nothing here yet
</script>

<style scoped>
/* Layout */
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #fafafa;
  color: #111;
}

/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}
.brand {
  font-weight: 700;
  font-size: 1.1rem;
}
nav {
  display: flex;
  gap: 16px;
}
.link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.link.router-link-active {
  border-bottom: 2px solid #111;
  padding-bottom: 2px;
}

/* Main content */
.main {
  padding: 20px;
}

/* Footer */
.footer {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  background: #fff;
  text-align: center;
  color: #666;
}
</style>
