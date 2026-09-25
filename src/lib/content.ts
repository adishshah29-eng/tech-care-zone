// Every fact below is sourced verbatim from content.md (extracted from the
// client's live reference site). Do not invent stats, reviews, or claims.

export const business = {
  name: "Tech Care Zone",
  shortName: "TCZ",
  tagline: "We Fix, We Care, We Innovate",
  phone: "+91 99672 34177",
  phoneHref: "+919967234177",
  whatsappHref: "https://wa.me/919967234177",
  addressLines: [
    "1st Floor, Powai Plaza, 184,",
    "Hiranandani Gardens, Mumbai,",
    "Maharashtra 400076",
  ],
  hours: [
    { days: "Monday – Saturday", time: "10am – 8pm" },
    { days: "Sunday", time: "11am – 6pm" },
  ],
};

export const stats = [
  { value: "5000+", label: "Devices Repaired" },
  { value: "4.9", label: "Customer Rating", suffix: "★" },
  { value: "Same Day", label: "Turnaround" },
  { value: "6 Month", label: "Warranty" },
];

export type Service = {
  id: string;
  tag: string;
  icon: "smartphone" | "battery" | "droplets" | "cpu" | "keyboard" | "hard-drive" | "monitor" | "monitor-cog";
  name: string;
  copy: string;
  spec: string;
};

export const appleServices: Service[] = [
  {
    id: "a1",
    tag: "01",
    icon: "smartphone",
    name: "Screen Replacement",
    copy: "Cracked or broken screen? We replace it with genuine-quality displays for all iPhone, iPad & MacBook models.",
    spec: "All Apple models",
  },
  {
    id: "a2",
    tag: "02",
    icon: "battery",
    name: "Battery Replacement",
    copy: "Poor battery life? We replace with high-quality cells that restore your device's original battery performance.",
    spec: "Same day service",
  },
  {
    id: "a3",
    tag: "03",
    icon: "droplets",
    name: "Water Damage Repair",
    copy: "Dropped in water? Our board-level repair specialists clean, diagnose and restore water damaged devices.",
    spec: "Board-level expertise",
  },
  {
    id: "a4",
    tag: "04",
    icon: "cpu",
    name: "Motherboard Repair",
    copy: "Chip-level repairs for complex motherboard failures in iMac, MacBook and iPhone logic boards.",
    spec: "Chip-level service",
  },
  {
    id: "a5",
    tag: "05",
    icon: "keyboard",
    name: "Keyboard & Trackpad",
    copy: "Keys sticking or trackpad not responding? We repair and replace MacBook keyboards and trackpads.",
    spec: "All MacBook models",
  },
  {
    id: "a6",
    tag: "06",
    icon: "hard-drive",
    name: "SSD & RAM Upgrade",
    copy: "Speed up your Mac with an SSD upgrade or RAM expansion. Faster boot, smoother performance guaranteed.",
    spec: "Performance boost",
  },
];

export const laptopServices: Service[] = [
  {
    id: "l1",
    tag: "07",
    icon: "monitor",
    name: "Laptop Screen Repair",
    copy: "Cracked or dim display? We replace screens for Lenovo, Dell, HP, Acer & Asus laptops with quality panels.",
    spec: "All laptop brands",
  },
  {
    id: "l2",
    tag: "08",
    icon: "battery",
    name: "Laptop Battery Replace",
    copy: "Laptop not holding charge? We replace batteries for all Lenovo, Dell, HP, Acer & Asus laptop models.",
    spec: "Genuine batteries",
  },
  {
    id: "l3",
    tag: "09",
    icon: "cpu",
    name: "Laptop Motherboard Repair",
    copy: "Laptop not turning on or random shutdowns? We do chip-level motherboard repair for all major laptop brands.",
    spec: "Chip-level repair",
  },
  {
    id: "l4",
    tag: "10",
    icon: "keyboard",
    name: "Laptop Keyboard Repair",
    copy: "Broken or stuck keys? We repair and replace keyboards for Lenovo, Dell, HP, Acer & Asus laptops.",
    spec: "Key replacement",
  },
  {
    id: "l5",
    tag: "11",
    icon: "hard-drive",
    name: "SSD / RAM Upgrade",
    copy: "Make your laptop faster with SSD upgrade or RAM expansion. Works on all Lenovo, Dell, HP, Acer & Asus models.",
    spec: "Speed boost",
  },
  {
    id: "l6",
    tag: "12",
    icon: "monitor-cog",
    name: "Windows / OS Issues",
    copy: "Slow Windows, virus, or OS errors? We reinstall, clean and optimize Windows on all laptop brands.",
    spec: "Data safe",
  },
];

export type DeviceEntry = {
  name: string;
  detail: string;
  icon: "smartphone" | "tablet" | "laptop" | "monitor";
};

export const appleDevices: DeviceEntry[] = [
  { name: "iPhone 15 Series", detail: "Screen · Battery · Camera", icon: "smartphone" },
  { name: "iPhone 14 Series", detail: "All repairs available", icon: "smartphone" },
  { name: "iPhone 13 & Older", detail: "Full repair support", icon: "smartphone" },
  { name: "iPad Pro", detail: "Screen · Battery · Port", icon: "tablet" },
  { name: "iPad Air / Mini", detail: "All repairs available", icon: "tablet" },
  { name: "MacBook Pro M1/M2/M3", detail: "Screen · Battery · Board", icon: "laptop" },
  { name: "MacBook Air", detail: "Keyboard · SSD · Battery", icon: "laptop" },
  { name: "iMac 24\" / 27\"", detail: "Screen · RAM · Storage", icon: "monitor" },
];

