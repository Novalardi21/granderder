"use client";
import { useState } from "react";
import {
  Phone,
  Play,
  ChevronLeft,
  ChevronRight,
  Check,
  MapPin,
  ShieldCheck,
  Star,
  MessageCircle,
  Home,
  Bath,
  Maximize,
  Layout,
  Car,
  Utensils,
  Trees,
  Award,
  Users,
  BadgePercent,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Data ---

const HOUSE_TYPES = [
  {
    id: "36",
    name: "Tipe 36",
    subName: "36/72",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    specs: {
      luasTanah: "72 m²",
      luasBangunan: "36 m²",
      kamarTidur: 2,
      kamarMandi: 1,
      carport: 1,
      ruangTamu: true,
      dapur: true,
      taman: true,
      hargaMulai: "Rp 325 JT",
    },
  },
  {
    id: "45",
    name: "Tipe 45",
    subName: "45/90",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    specs: {
      luasTanah: "90 m²",
      luasBangunan: "45 m²",
      kamarTidur: 2,
      kamarMandi: 1,
      carport: 1,
      ruangTamu: true,
      dapur: true,
      taman: true,
      hargaMulai: "Rp 425 JT",
    },
  },
  {
    id: "55",
    name: "Tipe 55",
    subName: "55/105",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    specs: {
      luasTanah: "105 m²",
      luasBangunan: "55 m²",
      kamarTidur: 3,
      kamarMandi: 2,
      carport: 1,
      ruangTamu: true,
      dapur: true,
      taman: true,
      hargaMulai: "Rp 525 JT",
    },
  },
  {
    id: "60",
    name: "Tipe 60",
    subName: "60/120",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: {
      luasTanah: "120 m²",
      luasBangunan: "60 m²",
      kamarTidur: 3,
      kamarMandi: 2,
      carport: 2,
      ruangTamu: true,
      dapur: true,
      taman: true,
      hargaMulai: "Rp 625 JT",
    },
  },
  {
    id: "70",
    name: "Tipe 70",
    subName: "70/140",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    specs: {
      luasTanah: "140 m²",
      luasBangunan: "70 m²",
      kamarTidur: 4,
      kamarMandi: 2,
      carport: 2,
      ruangTamu: true,
      dapur: true,
      taman: true,
      hargaMulai: "Rp 725 JT",
    },
  },
];

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg">
              <Home className="text-brand-gold w-6 h-6" />
            </div>
            <div>
              <span className="block text-lg font-bold leading-none tracking-tight text-brand-navy uppercase font-serif">
                Grand Ender
              </span>
              <span className="block text-[10px] tracking-widest text-brand-gold uppercase font-sans">
                Residence
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-brand-gold border-b-2 border-brand-gold pb-1"
            >
              Beranda
            </a>
            <a
              href="#"
              className="text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              Tipe Rumah
            </a>
            <a
              href="#"
              className="text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              Perbandingan
            </a>
            <a
              href="#"
              className="text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              Fasilitas
            </a>
            <a
              href="#"
              className="text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              Lokasi
            </a>
            <a
              href="#"
              className="text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              Tentang Kami
            </a>
          </div>

          <button className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-gold/20">
            <Phone className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-template-columns-[1.2fr_1fr] lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-xs mb-4 block">
              Grand Ender Residence
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-brand-navy leading-[1.1] mb-6">
              Bandingkan Semua <br />
              <span className="italic font-normal">Tipe Rumah</span> <br />
              Grand Ender Residence
            </h1>
            <p className="text-brand-navy/60 text-lg mb-10 max-w-lg leading-relaxed">
              Temukan hunian terbaik untuk Anda dan keluarga. Bandingkan
              spesifikasi, ukuran, harga, dan fasilitas dengan mudah dalam satu
              halaman.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-navy text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/20">
                <Layout className="w-5 h-5" />
                Mulai Perbandingan
              </button>
              <button className="bg-white text-brand-navy border border-brand-navy/10 px-8 py-4 rounded-xl font-medium flex items-center gap-3 hover:bg-brand-cream transition-all">
                <Play className="w-5 h-5 fill-brand-navy" />
                Lihat Video
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Main House"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-gold/10 hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <Star className="text-brand-gold w-6 h-6 fill-brand-gold" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-navy leading-none">
                  Luxury Living
                </div>
                <div className="text-xs text-brand-navy/50 mt-1">
                  Prime Location
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-gold/5 rounded-bl-[200px] -z-10 blur-3xl"></div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Developer Terpercaya",
    },
    { icon: <Star className="w-6 h-6" />, title: "Kualitas Terbaik" },
    { icon: <MapPin className="w-6 h-6" />, title: "Lokasi Strategis" },
    { icon: <BadgePercent className="w-6 h-6" />, title: "Harga Bersaing" },
  ];

  return (
    <section className="bg-white py-12 border-y border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-brand-navy tracking-tight">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const [selectedIds, setSelectedIds] = useState([
    "36",
    "45",
    "55",
    "60",
    "70",
  ]);

  const toggleSelection = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1)
        setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedHouses = HOUSE_TYPES.filter((h) => selectedIds.includes(h.id));

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold font-medium tracking-widest uppercase text-xs mb-3 block">
            Tipe Rumah
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-navy mb-4">
            Pilih Tipe Rumah yang Ingin Dibandingkan
          </h2>
        </motion.div>

        {/* Carousel / Selection */}
        <div className="relative mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {HOUSE_TYPES.map((house, idx) => (
              <motion.div
                key={house.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => toggleSelection(house.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-4 ${
                  selectedIds.includes(house.id)
                    ? "border-brand-navy bg-white shadow-xl"
                    : "border-transparent bg-white/50"
                }`}
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={house.image}
                    alt={house.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedIds.includes(house.id) && (
                    <div className="absolute top-2 right-2 bg-brand-navy text-white rounded-full p-1 border-2 border-white">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`font-serif text-lg ${selectedIds.includes(house.id) ? "text-brand-navy" : "text-brand-navy/40"}`}
                  >
                    {house.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 mt-1 font-medium">
                    {house.subName}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all border border-brand-dark/5 hidden lg:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all border border-brand-dark/5 hidden lg:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* COMPARISON TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand-gold font-medium tracking-widest uppercase text-xs mb-3 block">
            Perbandingan Tipe Rumah
          </span>
          <h2 className="text-3xl md:text-4xl text-brand-navy">
            Bandingkan Spesifikasi & Fasilitas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-brand-dark/5 mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-8 w-1/5 font-serif text-xl border-r border-white/10 uppercase tracking-widest">
                    Spesifikasi
                  </th>
                  {selectedHouses.map((house) => (
                    <th
                      key={house.id}
                      className="p-8 text-center border-r border-white/10 last:border-r-0"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={house.image}
                          className="w-16 h-12 object-cover rounded-lg shadow-inner"
                          alt="thumb"
                        />
                        <div>
                          <div className="font-serif text-lg leading-tight">
                            {house.name}
                          </div>
                          <div className="text-[10px] text-brand-gold font-sans tracking-widest mt-1 opacity-80">
                            {house.subName}
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-dark/5">
                {[
                  {
                    label: "Luas Tanah",
                    key: "luasTanah",
                    icon: <Maximize className="w-4 h-4" />,
                  },
                  {
                    label: "Luas Bangunan",
                    key: "luasBangunan",
                    icon: <Home className="w-4 h-4" />,
                  },
                  {
                    label: "Kamar Tidur",
                    key: "kamarTidur",
                    icon: <Layout className="w-4 h-4" />,
                  },
                  {
                    label: "Kamar Mandi",
                    key: "kamarMandi",
                    icon: <Bath className="w-4 h-4" />,
                  },
                  {
                    label: "Carport",
                    key: "carport",
                    icon: <Car className="w-4 h-4" />,
                  },
                  {
                    label: "Ruang Tamu",
                    key: "ruangTamu",
                    icon: <Users className="w-4 h-4" />,
                    isBoolean: true,
                  },
                  {
                    label: "Dapur",
                    key: "dapur",
                    icon: <Utensils className="w-4 h-4" />,
                    isBoolean: true,
                  },
                  {
                    label: "Taman",
                    key: "taman",
                    icon: <Trees className="w-4 h-4" />,
                    isBoolean: true,
                  },
                  {
                    label: "Harga Mulai",
                    key: "hargaMulai",
                    icon: <Award className="w-4 h-4" />,
                    isGold: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className={row.isGold ? "bg-brand-gold/5" : ""}>
                    <td className="p-6 text-sm font-semibold text-brand-navy border-r border-brand-dark/5 bg-brand-cream/30">
                      <div className="flex items-center gap-3">
                        <span className="text-brand-gold">{row.icon}</span>
                        {row.label}
                      </div>
                    </td>
                    {selectedHouses.map((house) => (
                      <td
                        key={house.id}
                        className={`p-6 text-center border-r border-brand-dark/5 last:border-r-0 text-sm ${row.isGold ? "text-brand-gold font-bold text-lg" : "text-brand-navy/70 font-medium"}`}
                      >
                        {row.isBoolean ? (
                          <div className="flex justify-center">
                            {house.specs[row.key] ? (
                              <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                                <Check className="w-4 h-4 stroke-[3px]" />
                              </div>
                            ) : (
                              "-"
                            )}
                          </div>
                        ) : (
                          house.specs[row.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <button className="bg-brand-navy text-white px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-brand-gold transition-all shadow-xl shadow-brand-navy/10 transform hover:scale-105">
            <Layout className="w-5 h-5" />
            Lihat Detail Lengkap
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const InfoGrid = () => {
  const cards = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Lokasi Strategis",
      desc: "Dekat pusat kota, sekolah, rumah sakit & pusat perbelanjaan",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Fasilitas Lengkap",
      desc: "One Gate System, Security 24 Jam, CCTV & Taman Hijau",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Legalitas Aman",
      desc: "Sertifikat Hak Milik (SHM) & IMB Lengkap",
    },
    {
      icon: <BadgePercent className="w-8 h-8" />,
      title: "Promo Menarik",
      desc: "Dapatkan promo spesial & kemudahan pembayaran",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-brand-cream/50 border border-brand-dark/5 hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className="text-brand-gold mb-6">{card.icon}</div>
              <h3 className="text-xl text-brand-navy mb-3">{card.title}</h3>
              <p className="text-sm text-brand-navy/50 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-brand-navy py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Masih Bingung Memilih? <br />{" "}
              <span className="text-brand-gold">
                Konsultasikan dengan Marketing Kami!
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              Dapatkan rekomendasi tipe rumah terbaik sesuai kebutuhan Anda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end gap-6"
          >
            <button className="bg-brand-gold hover:bg-white hover:text-brand-gold text-white px-10 py-5 rounded-2xl flex items-center gap-4 text-lg font-bold transition-all shadow-2xl shadow-brand-gold/30">
              <MessageCircle className="w-7 h-7" />
              Hubungi via WhatsApp
            </button>
            <div className="flex items-center gap-4 text-white/80">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span className="font-mono text-xl tracking-tighter">
                0812-3456-7890
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-navy flex items-center justify-center rounded-lg border border-brand-gold/30">
              <Home className="text-brand-gold w-5 h-5" />
            </div>
            <div className="text-white">
              <span className="block text-base font-bold leading-none tracking-tight font-serif">
                Grand Ender
              </span>
              <span className="block text-[8px] tracking-widest text-brand-gold uppercase font-sans opacity-70">
                Residence
              </span>
            </div>
          </div>

          <div className="text-white/40 text-sm">
            © 2026 Grand Ender Residence. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            {["Instagram", "Facebook", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/40 hover:text-brand-gold transition-colors text-xs uppercase tracking-widest font-semibold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ComparisonSection />
        <InfoGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
