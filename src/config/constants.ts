interface SectionBase<T> {
    title: string;
    subtitle?: string;
    data?: T;
}

type NavDropdown = Record<string, string[]>;

const NAV_LIST: Array<string | NavDropdown> = [
    'Beranda',
    { PelatihanKerja: ['Kejuruan pelatihan kerja', 'Pendaftaran pelatihan'] },
    { Pengaduan: ['Survey kepuasan', 'Pengaduan masyarakat'] },
    {
        ZonaIntegritas: [
            'Manajemen Perubahan',
            'Penataan Tata Laksana',
            'Penataan Sistem Manajemen SDM',
            'Penguatan Akuntabilitas Kinerja',
            'Penguatan Pengawasan',
            'Penguatan Kualitas Pelayanan Publik',
        ],
    },
    { Kinerja: ['Perjanjian', 'Laporan'] },
];

const STATISTICS: Record<string, string> = {
    Alumni: '1928',
    Penempatan: '1604',
    Pelatihan: '145',
    Perusahaan: '132',
    Lowongan_Kerja: '201',
};

interface DataTypeBase {
    title: string;
    description: string;
}

interface DataCategory extends DataTypeBase {
    tags: string[];
}

interface DataActivity extends DataTypeBase {
    timestamp: string;
}

interface DataASN {
    img_src: string;
    name: string;
    position?: string;
}

interface DataPerusahaan {
    img_src: string;
    alt: string;
}

type SectionList =
    | 'kategori'
    | 'pendaftaran'
    | 'kegiatan'
    | 'sertifikat'
    | 'asn'
    | 'perusahaan';

const SECTIONS: Record<
    SectionList,
    SectionBase<
        | DataTypeBase[]
        | DataCategory[]
        | DataActivity[]
        | DataASN[]
        | DataPerusahaan[]
        | undefined
    >
