<script>
  import { Input, Label, Button, Helper } from "flowbite-svelte";
  import { generateKey, isValid } from "./library/generateKey";

  const routes = {};
  let userId = "";
  let hasil = "";

  let userIdCek = "";
  let kunciCek = "";
  let hasilCek = "";
</script>

<div class="p-5">
  <form on:submit|preventDefault={() => (hasil = generateKey(userId))}>
    <div class="gap-6 mb-6 flex flex-col">
      <div>
        <Label for="userId" class="mb-2">User ID</Label>
        <Input
          type="tel"
          bind:value={userId}
          id="userId"
          placeholder=""
          required
        />
      </div>
      <div>
        <Label for="hasil" class="mb-2">Hasil</Label>
        <Input
          type="text"
          id="hasil"
          bind:value={hasil}
          readonly
          placeholder=""
          required
        />
      </div>
      <div>
        <Button type="submit">Olah</Button>
      </div>
    </div>
  </form>
</div>
