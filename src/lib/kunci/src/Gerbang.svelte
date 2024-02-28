<script>
  import { Card, Label, Input, Button, Modal } from 'flowbite-svelte'
  import { generateRandomNumber, isValid } from './library/generateKey'

  export let namaAplikasi

  let kodeAktivasi = ''
  let clickOutsideModal = false
  let lulus = true
  // lulus = false;

  let userId = ''
  if (localStorage.getItem('userId')) {
    userId = localStorage.getItem('userId')
  } else {
    userId = generateRandomNumber().toString()
    localStorage.setItem('userId', userId)
  }

  if (!localStorage.kodeAktivasi) {
    localStorage.setItem('kodeAktivasi', '')
  }

  if (!localStorage.trialBerakhir) {
    // set sebagai 10 hari dari sekarang
    localStorage.setItem('trialBerakhir', new Date().setDate(new Date().getDate() + 10).toString())
  }

  if (+localStorage.trialBerakhir < new Date().getTime() && !isValid(localStorage.userId, localStorage.kodeAktivasi)) {
    lulus = false
  }

  function cekKodeAktivasi() {
    if (isValid(userId, kodeAktivasi)) {
      localStorage.setItem('kodeAktivasi', kodeAktivasi)
      lulus = true
    } else {
      clickOutsideModal = true
    }
  }
</script>

{#if lulus}
  <slot />
{:else}
  <div class="p-5 text-xl leading-[2]">
    <p class="mb-5">
      Masa trial telah berakhir. Silahkan klik <a
        href="https://wa.me/6281545143654?text={encodeURIComponent(
          `Nama Aplikasi: ${namaAplikasi}\nUser ID: ${userId}\n\nSaya ingin mendapatkan kode aktivasi aplikasi`,
        )}"
        class="underline">di sini</a
      > untuk mengaktifkan aplikasi ini
    </p>
    <Card>
      <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Masukkan kode aktivasi</h5>
      <form action="" class=" block" on:submit|preventDefault={cekKodeAktivasi}>
        <div class="mb-3">
          <!-- <Label for="large-input" class="block mb-2">Large input</Label> -->
          <Input
            id="large-input"
            required
            type="tel"
            size="lg"
            class="border-2"
            placeholder="Ketik di sini"
            bind:value={kodeAktivasi}
          />
        </div>
        <div class="">
          <Button type="submit" class="bg-green-500">Cek</Button>
        </div>
      </form>
    </Card>
  </div>

  <Modal title="Kode Salah" bind:open={clickOutsideModal} autoclose outsideclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Maaf, kode aktivasi Anda salah</p>
  </Modal>
{/if}
