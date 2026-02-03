export type Announcement = {
  id: number;
  title: string;
  when: string;
  link?: string;
  description: string;
  location?: string;
};

const announcements: Announcement[] = [
  { 
    id: 1, 
    title: "Rapat Keluarga Tahunan", 
    when: "Minggu, 14 Feb • 10:00",
    description: "Pertemuan rutin keluarga besar Trah Sutohaknyono untuk membahas perkembangan keluarga, program tahunan, dan koordinasi kegiatan. Semua anggota keluarga diundang untuk hadir dan berbagi informasi.",
    location: "Rumah Bapak Marsan, Demangan Pijiharjo, Manyaran",
    link: "#pengumuman" 
  },
  { 
    id: 2, 
    title: "Silaturahmi & Arisan Bulanan", 
    when: "Sabtu, 13 Feb • 18:30",
    description: "Acara silaturahmi rutin sambil mengadakan arisan bulanan. Kesempatan yang baik untuk berkumpul, berbagi cerita, dan saling mempererat hubungan keluarga. Harap membawa makanan atau minuman untuk dibagikan.",
    location: "Pendopo Desa, Kompleks Trah Sutohaknyono",
    link: "#pengumuman"
  }
];

export default announcements;
