import {
  Smartphone,
  BatteryCharging,
  Droplets,
  Cpu,
  Keyboard,
  HardDrive,
  Monitor,
  MonitorCog,
  Tablet,
  Laptop,
  ShieldCheck,
  Zap,
  Search,
  IndianRupee,
  PhoneCall,
  Wrench,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Menu,
  X,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  battery: BatteryCharging,
  droplets: Droplets,
  cpu: Cpu,
  keyboard: Keyboard,
  "hard-drive": HardDrive,
  monitor: Monitor,
  "monitor-cog": MonitorCog,
};

export const deviceIconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  monitor: Monitor,
};

export const whyUsIconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  zap: Zap,
  search: Search,
  "indian-rupee": IndianRupee,
};

export const processIconMap: Record<string, LucideIcon> = {
  "phone-call": PhoneCall,
  search: Search,
  wrench: Wrench,
  "check-circle": CheckCircle2,
};

export {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Menu,
  X,
  ArrowRight,
};
