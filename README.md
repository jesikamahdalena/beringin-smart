# Beringin Smart — Portal Pengaduan Sarana & Prasarana Sekolah
> **Edisi Khusus: Jesika Sitorus (XI PPLG 1)**  
> **SMK Negeri 1 Beringin • Tahun Ajaran 2026/2027**  
> Standar Kompetensi Kerja Nasional Indonesia (SKKNI) No. 282 Tahun 2016  
> Tema Identitas Antarmuka: **Nordic Slate & Arctic Azure**

---

## 📌 Deskripsi Proyek
**Beringin Smart (Jesika Edition)** adalah aplikasi layanan pelaporan kerusakan sarana dan prasarana lingkungan sekolah berbasis Mobile & Web responsif di SMK Negeri 1 Beringin. Aplikasi ini dirancang untuk mempermudah siswa melaporkan kendala fasilitas secara real-time dan transparan ke tim sarpras sekolah.

Arsitektur Teknologi:
- **Backend**: Laravel 11 RESTful API + Autentikasi Sanctum
- **Frontend**: React 18 + Ionic Framework v8 + TypeScript + Vite Bundler
- **Database**: MySQL 8.4 (Port 3306)
- **Tema Visual**: Nuansa elegan **Nordic Slate & Arctic Azure**

---

## 👥 Hak Akses & Kredensial Uji Coba

| Peran (Role) | Nama Pengguna | Alamat Email | Kata Sandi |
|---|---|---|---|
| **Siswa Utama** | Jesika Sitorus | `jesika@beringin.sch.id` | `password123` |
| **Petugas Sarpras** | Staf Pemeliharaan Sarpras | `petugas@beringin.sch.id` | `password123` |
| **Siswa Pendukung** | Siswa SMKN 1 Beringin | `siswa@beringin.sch.id` | `password123` |

---

## 📸 Dokumentasi & Bukti Pengujian Antarmuka (11 Screenshot)

### 1. Antarmuka Portal Masuk Pengguna (Login)
![01. Login](screenshots/dok_01_autentikasi_portal_login.png)

---

### 2. Validasi Keamanan (Error Handling Login Gagal)
![02. Validasi Gagal](screenshots/dok_02_pengujian_validasi_error.png)

---

### 3. Dashboard Beranda Siswa
![03. Dashboard Siswa](screenshots/dok_03_beranda_feed_siswa.png)

---

### 4. Detail Laporan Sarpras (Tampilan Siswa)
![04. Detail Siswa](screenshots/dok_04_rincian_laporan_kerusakan.png)

---

### 5. Filter Penyaringan Kategori Sarpras
![05. Filter Kategori](screenshots/dok_05_filter_kategori_sarana.png)

---

### 6. Formulir Tambah Pengaduan Kerusakan
![06. Form Tambah](screenshots/dok_06_formulir_tiket_pengaduan.png)

---

### 7. Konfirmasi Tiket Baru Tersimpan
![07. Tiket Baru](screenshots/dok_07_konfirmasi_laporan_baru.png)

---

### 8. Dashboard Panel Petugas Sarpras
![08. Dashboard Petugas](screenshots/dok_08_dashboard_petugas_sarpras.png)

---

### 9. Panel Aksi Tindak Lanjut Petugas
![09. Panel Petugas](screenshots/dok_09_panel_status_tindak_lanjut.png)

---

### 10. Status Pekerjaan Selesai
![10. Status Selesai](screenshots/dok_10_status_selesai_terverifikasi.png)

---

### 11. Pengujian Antarmuka Smartphone (Mobile)
![11. Mobile View](screenshots/dok_11_antarmuka_ponsel_mobile.png)

---

## 🚀 Panduan Menjalankan di Komputer Lokal

### 1. Menjalankan Backend API
```powershell
cd D:\Jesika\beringin-backend
php artisan serve
```

### 2. Menjalankan Frontend
```powershell
cd D:\Jesika\Beringin-Smart
npm run dev
```
Akses di browser: `http://localhost:5173`
