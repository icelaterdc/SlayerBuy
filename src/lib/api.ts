import axios from 'axios';
import type { DiscordUser, DiscordGuild } from '../types/discord';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function getDiscordUser(code: string): Promise<DiscordUser> {
  const response = await axios.post(`${API_URL}/auth/discord`, { code });
  return response.data;
}

export async function getUserGuilds(): Promise<DiscordGuild[]> {
  const response = await axios.get(`${API_URL}/discord/guilds`, {
    withCredentials: true
  });
  return response.data;
}

export async function checkPremiumStatus(guildId: string): Promise<boolean> {
  try {
    const response = await axios.get(`${API_URL}/premium/status/${guildId}`, {
      withCredentials: true
    });
    return response.data.hasPremium;
  } catch {
    return false;
  }
  }
