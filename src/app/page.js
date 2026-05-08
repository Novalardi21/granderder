"use client";

import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "solar:map-point-bold-duotone",
    text: "Lokasi strategis di Desa Ender, Pangenan, Cirebon",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    text: "One gate system untuk akses yang lebih tertata",
  },
  {
    icon: "solar:buildings-3-bold-duotone",
    text: "Dekat kawasan pabrik, tempat ibadah, dan puskesmas",
  },
  {
    icon: "solar:signpost-2-bold-duotone",
    text: "Sekitar 10 menit menuju Pintu Tol Kanci",
  },
];

const specs = [
  ["Tipe", "36/60"],
  ["Pondasi", "Pasangan batu belah"],
  ["Struktur", "Beton bertulang"],
  ["Dinding", "Bata merah, plester aci, finishing cat"],
  ["Lantai", "Keramik 40x40"],
  ["Rangka atap", "Baja ringan"],
  ["Penutup atap", "Genteng metal"],
  ["Plafond", "GRC board"],
  ["Kusen", "Kayu mahoni/setara"],
  ["Sanitair", "Closet jongkok"],
  ["Air", "Sumur bor"],
  ["Listrik", "1300 kVa"],
  ["Carport", "Rabat beton"],
];

const planFeatures = [
  {
    icon: "solar:home-angle-bold-duotone",
    label: "Luas bangunan",
    value: "36 m2",
  },
  {
    icon: "solar:ruler-bold-duotone",
    label: "Luas tanah",
    value: "60 m2",
  },
  {
    icon: "solar:bed-bold-duotone",
    label: "Ruang utama",
    value: "2 kamar tidur",
  },
  {
    icon: "solar:garage-bold-duotone",
    label: "Area depan",
    value: "Carport + taman",
  },
];

const employeeDocs = [
  "FC KTP suami istri",
  "FC kartu keluarga",
  "FC buku nikah / akte cerai",
  "FC NPWP",
  "Surat keterangan belum memiliki rumah",
  "Pas foto berwarna 3x4",
  "Surat keterangan bekerja",
  "Slip gaji 3 bulan terakhir",
  "Buku tabungan",
  "Rekening koran bulan terakhir",
  "Materai 10.000",
];

const businessDocs = [
  "FC KTP suami istri",
  "FC kartu keluarga",
  "FC buku nikah / akte cerai",
  "FC NPWP",
  "Surat keterangan belum memiliki rumah",
  "Pas foto berwarna 3x4",
  "Surat keterangan usaha",
  "Foto usaha",
  "Denah lokasi usaha",
  "Buku tabungan",
  "Rekening koran bulan terakhir",
  "Materai 10.000",
];

const gallery = [
  {
    src: "/images/grand-ender-gate-render.jpeg",
    alt: "Gerbang utama Grand Ender",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    src: "/images/grand-ender-site-plan.jpeg",
    alt: "Site plan kawasan Grand Ender",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/images/grand-ender-entrance-road.jpeg",
    alt: "Akses jalan masuk perumahan Grand Ender",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/images/grand-ender-unit-front.jpeg",
    alt: "Tampak depan unit rumah Grand Ender",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/images/grand-ender-unit-alt.jpeg",
    alt: "Unit rumah Grand Ender dari sisi lain",
    className: "md:col-span-8 md:row-span-2",
  },
];

const socials = [
  {
    icon: "ri:instagram-fill",
    label: "Instagram",
    value: "@rizqoenaland",
  },
  {
    icon: "ri:tiktok-fill",
    label: "TikTok",
    value: "@rizqoenagroup",
  },
  {
    icon: "ri:youtube-fill",
    label: "YouTube",
    value: "Rizqoena Group",
  },
  {
    icon: "ri:facebook-circle-fill",
    label: "Facebook",
    value: "Rizqoena Rizqoena",
  },
];

