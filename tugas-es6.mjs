// Definisi data array of objects berupa transaksi belanja peralatan dapur (minimal 6 data)
const daftarBelanjaDapur = [
  { id: 1, barang: "Blender Kaca", harga: 350000, qty: 2, kategori: "Elektronik" },
  { id: 2, barang: "Panci Stainless", harga: 150000, qty: 3, kategori: "Alat masak" },
  { id: 3, barang: "Wajan Anti Lengket", harga: 120000, qty: 1, kategori: "Alat masak" },
  { id: 4, barang: "Rice Cooker", harga: 400000, qty: 1, kategori: "Elektronik" },
  { id: 5, barang: "Set Pisau Dapur", harga: 85000, qty: 4, kategori: "Perkakas" },
  { id: 6, barang: "Sutil Silikon", harga: 25000, qty: 5, kategori: "Perkakas" }
];

// 1. Menggunakan filter() untuk menyaring kategori tertentu (contoh: kategori "Alat masak")[cite: 9]
export const getAlatMasak = () => 
  daftarBelanjaDapur.filter(item => item.kategori === "Alat masak");

// 2. Menggunakan map() untuk menghitung subtotal tiap barang (harga * qty) dengan destructuring[cite: 9]
export const getSubtotalBelanja = () => 
  daftarBelanjaDapur.map(({ barang, harga, qty, kategori }) => ({
    barang,
    kategori,
    subtotal: harga * qty
  }));

// 3. Menggunakan reduce() untuk menghitung total keseluruhan biaya belanja[cite: 9]
export const hitungTotalKeseluruhan = () => {
  return daftarBelanjaDapur.reduce((total, { harga, qty }) => total + (harga * qty), 0);
};

// Menampilkan hasil di terminal
console.log("=== DAFTAR SUBTOTAL PERALATAN DAPUR ===");
console.log(getSubtotalBelanja());

console.log("\n=== TOTAL KESELURUHAN BELANJA DAPUR ===");
console.log(`Rp ${hitungTotalKeseluruhan().toLocaleString("id-ID")}`);