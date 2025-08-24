<template>
  <section class="home">
    <div class="hero">
      <h1>Stay on top of your work</h1>
      <p>Simple, fast task management—create tasks, track progress, and hit deadlines.</p>
      <div class="actions">
        <RouterLink to="/tasks" class="btn primary">Go to Tasks</RouterLink>
        <RouterLink to="/about" class="btn ghost">About</RouterLink>
      </div>
    </div>

    <div class="cards">
      <article class="card">
        <h3>Create & Assign</h3>
        <p>Add tasks with priority, due dates, and assignees.</p>
      </article>
      <article class="card">
        <h3>Track Progress</h3>
        <p>Update status and % complete at a glance.</p>
      </article>
      <article class="card">
        <h3>Stay Notified</h3>
        <p>See what needs your attention first.</p>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home { max-width:1100px; margin:0 auto; padding:32px 16px; }
.hero { text-align:center; margin-bottom:32px; }
.hero h1 { font-size:2.25rem; margin-bottom:10px; }
.hero p { color:#555; max-width:680px; margin:0 auto 18px; }
.actions { display:flex; justify-content:center; gap:12px; }
.btn { padding:10px 16px; border-radius:8px; text-decoration:none; border:1px solid #ccc; font-weight:500; }
.btn.primary { background:#111; color:#fff; border-color:#111; }
.btn.ghost { background:#fff; color:#111; }
.cards { display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; }
.card { border:1px solid #eee; border-radius:10px; padding:16px; background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.05); }
</style>