export default function Home() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set("[data-gsap='hero-copy']", {
        autoAlpha: 0,
        y: 36,
      });
      gsap.set("[data-gsap='hero-visual']", {
        autoAlpha: 0,
        y: 42,
        scale: 0.98,
      });
      gsap.set("[data-gsap='section-head']", {
        autoAlpha: 0,
        y: 28,
      });
      gsap.set("[data-gsap='card']", {
        autoAlpha: 0,
        y: 30,
      });
      gsap.set("[data-gsap='image']", {
        autoAlpha: 0,
        y: 34,
        scale: 0.985,
      });
      gsap.set("[data-gsap='footer-col']", {
        autoAlpha: 0,
        y: 24,
      });

      const heroTimeline = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: "power3.out",
        },
      });

      heroTimeline
        .to("[data-gsap='hero-copy']", {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
        })
        .to(
          "[data-gsap='hero-visual']",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.55"
        );

      gsap.utils.toArray("[data-gsap-group='section']").forEach((section) => {
        const heading = section.querySelectorAll("[data-gsap='section-head']");
        const cards = section.querySelectorAll("[data-gsap='card']");
        const images = section.querySelectorAll("[data-gsap='image']");

        const sectionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        if (heading.length) {
          sectionTimeline.to(heading, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
          });
        }

        if (images.length) {
          sectionTimeline.to(
            images,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.95,
              stagger: 0.14,
            },
            heading.length ? "-=0.45" : 0
          );
        }

        if (cards.length) {
          sectionTimeline.to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
            },
            images.length || heading.length ? "-=0.5" : 0
          );
        }
      });

      gsap.to("[data-gsap='hero-visual']", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "35% top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray("[data-gsap-parallax='soft']").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      });

      gsap.utils.toArray("[data-gsap-parallax='deep']").forEach((element) => {
        gsap.to(element, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      });

      gsap.utils.toArray("[data-gsap-float='card']").forEach((element) => {
        gsap.to(element, {
          y: -14,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "bottom 12%",
            scrub: 1,
          },
        });
      });

      gsap.to("[data-gsap='footer-col']", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="bg-[var(--color-cream)] text-[var(--color-ink)]"
    >
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,44,90,0.96),rgba(18,44,90,0.78)_48%,rgba(205,94,61,0.18))]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(227,177,117,0.35),transparent_58%)] lg:block" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="text-white">
            <div
              data-gsap="hero-copy"
              className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sand)]"
            >
              Rizqoena Land | Perumahan Grand Ender
            </div>
            <h1
              data-gsap="hero-copy"
              className="max-w-3xl font-display text-5xl leading-[0.95] font-bold uppercase sm:text-6xl lg:text-7xl"
            >
              Rumah subsidi modern untuk hidup yang mulai mapan.
            </h1>
            <p
              data-gsap="hero-copy"
              className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg"
            >
              Hunian minimalis bernuansa asri di Cirebon untuk pasangan muda,
              keluarga baru, dan pekerja produktif yang ingin punya rumah
              pertama dengan akses yang masuk akal.
            </p>

            <div
              data-gsap="hero-copy"
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/6287786955568"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-4 text-sm font-semibold tracking-[0.15em] text-white uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Tanya Unit Tersedia
              </a>
              <a
                href="#spesifikasi"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold tracking-[0.15em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[var(--color-navy)]"
              >
                Lihat Detail Rumah
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                data-gsap="hero-copy"
                className="rounded-[1.75rem] border border-white/14 bg-white/8 p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)]">
                  Tipe Rumah
                </p>
                <p className="mt-2 text-3xl font-bold">36/60</p>
              </div>
              <div
                data-gsap="hero-copy"
                className="rounded-[1.75rem] border border-white/14 bg-white/8 p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)]">
                  Akses Tol
                </p>
                <p className="mt-2 text-3xl font-bold">10 Menit</p>
              </div>
              <div
                data-gsap="hero-copy"
                className="rounded-[1.75rem] border border-white/14 bg-white/8 p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)]">
                  Sistem Kawasan
                </p>
                <p className="mt-2 text-3xl font-bold">One Gate</p>
              </div>
            </div>
          </div>

          <div data-gsap="hero-visual" className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--color-sand)]/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#f5efe6] shadow-[0_28px_80px_rgba(7,12,24,0.35)]">
              <div className="grid items-stretch gap-0 md:grid-cols-[1.12fr_0.88fr]">
                <div
                  data-gsap-parallax="deep"
                  className="relative min-h-[420px] overflow-hidden bg-[#f3ece2] md:min-h-[520px]"
                >
                  <Image
                    src="/images/grand-ender-gate-render.jpeg"
                    alt="Ilustrasi gerbang perumahan Grand Ender"
                    fill
                    className="object-contain object-center p-2 md:p-3"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-between gap-3 p-3 md:py-5 md:pr-5 md:pl-4">
                  <div
                    data-gsap-parallax="soft"
                    className="relative min-h-[185px] overflow-hidden rounded-[1.4rem] bg-[#f3ece2]"
                  >
                    <Image
                      src="/images/grand-ender-floor-plan.jpeg"
                      alt="Denah rumah tipe 36/60"
                      fill
                      className="object-contain object-center p-3"
                    />
                  </div>
                  <div className="flex-1 rounded-[1.4rem] bg-[var(--color-navy)] p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sand)]">
                      Cocok untuk
                    </p>
                    <p className="mt-3 text-xl font-semibold">
                      Keluarga muda yang ingin cicilan realistis dan lingkungan
                      yang berkembang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-gsap-group="section"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p data-gsap="section-head" className="section-label">
              Kenapa Grand Ender
            </p>
            <h2
              data-gsap="section-head"
              className="mt-3 max-w-xl font-display text-4xl leading-tight font-bold uppercase text-[var(--color-navy)]"
            >
              Dibuat untuk pembeli rumah pertama yang butuh kepastian, bukan
              gimmick.
            </h2>
            <p
              data-gsap="section-head"
              className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]"
            >
              Tampilan rumah minimalis, akses yang efisien, dan spesifikasi yang
              jelas membuat Grand Ender terasa relevan untuk usia 20-40 yang
              ingin segera pindah dari fase sewa ke punya rumah sendiri.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.text}
                data-gsap="card"
                data-gsap-float="card"
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_16px_40px_rgba(18,44,90,0.08)]"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                  <Icon icon={item.icon} width="28" height="28" />
                </div>
                <p className="text-lg font-semibold leading-7 text-[var(--color-navy)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-gsap-group="section"
        className="bg-[var(--color-navy)] px-6 py-20 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                data-gsap="section-head"
                className="section-label text-[var(--color-sand)]"
              >
                Visual Kawasan
              </p>
              <h2
                data-gsap="section-head"
                className="mt-3 font-display text-4xl font-bold uppercase"
              >
                Lihat suasana proyek dan tampilan unit.
              </h2>
            </div>
            <p
              data-gsap="section-head"
              className="max-w-xl text-white/72 leading-8"
            >
              Foto lapangan dan materi promosi ini kami susun ulang agar calon
              pembeli bisa cepat menangkap bentuk kawasan, progres, dan karakter
              rumahnya.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:auto-rows-[180px] md:grid-cols-12">
            {gallery.map((image, index) => (
              <div
                key={image.src}
                data-gsap="image"
                data-gsap-parallax={index % 2 === 0 ? "soft" : "deep"}
                className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 ${image.className}`}
              >
                <div className="relative h-full min-h-[260px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 py-4">
                  <p className="text-sm font-medium tracking-[0.06em] text-white/92">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="spesifikasi"
        data-gsap-group="section"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.98fr_1.02fr] lg:px-10"
      >
        <div className="space-y-6">
          <div>
            <p data-gsap="section-head" className="section-label">
              Denah & Tipe
            </p>
            <h2
              data-gsap="section-head"
              className="mt-3 max-w-xl font-display text-4xl font-bold uppercase leading-tight text-[var(--color-navy)]"
            >
              Tata ruang ringkas yang enak dipakai harian.
            </h2>
            <p
              data-gsap="section-head"
              className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]"
            >
              Tipe 36/60 dirancang untuk kebutuhan keluarga muda: ruang depan
              tetap lega, dua kamar tidur, area servis di belakang, dan halaman
              depan yang masih terasa nyaman.
            </p>
          </div>

          <div
            data-gsap="card"
            data-gsap-float="card"
            className="rounded-[2rem] border border-[var(--color-line)] bg-white p-5 shadow-[0_16px_40px_rgba(18,44,90,0.08)]"
          >
            <div className="grid items-start gap-5 xl:grid-cols-[0.98fr_0.9fr]">
              <div className="flex flex-col gap-4">
                <div
                  data-gsap="image"
                  data-gsap-parallax="soft"
                  className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] bg-[#f7f3ed] md:min-h-[320px] xl:min-h-[340px]"
                >
                  <Image
                      src="/images/grand-ender-floor-plan.jpeg"
                      alt="Denah Grand Ender tipe 36/60"
                      fill
                    className="object-contain object-center p-2 md:p-3"
                    />
                  </div>

                <div
                  data-gsap="card"
                  data-gsap-float="card"
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[#fbf8f3] p-4"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                      <Icon
                        icon="solar:buildings-2-bold-duotone"
                        width="24"
                        height="24"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[var(--color-muted)]">
                        Gambaran kawasan
                      </p>
                      <p className="text-lg font-semibold text-[var(--color-navy)]">
                        Site plan Grand Ender
                      </p>
                    </div>
                  </div>

                    <div
                      data-gsap="image"
                      data-gsap-parallax="deep"
                      className="relative min-h-[220px] overflow-hidden rounded-[1.2rem] md:min-h-[260px]"
                    >
                      <Image
                        src="/images/grand-ender-site-plan.jpeg"
                        alt="Site plan Grand Ender"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col gap-4">
                  <div
                    data-gsap="card"
                    data-gsap-float="card"
                    className="min-h-[240px] rounded-[1.5rem] bg-[var(--color-navy)] p-6 text-white"
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-sand)]">
                      Tipe Unggulan
                  </p>
                  <p className="mt-3 text-3xl font-bold">36/60</p>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    Konfigurasi ruang yang efisien untuk tinggal sekarang dan
                    tetap nyaman saat keluarga mulai bertumbuh.
                  </p>
                </div>

                  <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {planFeatures.map((item) => (
                      <div
                        key={item.label}
                        data-gsap="card"
                        data-gsap-float="card"
                        className="rounded-[1.4rem] border border-[var(--color-line)] bg-[#fbf8f3] p-4 xl:min-h-[112px]"
                      >
                        <div className="flex h-full items-center gap-3">
                        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                          <Icon icon={item.icon} width="24" height="24" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[var(--color-muted)]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-[var(--color-navy)]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            data-gsap="card"
            data-gsap-float="card"
            className="rounded-[2rem] bg-[var(--color-clay)] p-8 text-white"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-sand)]">
              Catatan booking
            </p>
            <p className="mt-3 text-xl leading-8">
              Uang tanda jadi bersifat tidak dapat ditarik kembali, jadi
              halaman ini sengaja menampilkan informasi inti sejelas mungkin
              sebelum calon pembeli menghubungi marketing.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div
            data-gsap="card"
            data-gsap-float="card"
            className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_16px_40px_rgba(18,44,90,0.08)]"
          >
            <p data-gsap="section-head" className="section-label">
              Spesifikasi Bangunan
            </p>
            <div className="mt-6 grid gap-4">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-[var(--color-line)] pb-4 sm:grid-cols-[160px_1fr]"
                >
                  <p className="font-semibold text-[var(--color-navy)]">
                    {label}
                  </p>
                  <p className="text-[var(--color-muted)]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article
              data-gsap="card"
              data-gsap-float="card"
              className="rounded-[2rem] bg-[var(--color-navy)] p-7 text-white"
            >
              <p className="section-label text-[var(--color-sand)]">
                Dokumen KPR
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Karyawan</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/82">
                {employeeDocs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      icon="solar:check-circle-bold"
                      width="18"
                      height="18"
                      className="mt-1 shrink-0 text-[var(--color-sand)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article
              data-gsap="card"
              data-gsap-float="card"
              className="rounded-[2rem] bg-[var(--color-sand)] p-7 text-[var(--color-navy)]"
            >
              <p className="section-label text-[var(--color-clay)]">
                Dokumen KPR
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Wiraswasta</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-navy)]/82">
                {businessDocs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      icon="solar:check-circle-bold"
                      width="18"
                      height="18"
                      className="mt-1 shrink-0 text-[var(--color-clay)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        data-gsap-group="section"
        className="bg-[#efe6da] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            data-gsap="card"
            data-gsap-float="card"
            className="rounded-[2rem] bg-white p-8 shadow-[0_16px_40px_rgba(18,44,90,0.08)]"
          >
            <p data-gsap="section-head" className="section-label">
              Kontak Marketing
            </p>
            <h2
              data-gsap="section-head"
              className="mt-3 font-display text-4xl font-bold uppercase text-[var(--color-navy)]"
            >
              Siap survei lokasi atau tanya skema pembelian.
            </h2>
            <div
              data-gsap="section-head"
              className="mt-8 grid gap-5 text-[var(--color-muted)]"
            >
              <p>
                <span className="font-semibold text-[var(--color-navy)]">
                  Telepon / WhatsApp:
                </span>{" "}
                0877 8695 5568
              </p>
              <p>
                <span className="font-semibold text-[var(--color-navy)]">
                  Email:
                </span>{" "}
                rizqoenagroup147@gmail.com
              </p>
              <p>
                <span className="font-semibold text-[var(--color-navy)]">
                  Marketing office:
                </span>{" "}
                Jl. Desa Ender, Pangenan - Cirebon
              </p>
              <p>
                <span className="font-semibold text-[var(--color-navy)]">
                  Sosial media:
                </span>{" "}
                YouTube Rizqoena Group, Facebook Rizqoena Rizqoena, Instagram
                @rizqoenaland, TikTok @rizqoenagroup
              </p>
            </div>

            <div data-gsap="card" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/6287786955568"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] !text-white shadow-[0_14px_30px_rgba(18,44,90,0.2)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#17376e]"
              >
                Hubungi via WhatsApp
              </a>
              <a
                href="mailto:rizqoenagroup147@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-navy)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]"
              >
                Kirim Email
              </a>
            </div>
          </div>

          <div
            data-gsap="image"
            data-gsap-parallax="soft"
            className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white shadow-[0_16px_40px_rgba(18,44,90,0.08)]"
          >
            <div className="relative min-h-[540px]">
              <Image
                src="/images/grand-ender-brochure-main.jpeg"
                alt="Brosur utama Grand Ender"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="border-t border-[var(--color-line)] px-6 py-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Support pembiayaan
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-navy)]">
                Pengajuan KPR didukung Bank BTN.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--color-navy)] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div data-gsap="footer-col">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-sand)]">
              Grand Ender
            </p>
            <h3 className="mt-3 max-w-sm text-2xl font-semibold">
              Hunian subsidi modern untuk langkah besar pertama Anda.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
              Landing page ini dirancang untuk membantu calon pembeli melihat
              gambaran kawasan, tipe rumah, spesifikasi, dan jalur kontak dalam
              satu halaman yang rapi.
            </p>
          </div>

          <div data-gsap="footer-col">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-sand)]">
              Kontak
            </p>
            <div className="mt-4 space-y-4 text-sm text-white/78">
              <p>WhatsApp: 0877 8695 5568</p>
              <p>Email: rizqoenagroup147@gmail.com</p>
              <p>Alamat: Jl. Desa Ender, Pangenan - Cirebon</p>
            </div>
          </div>

          <div data-gsap="footer-col">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-sand)]">
              Sosial Media
            </p>
            <div className="mt-4 grid gap-3">
              {socials.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-white/78"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-sand)]">
                    <Icon icon={item.icon} width="20" height="20" />
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-gsap="footer-col"
          className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Copyright 2026 Grand Ender by Rizqoena Land.</p>
          <p>Rumah subsidi modern minimalis bernuansa asri di Cirebon.</p>
        </div>
      </footer>
    </main>
  );
}
