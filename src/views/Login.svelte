<script>
  import { useNavigate } from "svelte-navigator";
  import { auth } from '../firebase';
  import { user } from "../stores";

  const navigate = useNavigate();

  let username;
  let password;

  const handleSubmit = () => {
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
          console.log({ userCredential });
          $user = { username, password };
          navigate("/home", { replace: true });
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log({ error });
      });
  }
</script>

<h3>Login</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input
    bind:value={username}
    type="text"
    name="username"
    placeholder="Username"
  />
  <br />
  <input
    bind:value={password}
    type="password"
    name="password"
    placeholder="Password"
  />
  <br />
  <button type="submit">Login</button>
</form>
