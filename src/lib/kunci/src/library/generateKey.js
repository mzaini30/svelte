import md5 from "md5";

export function generateKey(userId) {
  let olah = md5(userId);
  olah = btoa(olah);
  let encodedUserId = olah;
  let finalNumber = "";
  encodedUserId.split("").forEach((char, index) => {
    finalNumber += char.charCodeAt(0) + index;
  });
  let encodedData = finalNumber;
  // Mengambil 20 angka pertama
  const first20Digits = encodedData.substring(0, 20);

  // Pisahkan tiap 4 angka dengan strip
  const formattedResult = first20Digits.match(/.{1,4}/g).join("-");
  // Mengonversi hasil ke angka
  return formattedResult;
}
export function isValid(userId, generatedKey) {
  // Mengonversi userId menjadi string dan melakukan encoding base64
  let olah = md5(userId);
  olah = btoa(olah);
  let encodedUserId = olah;
  let finalNumber = "";
  encodedUserId.split("").forEach((char, index) => {
    finalNumber += char.charCodeAt(0) + index;
  });
  let encodedData = finalNumber;

  // Mengambil 20 angka pertama
  const first20Digits = encodedData.substring(0, 20);

  // Pisahkan tiap 4 angka dengan strip
  const formattedResult = first20Digits.match(/.{1,4}/g).join("-");

  // Membandingkan hasil dengan generatedKey
  return formattedResult === generatedKey;
}
export function generateRandomNumber() {
  // Menghasilkan 6 angka secara acak antara 100000 dan 999999
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;

  return randomNumber;
}
