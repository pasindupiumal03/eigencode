"use client";

import Link from "next/link";
import { MatrixBackground } from "@/components/matrix-background";
import { TypingEffect } from "@/components/typing-effect";
import { GlitchText } from "@/components/glitch-text";
import ImageGenForm from "@/components/ImageGenForm";
import ImageTransformer from "@/components/ImageTransformer";
import VideoTransformer from "@/components/VideoTransformer";
import CubeMythosBibleModal from "@/components/CubeMythosBibleModal";
import "./aura.css";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ArtGallery {
  SacredTerminal: string[];
  CorporatePropaganda: string[];
  CubeMythos: string[];
  Comics: string[];
  CODEBro: string[];
  CODETunes: string[];
  OrderOfTheCube: string[];
  TheOccultTerrorsOfCODE: string[];
  TheScienceOfTheCube: string[];
  CommunityArtwork: string[];
}

interface ImageGalleryProps {
  gallery: ArtGallery;
  block: keyof ArtGallery;
}

export default function AuraPage() {
  const [featuredVidieosVisible, setFeaturedVidieosVisible] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryBlock, setCurrentGalleryBlock] = useState<
    | "TerminalDoctrine"
    | "StatecraftedOptics"
    | "GlyphLore"
    | "VisionsPanels"
    | "PolybiousEntities"
    | "PolybiousEchoes"
    | "CircleOfTheCube"
    | "SpectersOfPolybious"
    | "TheoreticalRelics"
    | "OpenRelay"
    | "nothing"
  >("nothing");

  const tweetDetails = [
    {
      link: "https://t.co/XUcSZnItGX",
      pic: "http://pic.twitter.com/XUcSZnItGX",
      src: "https://twitter.com/eigencode_dev/status/1915251366416523280?ref_src=twsrc%5Etfw",
      description: "polybiuos demo v1",
      date: "April 24, 2025",
    },
    {
      link: "https://t.co/8VKG5ulueP",
      pic: "http://pic.twitter.com/8VKG5ulueP",
      src: "https://twitter.com/eigencode_dev/status/1915075134030807242?ref_src=twsrc%5Etfw",
      description:
        "bootstrapping the new era one code update and one schizo edit at a time",
      date: "April 23, 2025",
    },
  ];

  const artGallery = {
    TerminalDoctrine: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/0aac2a87-e979-4c09-9c70-6169ee5ad283.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/4f32f36e-21c3-4efd-8f1f-fe3ccbd4591d.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/59f192fc-18ec-4fe5-9e9d-b984d656fade.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/5d08f0d8-54d0-4e09-9620-c05afb214d32.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/70f41918-1711-402a-9fe1-cc557b2a8ce4.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/91eab8d3-b5ba-466b-9c42-b6c555571a87.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/sacred-terminal/f900ec45-5453-4545-bb81-35083bf3fe4c.png",
    ],
    StatecraftedOptics: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_27_28%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_27_39%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_27_43%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_27_47%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_27_51%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_35_44%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_35_49%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_36_14%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_36_48%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_37_06%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_37_09%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_37_24%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/corporate-propaganda/ChatGPT%20Image%20Apr%2025,%202025,%2004_39_00%20AM.png",
    ],
    GlyphLore: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_02%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_11%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_15%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_19%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_23%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_27%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_31%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_36%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_47%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/cube-mythos/ChatGPT%20Image%20Apr%2025,%202025,%2004_29_51%20AM.png",
    ],
    VisionsPanels: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/04c9c3a5-ea4d-45f4-a3a5-bebbd0f0b2c9.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/1c80d110-f69f-4a97-b2b1-faf93a262f9e.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/2e7047c4-bd73-447d-b4e2-5866558b0143.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/474ebc71-7e02-404e-b5a7-d04971d5c0b7.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/76619a59-3722-4a16-962f-8093eb369c89.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/7f65a638-80b6-4645-9dd5-ecb8d8036814.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/837faf59-d0da-4074-a746-27a8c96405f8.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/comics/be8e4721-b89b-40c3-becc-473067821338.png",
    ],
    PolybiousEntities: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/code-guardian/89e50a0e-b0e3-475e-ba78-60fd524f4179.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/code-guardian/b342af92-060f-4820-aec9-efe11d9a3ae1.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/code-guardian/bca84496-09a5-4122-8a3f-08809b872c40.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/code-guardian/e2933d17-388b-4539-b677-aa52827eae7d.png",
    ],
    PolybiousEchoes: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/code-tunes/eigencode-image-1745532550366.png",
    ],
    CircleOfTheCube: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/order-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_39_17%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/order-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_39_30%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/order-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_39_34%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/order-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_39_39%20AM.png",
    ],
    SpectersOfPolybious: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/occult-terrors-of-code/ChatGPT%20Image%20Apr%2025,%202025,%2004_32_41%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/occult-terrors-of-code/ChatGPT%20Image%20Apr%2025,%202025,%2004_33_05%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/occult-terrors-of-code/ChatGPT%20Image%20Apr%2025,%202025,%2004_35_06%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/occult-terrors-of-code/ChatGPT%20Image%20Apr%2025,%202025,%2004_35_15%20AM.png",
    ],
    TheoreticalRelics: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/science-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_34_21%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/science-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_34_25%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/science-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_34_29%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/science-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_34_34%20AM.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/science-of-the-cube/ChatGPT%20Image%20Apr%2025,%202025,%2004_34_39%20AM.png",
    ],
    OpenRelay: [
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/001fa90f-58b9-4c4e-9acd-b9be0106c141.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/00a2745d-f8c7-40b6-ba01-f7f54b1435db.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/0143139f-1219-4624-9d7d-da61764ac6f9.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/098d9214-a391-424d-b41a-1309b6f6704f.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/0da0d6b5-c8df-401a-a226-2cc4829ef16a.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/04f1102e-fcf8-4ad5-af75-9e1d0f722982.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/0e41bab1-6870-4ad3-937f-2f7aa39830fa.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/0f32293b-9d91-47d0-b4bf-c9ed404331e4.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/10779738-fcbf-4174-be43-70829d11f3ce.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/16e02ed2-7702-4fba-ab91-6d693d9bb9a9.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/192aaae7-26cc-4e8b-a7c6-815b57d79fdb.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/2bb7c4f2-73a8-4536-afdf-1eb8c6ca988d.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/3052e835-be83-44cb-a1c0-ac033e9e1fe7.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/3b668377-43d3-4328-9e21-9b337c2135f6.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/54072b78-021c-4223-9dda-afbbc38367fb.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/766cd859-cd7b-4904-aaf2-ede653da3fe6.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/8176bfcc-b4a3-4c95-a324-db8b5fe8818e.png",
      "https://pfezbklcqdjnzkaykwlb.supabase.co/storage/v1/object/public/art-gallery/community-artwork/855cd2ba-cc10-4505-96a1-39c58cc59a80.png",
    ],
  };

  const galleryMap = {
    "Terminal Doctrine": "TerminalDoctrine",
    "Statecrafted Optics": "StatecraftedOptics",
    "Glyph Lore": "GlyphLore",
    "Visions & Panels": "VisionsPanels",
    "$Polybious Entities": "PolybiousEntities",
    "$Polybious Echoes": "PolybiousEchoes",
    "Circle of the Cube": "CircleOfTheCube",
    "Specters of $Polybious": "SpectersOfPolybious",
    "Theoretical Relics": "TheoreticalRelics",
    "Open Relay": "OpenRelay",
  } as const;
  

  const updateCurrentGalleryBlock = (title: string) => {
    switch (title) {
      case "Terminal Doctrine":
        console.log("yayyyyy");
        setCurrentGalleryBlock("TerminalDoctrine");
        break;
      case "Statecrafted Optics":
        setCurrentGalleryBlock("StatecraftedOptics");
        break;
      case "Glyph Lore":
        setCurrentGalleryBlock("GlyphLore");
        break;
      case "Visions & Panels":
        setCurrentGalleryBlock("VisionsPanels");
        break;
      case "$Polybious Entities":
        setCurrentGalleryBlock("PolybiousEntities");
        break;
      case "$Polybious Echoes":
        setCurrentGalleryBlock("PolybiousEchoes");
        break;
      case "Circle of the Cube":
        setCurrentGalleryBlock("CircleOfTheCube");
        break;
      case "Specters of $Polybious":
        setCurrentGalleryBlock("SpectersOfPolybious");
        break;
      case "Theoretical Relics":
        setCurrentGalleryBlock("TheoreticalRelics");
        break;
      case "Open Relay":
        setCurrentGalleryBlock("OpenRelay");
        break;
      default:
        setCurrentGalleryBlock("nothing");
        break;
    }
  };

  const ImageGallery = ({ gallery, block }: ImageGalleryProps) => {
    const images = gallery[block];
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Preload images
    useEffect(() => {
      images.forEach((_, index) => {
        const img = new window.Image();
        img.src = images[index];
        img.onload = () => {
          setLoadedImages(prev => ({
            ...prev,
            [index]: true
          }));
        };
      });
    }, [images]);

    const handleViewFullImage = (url: string, e: React.MouseEvent) => {
      e.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div 
            key={index} 
            className="relative aspect-square group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {!loadedImages[index] ? (
              <div className="w-full h-full bg-cyber-bg/20 animate-pulse rounded" />
            ) : (
              <>
                <Image
                  src={url}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded transition-transform duration-300 group-hover:brightness-75"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGwAKVcB5YHwAAAABJRU5ErkJggg=="
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleViewFullImage(url, e)}
                      className="px-4 py-2 bg-cyber-blue text-white rounded-md flex items-center gap-2 transition-all hover:bg-cyber-green hover:scale-105"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l3-3m-3 3L7 10" 
                        />
                      </svg>
                      View Full Image
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-16 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyber-red rounded-full" />
          <div className="w-3 h-3 bg-cyber-yellow rounded-full" />
          <div className="w-3 h-3 bg-cyber-green rounded-full" />
          <span className="text-sm font-mono text-cyber-muted">
            <TypingEffect text="~ polybiuos aura" speed={80} />
          </span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-cyber-green hover:cyber-text-glow transition-colors"
          >
            $ home
          </Link>
          <Link
            href="/aura"
            className="text-cyber-blue hover:cyber-text-glow transition-colors"
          >
            $ aura
          </Link>
          <Link
            href="/cmds"
            className="text-cyber-yellow hover:cyber-text-glow transition-colors"
          >
            $ cmds
          </Link>
          <Link
            href="/docs"
            className="text-cyber-magenta hover:cyber-text-glow transition-colors"
          >
            $ docs
          </Link>
        </nav>
      </header>

      {/* Hero Section with ASCII Art */}
      <section className="flex flex-col items-center text-center mb-16  w-full max-w-6xl">
        {/* ASCII Art AURA */}
        <div className="relative mb-8 w-full max-w-6xl overflow-hidden">
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-blue-500/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(0.5px) translateY(-0.5px)",
            }}
          >
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-sky-400/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(-0.5px) translateY(0.5px)",
            }}
          >
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
          <pre className="relative text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-blue cyber-text-glow whitespace-pre">
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
        </div>

        <p className="text-cyber-muted text-center max-w-2xl mb-12">
          The metaphysical foundation and recursive architecture of the
          Polybiuos universe.
        </p>
      </section>

      {/* Polybiuos Mythos Section */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="Polybiuos Mythos"
            className="text-cyber-blue"
            glitchInterval={7000}
          />
        </h2>
        <p className="text-cyber-text mb-8 max-w-3xl">
          The metaphysical foundation and recursive architecture of the
          Polybiuos universe.
        </p>

        <CubeMythosBibleModal />
      </section>

      {/* AI Image Generator Section */}
      <section className="relative w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="AI Image Generator"
            className="text-cyber-blue"
            glitchInterval={8000}
          />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Generate unique AI images with our signature polybiuos style. Create
          branded visuals for your projects, social media, or personal use.
        </p>
        <div className="cyber-box p-6">
          <ImageGenForm />
        </div>
      </section>

      {/* Aura Image Transformer Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="Aura Image Transformer"
            className="text-cyber-blue"
            glitchInterval={6000}
          />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Transform your images with the polybiuos aura. Upload an image and
          apply our signature blue futuristic filters with glitch effects.
        </p>
        <div className="cyber-box p-6">
          <ImageTransformer />
        </div>
      </section>

      {/* Aura Video Transformer Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="Aura Video Transformer"
            className="text-cyber-blue"
            glitchInterval={9000}
          />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Transform your videos with the polybiuos aura. Upload a video and
          apply our signature blue futuristic filters with glitch effects.
        </p>
        <VideoTransformer />
      </section>

      {/* Video Gallery Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="Polybiuos Video Gallery"
            className="text-cyber-blue"
            glitchInterval={5000}
          />
        </h2>
        <p className="text-cyber-text mb-6">
          Watch our latest videos showcasing polybiuos concepts and innovations.
        </p>

        <div
          className="cyber-box p-4 hover:border-cyber-blue/50 transition-colors cursor-pointer group"
          onClick={() => {
            setFeaturedVidieosVisible(!featuredVidieosVisible);
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-cyber-blue font-mono group-hover:cyber-text-glow transition-colors">
                Featured Videos
              </h3>
            </div>
            <button className="text-cyber-blue hover:text-cyber-green transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {featuredVidieosVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {tweetDetails.map((tweet, index) => (
              <div>
                <blockquote
                  key={index}
                  className="twitter-tweet w-full p-4 bg-zinc-800 rounded-2xl shadow-lg"
                >
                  <p lang="en" dir="ltr" className="text-white mb-2">
                    {tweet.description}{" "}
                    <a
                      href={tweet.link}
                      className="text-blue-400 hover:underline"
                    >
                      visit
                    </a>
                  </p>
                  <span className="text-sm text-gray-400">
                    &mdash; eigencode (@eigencode_dev){" "}
                    <a href={tweet.src} className="hover:underline">
                      {tweet.date}
                    </a>
                  </span>
                </blockquote>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></script>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Art Gallery Section */}
      <section className="w-full max-w-6xl mb-16 z-10" id="art-gallery">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText
            text="Polybiuos Art Gallery"
            className="text-cyber-blue"
            glitchInterval={4000}
          />
        </h2>
        <p className="text-cyber-text mb-8">
          Explore our curated collections of polybiuos-inspired artwork.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {Object.entries(galleryMap).map(([title, blockKey]) => (
            <div
              key={blockKey}
              className="cyber-box p-4 hover:border-cyber-blue/50 transition-colors cursor-pointer group"
              onClick={() => {
                if (currentGalleryBlock === blockKey) {
                  setIsGalleryOpen(!isGalleryOpen);
                } else {
                  setCurrentGalleryBlock(blockKey);
                  setIsGalleryOpen(true);
                }
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-cyber-blue font-mono group-hover:cyber-text-glow transition-colors">
                  {title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentGalleryBlock === blockKey) {
                      setIsGalleryOpen(!isGalleryOpen);
                    } else {
                      setCurrentGalleryBlock(blockKey);
                      setIsGalleryOpen(true);
                    }
                  }}
                  className="text-cyber-blue hover:text-cyber-green transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isGalleryOpen && currentGalleryBlock === blockKey && (
                <ImageGallery gallery={artGallery} block={blockKey} />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-cyber-muted text-sm py-4 font-mono">
            ~ Polybiuos Art Gallery ~
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 ">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 bg-cyber-blue animate-blink" />
          <span>AURA STATUS: ONLINE</span>
        </div>
        <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
