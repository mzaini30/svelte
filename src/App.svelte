<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
    import Notifications from 'svelte-notifications'
    import 'windi.css'
</script>

<Notifications>
    <Router {routes}/>
</Notifications>

<style lang="scss">
  :global {
    .notifications {
        z-index: 100000000;
        position: relative;
    }
    .notification {
        box-shadow: 0 0 5px 0 gray !important;
    }
  }
</style>
