import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#nexus" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/YujiTech/game-website-by-yujitech", 
} as const;

export const SOCIAL_LINKS = [
  {
    href: "#",
    icon: FaDiscord,
  },
  {
    href: "#",
    icon: FaTwitter,
  },
  {
    href: "#",
    icon: FaYoutube,
  },
  {
    href: "#",
    icon: FaTwitch,
  },
] as const;
