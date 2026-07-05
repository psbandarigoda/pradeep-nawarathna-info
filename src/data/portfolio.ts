export type Platform = "youtube" | "instagram";

export interface PortfolioItem {
  id: number;
  title: string;
  role: string;
  platform: Platform;
  url: string;
  videoId?: string;
  loved?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "YouTube Project",
    role: "Script Writer and Director",
    platform: "youtube",
    url: "https://youtu.be/HXD4J7cB2m0?si=2i21-qOcpKY2C-TQ",
    videoId: "HXD4J7cB2m0",
    loved: true,
  },
  {
    id: 2,
    title: "YouTube Project",
    role: "Creative Director",
    platform: "youtube",
    url: "https://youtu.be/ZkQWj2Lh8Fc?si=yektuWhU7q_XF5Kt",
    videoId: "ZkQWj2Lh8Fc",
    loved: true,
  },
  {
    id: 3,
    title: "YouTube Project",
    role: "Creative Director",
    platform: "youtube",
    url: "https://youtu.be/ezvtACZAqRU?si=119MI4o2ewwDHDfL",
    videoId: "ezvtACZAqRU",
    loved: true,
  },
  {
    id: 4,
    title: "YouTube Project",
    role: "Company Theme Song / Lyrics Writer",
    platform: "youtube",
    url: "https://youtu.be/Va4PPbky6to?si=EZc3Bc4yAvUhWmfo",
    videoId: "Va4PPbky6to",
  },
  {
    id: 5,
    title: "YouTube Project",
    role: "Lyrics and Music Video Direction",
    platform: "youtube",
    url: "https://youtu.be/vu-RFXlynBw?si=irqiqXYqqIdFwFsz",
    videoId: "vu-RFXlynBw",
    loved: true,
  },
  {
    id: 6,
    title: "Instagram Reel",
    role: "Amore Clothing Brand - Script and Director",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DE9kgXZuhYq/?igsh=ZzRjNXc2Zmw1bDds",
    loved: true,
  },
  {
    id: 7,
    title: "Instagram Reel",
    role: "Mobile Advertising - Concept and Director",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DDhf8ztNzzR/?igsh=MTQzenowODF5Mm1mMA==",
    loved: true,
  },
  {
    id: 8,
    title: "Instagram Reel",
    role: "BTS",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DX374wRsWmB/?igsh=eGpxdTQyN3l0Zzcw",
  },
  {
    id: 9,
    title: "Instagram Reel",
    role: "BTS Web Photo Shoot",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DK9ZX6ChAJQ/?igsh=MWdpaDQwZWN3cjUwcg==",
  },
  {
    id: 10,
    title: "Instagram Reel",
    role: "Digital Video BTS",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DCRbcPrIPfT/?igsh=OW1ubzVyZGFncXFz",
  },
];