export const laptopBrands: DeviceEntry[] = [
  { name: "Lenovo", detail: "ThinkPad · IdeaPad · Legion", icon: "laptop" },
  { name: "Dell", detail: "Inspiron · XPS · Latitude", icon: "laptop" },
  { name: "HP", detail: "Pavilion · Envy · EliteBook", icon: "laptop" },
  { name: "Acer", detail: "Aspire · Swift · Nitro", icon: "laptop" },
  { name: "Asus", detail: "VivoBook · ZenBook · ROG", icon: "laptop" },
];

export const whyUs = [
  {
    icon: "shield-check" as const,
    title: "6 Month Warranty",
    copy: "Every repair comes with a 6-month warranty. If it fails, we fix it free — no questions asked.",
  },
  {
    icon: "zap" as const,
    title: "Same Day Repairs",
    copy: "Most repairs are completed within 1–2 hours. Walk in, get it fixed, walk out the same day.",
  },
  {
    icon: "search" as const,
    title: "Free Diagnosis",
    copy: "Not sure what's wrong? We diagnose your device for free with no obligation to repair.",
  },
  {
    icon: "indian-rupee" as const,
    title: "Transparent Pricing",
    copy: "No hidden charges. We show you the cost before we start any repair work on your device.",
  },
];

export const process = [
  {
    step: "01",
    icon: "phone-call" as const,
    title: "Walk In or Call",
    copy: "Visit our shop or call us to describe the issue. We'll give you a quick quote on the spot.",
  },
  {
    step: "02",
    icon: "search" as const,
    title: "Free Diagnosis",
    copy: "Our technician inspects your device and gives you a full diagnosis with repair options.",
  },
  {
    step: "03",
    icon: "wrench" as const,
    title: "Expert Repair",
    copy: "We repair your device using quality parts with precision — most done within 1–2 hours.",
  },
  {
    step: "04",
    icon: "check-circle" as const,
    title: "Quality Check",
    copy: "Device is fully tested before handover. We walk you through everything we fixed.",
  },
];

export const reviews = [
  {
    name: "Rahul Patil",
    place: "Hiranandani Gardens, Powai",
    text: "Excellent service! Got my iPhone 14 screen replaced at Tech Care Zone in Powai. Done in less than an hour, quality is perfect and price was very fair. Highly recommended to everyone in Hiranandani!",
  },
  {
    name: "Priya Sharma",
    place: "Powai, Mumbai",
    text: "My MacBook Pro had water damage and I thought it was completely gone. The team at Tech Care Zone diagnosed and fixed it the same day! Truly experts in Apple repair. Very honest and transparent pricing.",
  },
  {
    name: "Arjun Kulkarni",
    place: "Hiranandani, Mumbai",
    text: "Best Apple repair shop in Powai! Fixed my iMac screen and gave 6 months warranty. The staff is knowledgeable, polite and the shop is very clean and professional. Will definitely come back!",
  },
  {
    name: "Sneha Mehta",
    place: "Powai Plaza, Mumbai",
    text: "Visited for iPad battery replacement. Very quick service and they even did a free health check of my device. Reasonably priced compared to other shops in Mumbai. Great experience overall!",
  },
  {
    name: "Vikram Desai",
    place: "Chandivali, Mumbai",
    text: "My MacBook keyboard was completely dead. They fixed it within 2 hours with genuine parts and even cleaned the whole laptop. Amazing service, very professional team!",
  },
  {
    name: "Neha Joshi",
    place: "Kanjurmarg, Mumbai",
    text: "Trustworthy and skilled technicians. Brought my iPhone that wouldn't turn on — they fixed the charging port and motherboard issue. No data loss, everything works perfectly. 10/10 recommend!",
  },
];

export const deviceOptions = [
  "iPhone",
  "iPad",
  "MacBook",
  "iMac",
  "Lenovo Laptop",
  "Dell Laptop",
  "HP Laptop",
  "Acer Laptop",
  "Asus Laptop",
  "Other Laptop",
];

export const issueOptions = [
  "Screen Damage",
  "Battery Issue",
  "Water Damage",
  "Not Turning On",
  "Software Issue",
  "Keyboard / Trackpad",
  "Other",
];

export const footerLinks = {
  services: [
    "Screen Replacement",
    "Battery Replacement",
    "Water Damage Repair",
    "Motherboard Repair",
    "Keyboard Repair",
    "SSD / RAM Upgrade",
    "Laptop Repair",
    "Windows OS Install",
  ],
  devices: [
    "iPhone Repair",
    "iPad Repair",
    "MacBook Repair",
    "iMac Repair",
    "Lenovo Repair",
    "Dell Repair",
    "HP Repair",
    "Acer / Asus Repair",
  ],
  company: ["About Us", "Why Choose Us", "Reviews", "Contact", "Privacy Policy"],
};

export type BookingFields = {
  name: string;
  phone: string;
  device: string;
  issue: string;
  description: string;
};

export function whatsappBookingUrl(f: BookingFields) {
  const lines = [
    "Hello Tech Care Zone, I'd like to book a repair.",
    "",
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Device: ${f.device}`,
    `Issue: ${f.issue}`,
    ...(f.description.trim() ? [`Details: ${f.description.trim()}`] : []),
  ];
  return `${business.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function readBookingForm(form: HTMLFormElement): BookingFields {
  const fd = new FormData(form);
  const get = (k: string) => String(fd.get(k) ?? "");
  return {
    name: get("name"),
    phone: get("phone"),
    device: get("device"),
    issue: get("issue"),
    description: get("description"),
  };
}
