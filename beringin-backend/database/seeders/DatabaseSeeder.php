<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Laporan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Akun Petugas Sarpras
        $petugas = User::create([
            'name' => 'Pak Teguh (Petugas Pemeliharaan)',
            'email' => 'petugas@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'petugas',
        ]);

        // 2. Akun Siswa Utama
        $siswa_utama = User::create([
            'name' => 'Jesika Sitorus (XI PPLG 1)',
            'email' => 'jesika@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 3. Akun Siswa Pendukung
        $siswa_pendukung = User::create([
            'name' => 'Adrian Siregar (XI PPLG 2)',
            'email' => 'siswa@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 4. Data Awal Laporan Pengaduan Sarpras (Edisi Jesika)
        
        Laporan::create([
            'user_id' => $siswa_utama->id,
            'judul' => 'Proyektor InFocus Ruang Multimedia Buram & Bergaris',
            'deskripsi' => 'Tampilan proyektor menampilkan bayangan garis merah tebal dan warna buram saat pembelajaran animasi.',
            'lokasi' => 'Lab Multimedia Lt. 2 Gedung C',
            'kategori' => 'Lab & Bengkel',
            'foto' => null,
            'status' => 'diproses',
        ]);

        Laporan::create([
            'user_id' => $siswa_pendukung->id,
            'judul' => 'Pintu Kamar Mandi Siswa Putri Gedung B Kunci Rusak',
            'deskripsi' => 'Kunci slot pintu kamar mandi nomor 2 patah sehingga tidak bisa dikunci dari dalam.',
            'lokasi' => 'Toilet Putri Gedung B',
            'kategori' => 'Fasilitas Umum',
            'foto' => null,
            'status' => 'selesai',
        ]);

        Laporan::create([
            'user_id' => $siswa_utama->id,
            'judul' => 'Stopkontak Meja Guru Kelas XI PPLG 1 Goyang',
            'deskripsi' => 'Stopkontak meja guru kendor dan mengeluarkan suara mendesis saat charger laptop dicolokkan.',
            'lokasi' => 'Ruang Teori 1 Gedung A',
            'kategori' => 'Ruang Belajar',
            'foto' => null,
            'status' => 'menunggu',
        ]);

    }
}
