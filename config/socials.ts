import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ahmed-khlif",
    icon: Icons.gitHub,
    link: "https://github.com/ahmed-khlif",
  },
  {
    name: "LinkedIn",
    username: "Ahmed Khlif",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ahmed-khlif",
  },
  {
    name: "WhatsApp",
    username: "+216 94 272 455",
    icon: Icons.whatsapp,
    link: "https://wa.me/21694272455",
  },
  {
    name: "Gmail",
    username: "khlif.ahmed.dev",
    icon: Icons.gmail,
    link: "mailto:khlif.ahmed.dev@gmail.com",
  },
];
