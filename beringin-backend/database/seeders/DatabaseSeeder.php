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
            'name' => 'Pak Teguh (Petugas Sarpras)',
            'email' => 'petugas@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'petugas',
        ]);

        // 2. Akun Siswa Utama
        $siswa = User::create([
            'name' => 'Jesika Mahdalena Tri Hapsari Puspita (XI PPLG 1)',
            'email' => 'jesika@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 3. Akun Siswa Pendukung
        $teman = User::create([
            'name' => 'Adrian Siregar (Siswa XI PPLG 1)',
            'email' => 'siswa@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 4. Data Awal Laporan Pengaduan Sarpras (Jesika Mahdalena Tri Hapsari Puspita)
        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Stop Kontak Meja Praktik Lab RPL 2 Konslet',
            'lokasi' => 'Lab Komputer RPL 2, Gedung C',
            'kategori' => 'Laboratorium',
            'deskripsi' => 'Colokan listrik pada deretan meja 3 mengeluarkan percikan api saat dihubungkan kabel charger laptop siswa.',
            'status' => 'Sedang Diproses',
        ]);

        Laporan::create([
            'user_id' => $teman->id,
            'nama' => 'Kipas Angin Dinding Ruang Teori 1 Berbunyi Kasar',
            'lokasi' => 'Ruang Teori 1, Lantai 2',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Baling-baling kipas angin dinding nomor 2 bergetar hebat dan mengeluarkan suara bising saat dinyalakan pada kecepatan maksimal.',
            'status' => 'Menunggu',
        ]);

        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Kran Wastafel Depan Lab Jaringan Bocor Menetes',
            'lokasi' => 'Samping Lab Komputer & Jaringan',
            'kategori' => 'Lingkungan/Taman',
            'deskripsi' => 'Kran air wastafel tidak bisa tertutup rapat sehingga air terus menetes dan membuat lantai selasar licin.',
            'status' => 'Selesai',
        ]);

        Laporan::create([
            'user_id' => $teman->id,
            'nama' => 'Lampu LED Koridor Gedung C Mati Total',
            'lokasi' => 'Selasar Depan Ruang Guru Kejuruan',
            'kategori' => 'Lingkungan/Taman',
            'deskripsi' => 'Dua buah lampu tabung LED di koridor padam sejak kemarin sore, membuat lorong gelap saat senja.',
            'status' => 'Selesai',
        ]);

        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Engsel Jendela Kelas XI PPLG 1 Macet',
            'lokasi' => 'Ruang Belajar XI PPLG 1',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Jendela kaca sisi timur sulit ditutup rapat karena baut engsel kendur dan berkarat.',
            'status' => 'Sedang Diproses',
        ]);
    }
}
