<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  let vh = 0
  const tinggiFull = () => {
  	vh = window.innerHeight * 0.01
  	document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  tinggiFull()
  window.addEventListener("resize", tinggiFull)
</script>
<Router {routes}/>