> = {
    kategori: {
        title: 'Kategori Pelatihan',
        subtitle: 'Beberapa kategori pelatihan kerja',
        data: [
            {
                title: 'PLATE WELDER FCAW 3G-UP/PF',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Manufaktur', 'Teknik las'],
            },
            {
                title: 'Tata Rias Pengantin Muslim Modifikasi',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Tata kecantikan', 'Tata rias'],
            },
            {
                title: 'Asisten Junior Desainer',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Fashion technology', 'Garment apparel'],
            },
            {
                title: 'Bahasa Inggris',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Edukasi', 'Bahasa asing'],
            },
            {
                title: 'Desainer Grafis Muda',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Teknologi informasi dan komunikasi', 'Digital art'],
            },
            {
                title: 'Finishing Kayu dengan Teknik Semprot',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Manufaktur', 'Furniture'],
            },
            {
                title: 'Instalasi Listrik',
                description:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde alias fuga quo obcaecati vitae sunt et, minima eius necessitatibus quos voluptatem expedita quasi ab corrupti eveniet adipisci fugit, dignissimos placeat',
                tags: ['Kelistrikan', 'Otomatisasi elektrolika'],
            },
        ],
    },
    pendaftaran: {
        title: 'Daftar Pelatihan',
        subtitle: 'Pembukaan daftar pelatihan',
    },
    kegiatan: {
        title: 'Kegiatan UPT BLK Ngajuk',
        subtitle: 'Dokumentasi berbagai kegiatan pelatihan dan program kerja',
        data: [
            {
                timestamp: '2025-07-10T15:30:00.000Z',
                title: 'Monitoring pelatihan MTU',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime cumque tempore alias nisi pariatur quaerat animi reprehenderit quisquam quia, aut nam voluptatem perferendis doloribus id. Ipsam beatae eius architecto.',
            },
            {
                timestamp: '2025-07-10T15:30:00.000Z',
                title: 'Peningkatan Kapasitas SDM terkait Penyusunan Laporan Kinerja 2024',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime cumque tempore alias nisi pariatur quaerat animi reprehenderit quisquam quia, aut nam voluptatem perferendis doloribus id. Ipsam beatae eius architecto.',
            },
            {
                timestamp: '2025-07-10T15:30:00.000Z',
                title: 'Penandatanganan Perjanjian Kinerja Yang Berdampak dan Pakta Integritas 2025',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime cumque tempore alias nisi pariatur quaerat animi reprehenderit quisquam quia, aut nam voluptatem perferendis doloribus id. Ipsam beatae eius architecto.',
            },
            {
                timestamp: '2025-07-10T15:30:00.000Z',
                title: 'Pembinaan SDM internal UPT BLK NGANJUK',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime cumque tempore alias nisi pariatur quaerat animi reprehenderit quisquam quia, aut nam voluptatem perferendis doloribus id. Ipsam beatae eius architecto.',
            },
            {
                timestamp: '2025-07-10T15:30:00.000Z',
                title: 'Pemberian penghargaan ASN kinerja terbaik 2024 UPT BLK NGANJUK',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime cumque tempore alias nisi pariatur quaerat animi reprehenderit quisquam quia, aut nam voluptatem perferendis doloribus id. Ipsam beatae eius architecto.',
            },
        ],
    },
    sertifikat: {
        title: 'Sertifikat Pelatihan',
        subtitle: 'Validasi dan verifikasi serta penerbitan sertifikat pelatihan legal',
    },
    asn: {
        title: 'ASN UPT BLK NGANJUK',
        subtitle: 'Beberapa ASN atau pegawai UPT BLK NGANJUK',
        data: [
            {
                img_src: '/assets/asn/endri_budianto.webp',
                name: 'Endri Budianto',
                position: 'Kepala Sub Bagian Tata Usaha',
            },
            {
                img_src: '/assets/asn/dwi_lestari.webp',
                name: 'DWI LESTARI',
                position: 'Pengelola Sertifikasi',
            },
            {
                img_src: '/assets/asn/bayu_satya_nugraha_tri_saputra.webp',
                name: 'BAYU SATYA NUGRAHA TRI SAPUTRA S.T.',
                position: 'INSTRUKTUR AHLI PERTAMA KEJURUAN REFRIGERASI',
            },
            {
                img_src: '/assets/asn/ahmad_fauzan_amirullah.webp',
                name: 'AHMAD FAUZAN AMIRULLAH',
                position: 'Instruktur Ahli Pertama Kejuruan Elektro',
            },
            {
                img_src: '/assets/asn/prista_damayanti.webp',
                name: 'PRISTA DAMAYANTI',
                position: 'Instruktur Ahli Pertama Kejuruan Bisnis dan Manajemen',
            },
            {
                img_src: '/assets/asn/dhini_wafiroh.webp',
                name: 'DHINI WAFIROH',
                position: 'Instruktur Ahli Pertama Kejuruan Otomotif',
            },
            {
                img_src: '/assets/asn/christianawati.webp',
                name: 'Christianawati',
                position: 'INSTRUKTUR KEJURUAN FASHION TEKNOLOGI',
            },
            {
                img_src: '/assets/asn/dhana_dili_ariani.webp',
                name: 'DHANA DILI ARIANI',
                position: 'Instruktur Ahli Pertama Kejuruan Pengolahan Hasil Pertanian',
            },
            {
                img_src: '/assets/asn/fieda_cahya_fitri.webp',
                name: 'Fieda Cahya Fitri',
                position: 'Instruktur Kejuruan Tata Kecantikan',
            },
            {
                img_src: '/assets/asn/awalia_habibatuz_zahro.webp',
                name: 'AWALIA HABIBATUZ ZAHRO',
                position: 'Instruktur Ahli Pertama Kejuruan Otomotif',
            },
            {
                img_src: '/assets/asn/azis_harnowo.webp',
                name: 'Azis Harnowo',
                position: 'Kepala UPT BLK Nganjuk',
            },
            {
                img_src: '/assets/asn/sugeng_prasetiono.webp',
                name: 'Sugeng Prasetiono',
                position: 'Kepala Seksi Latihan dan Sertifikasi',
            },
            {
                img_src: '/assets/asn/nina_ariwidiyani.webp',
                name: 'Nina Ariwidiyani',
                position: 'Kepala Seksi Pengembangan dan Pemasaran',
            },
            {
                img_src: '/assets/asn/m_ridho_pangestu.webp',
                name: 'M. Ridho Pangestu',
                position: 'INSTRUKTUR MESIN PRODUKSI',
            },
            {
                img_src: '/assets/asn/rustami.webp',
                name: 'RUSTAMI',
                position:
                    'INSTRUKTUR AHLI PERTAMA KEJURUAN TEKNOLOGI  INFORMASI dan KOMUNIKASI (TIK)',
            },
            {
                img_src: '/assets/asn/rifki_amaliyah_illiyin_nur_azzizah.webp',
                name: 'RIFKI AMALIYAH ILLIYIN NUR AZZIZAH',
                position: 'INSTRUKTUR AHLI PERTAMA KEJURUAN BANGUNAN',
            },
            {
                img_src: '/assets/asn/rendra_aliwijaya.webp',
                name: 'RENDRA ALIWIJAYA',
                position: 'Instruktur Ahli Pertama Kejuruan Las',
            },
            {
                img_src: '/assets/asn/risha_sekar_dewi.webp',
                name: 'RISHA SEKAR DEWI',
                position: 'Pengelola Sertifikasi',
            },
        ],
    },
    perusahaan: {
        title: 'Perusahaan',
        subtitle: 'Daftar klien dan mitra kerja sama kami.',
        data: [
            { img_src: '/assets/perusahaan/cahaya_poles.jpg', alt: 'PT>Cahaya Poles' },
            { img_src: '/assets/perusahaan/cap_global.jpeg', alt: 'PT. Cap Global' },
            { img_src: '/assets/perusahaan/cun_motor.png', alt: 'CUN Motor' },
            {
                img_src: '/assets/perusahaan/eagle_sporting_goods.png',
                alt: 'PT. Eagle Sporting Goods',
            },
            { img_src: '/assets/perusahaan/gunawan_fajar.jpg', alt: 'PT. Gunawan Fajar' },
            {
                img_src: '/assets/perusahaan/indoprima_gemilang.jpeg',
                alt: 'PT. Indoprima Gemilang',
            },
            {
                img_src: '/assets/perusahaan/kertarajasa_raya.jpg',
                alt: 'PT. Kertarajasa Raya',
            },
            {
                img_src: '/assets/perusahaan/ksp_tunas_artha_mandiri.png',
                alt: 'KSP Tunas Artha Mandiri',
            },
            { img_src: '/assets/perusahaan/lotus_textile.png', alt: 'PT. Lotus Textile' },

            { img_src: '/assets/perusahaan/mahatma_argo.jpg', alt: 'PT. Mahatma Argo' },
            { img_src: '/assets/perusahaan/mitra_saruta.png', alt: 'PT. Mitra Saruta' },
            { img_src: '/assets/perusahaan/sinar_baja.png', alt: 'PT.Sinar Baja' },
            {
                img_src: '/assets/perusahaan/sukses_abadi_indonesia.jpg',
                alt: 'PT. Sukses Abadi Indonesia',
            },
            {
                img_src: '/assets/perusahaan/tri_karya_cahaya_utama.jpeg',
                alt: 'PT. Tri Karya Cahaya Utama',
            },
        ],
    },
};

export type {
    NavDropdown,
    DataTypeBase,
    DataASN,
    DataActivity,
    DataCategory,
    DataPerusahaan,
};
export { NAV_LIST, STATISTICS, SECTIONS };
