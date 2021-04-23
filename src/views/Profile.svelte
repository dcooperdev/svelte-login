<script>
  import { user } from "../stores";

  function handleLogout() {
    $user = null;
  }
</script>

<h3>Welcome {$user.username}</h3>
<button on:click={handleLogout}>Logout</button>