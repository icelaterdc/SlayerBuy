export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  guilds: DiscordGuild[];
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface PremiumPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  }
