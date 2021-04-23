<script>
  import { Router, Route } from "svelte-navigator";
  import { NavBarMenu } from './routes/navbar-menu'
  import { user } from './stores';
  import Navbar from './components/Navbar/navbar.svelte'
  import PrivateRoute from "./middleware/PrivateRoute.svelte";
  import Login from "./views/Login.svelte";
  import Home from "./views/Home.svelte";
  import About from "./views/About.svelte";
  import Profile from "./views/Profile.svelte";
</script>

<style>
  main {
    margin: 0 90px;
  }
</style>

<Router>
  {#if $user}
    <Navbar menu={NavBarMenu} />
  {/if}

  <main id="main-router-body">
    <Route path="/">
      <Login />
    </Route>

    <PrivateRoute path="home">
      <Home />
    </PrivateRoute>

    <PrivateRoute path="about">
      <About />
    </PrivateRoute>

    <PrivateRoute path="profile" let:location>
      <Profile />
    </PrivateRoute>
  </main>
</Router>
