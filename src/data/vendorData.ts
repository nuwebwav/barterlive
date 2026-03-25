// Vendor Categories (20 categories from SEO sitemap)
export interface VendorCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: VendorCategory[] = [
  { name: "Steel Suppliers", slug: "steel-suppliers", description: "Find top steel suppliers, TMT bars, structural steel & reinforcement steel vendors", icon: "🏗️" },
  { name: "RMC Suppliers", slug: "rmc-suppliers", description: "Ready Mix Concrete suppliers, batching plants & RMC delivery services", icon: "🧱" },
  { name: "Cement Suppliers", slug: "cement-suppliers", description: "Leading cement dealers, OPC & PPC cement brands and bulk suppliers", icon: "🏭" },
  { name: "Railings Suppliers", slug: "railings-suppliers", description: "Stainless steel, glass & iron railing manufacturers and suppliers", icon: "🔩" },
  { name: "Tiles Suppliers", slug: "tiles-suppliers", description: "Ceramic, vitrified, porcelain & natural stone tile dealers", icon: "🔲" },
  { name: "Electrical Suppliers", slug: "electrical-suppliers", description: "Electrical wiring, switches, panels, cables & lighting suppliers", icon: "⚡" },
  { name: "Plumbing Suppliers", slug: "plumbing-suppliers", description: "Pipes, fittings, sanitary ware, bathroom fixtures & plumbing suppliers", icon: "🔧" },
  { name: "Paint Suppliers", slug: "paint-suppliers", description: "Interior & exterior paints, primers, coatings & waterproof paint dealers", icon: "🎨" },
  { name: "Glass Suppliers", slug: "glass-suppliers", description: "Tempered, laminated, insulated & architectural glass suppliers", icon: "🪟" },
  { name: "Wood & Timber Suppliers", slug: "wood-timber-suppliers", description: "Plywood, hardwood, softwood, MDF & timber suppliers", icon: "🪵" },
  { name: "Sand & Aggregates", slug: "sand-aggregates-suppliers", description: "River sand, M-sand, crushed stone, gravel & aggregate suppliers", icon: "⛰️" },
  { name: "Waterproofing Suppliers", slug: "waterproofing-suppliers", description: "Waterproofing chemicals, membranes, coatings & sealant suppliers", icon: "💧" },
  { name: "HVAC Suppliers", slug: "hvac-suppliers", description: "Air conditioning, ventilation, ducting & HVAC equipment suppliers", icon: "❄️" },
  { name: "Hardware & Fittings", slug: "hardware-fittings-suppliers", description: "Door handles, hinges, locks, brackets & construction hardware dealers", icon: "🔨" },
  { name: "Flooring Materials", slug: "flooring-materials-suppliers", description: "Marble, granite, vinyl, wooden & epoxy flooring material suppliers", icon: "🏠" },
  { name: "Bricks & Blocks", slug: "bricks-blocks-suppliers", description: "AAC blocks, fly ash bricks, concrete blocks & clay brick suppliers", icon: "🧱" },
  { name: "Insulation Materials", slug: "insulation-materials-suppliers", description: "Thermal insulation, acoustic insulation & fireproofing material suppliers", icon: "🛡️" },
  { name: "Roofing Materials", slug: "roofing-materials-suppliers", description: "Metal roofing sheets, clay tiles, polycarbonate & roofing accessories", icon: "🏡" },
  { name: "Scaffolding & Formwork", slug: "scaffolding-formwork-suppliers", description: "Scaffolding pipes, formwork systems, props & shuttering material suppliers", icon: "🏗️" },
  { name: "Ready-Made Doors & Windows", slug: "doors-windows-suppliers", description: "UPVC, aluminium, wooden doors & windows manufacturers and dealers", icon: "🚪" },
];

export const categorySlugs = categories.map((c) => c.slug);

// India States (21 states)
export interface StateData {
  name: string;
  slug: string;
  cities: CityData[];
}

export interface CityData {
  name: string;
  slug: string;
}

export const indiaStates: StateData[] = [
  {
    name: "Maharashtra", slug: "maharashtra",
    cities: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "Pune", slug: "pune" },
      { name: "Nagpur", slug: "nagpur" },
      { name: "Nashik", slug: "nashik" },
      { name: "Aurangabad", slug: "aurangabad" },
      { name: "Thane", slug: "thane" },
      { name: "Navi Mumbai", slug: "navi-mumbai" },
    ],
  },
  {
    name: "Karnataka", slug: "karnataka",
    cities: [
      { name: "Bangalore", slug: "bangalore" },
      { name: "Mysore", slug: "mysore" },
      { name: "Mangalore", slug: "mangalore" },
      { name: "Hubli", slug: "hubli" },
      { name: "Belgaum", slug: "belgaum" },
    ],
  },
  {
    name: "Tamil Nadu", slug: "tamil-nadu",
    cities: [
      { name: "Chennai", slug: "chennai" },
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Madurai", slug: "madurai" },
      { name: "Salem", slug: "salem" },
      { name: "Tiruchirappalli", slug: "tiruchirappalli" },
    ],
  },
  {
    name: "Telangana", slug: "telangana",
    cities: [
      { name: "Hyderabad", slug: "hyderabad" },
      { name: "Warangal", slug: "warangal" },
      { name: "Nizamabad", slug: "nizamabad" },
      { name: "Karimnagar", slug: "karimnagar" },
    ],
  },
  {
    name: "Gujarat", slug: "gujarat",
    cities: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Surat", slug: "surat" },
      { name: "Vadodara", slug: "vadodara" },
      { name: "Rajkot", slug: "rajkot" },
      { name: "Gandhinagar", slug: "gandhinagar" },
    ],
  },
  {
    name: "Rajasthan", slug: "rajasthan",
    cities: [
      { name: "Jaipur", slug: "jaipur" },
      { name: "Jodhpur", slug: "jodhpur" },
      { name: "Udaipur", slug: "udaipur" },
      { name: "Kota", slug: "kota" },
      { name: "Ajmer", slug: "ajmer" },
    ],
  },
  {
    name: "Uttar Pradesh", slug: "uttar-pradesh",
    cities: [
      { name: "Noida", slug: "noida" },
      { name: "Lucknow", slug: "lucknow" },
      { name: "Agra", slug: "agra" },
      { name: "Kanpur", slug: "kanpur" },
      { name: "Varanasi", slug: "varanasi" },
      { name: "Ghaziabad", slug: "ghaziabad" },
      { name: "Meerut", slug: "meerut" },
    ],
  },
  {
    name: "West Bengal", slug: "west-bengal",
    cities: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Howrah", slug: "howrah" },
      { name: "Durgapur", slug: "durgapur" },
      { name: "Siliguri", slug: "siliguri" },
    ],
  },
  {
    name: "Kerala", slug: "kerala",
    cities: [
      { name: "Kochi", slug: "kochi" },
      { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
      { name: "Kozhikode", slug: "kozhikode" },
    ],
  },
  {
    name: "Madhya Pradesh", slug: "madhya-pradesh",
    cities: [
      { name: "Bhopal", slug: "bhopal" },
      { name: "Indore", slug: "indore" },
      { name: "Jabalpur", slug: "jabalpur" },
      { name: "Gwalior", slug: "gwalior" },
    ],
  },
  {
    name: "Punjab", slug: "punjab",
    cities: [
      { name: "Ludhiana", slug: "ludhiana" },
      { name: "Amritsar", slug: "amritsar" },
      { name: "Jalandhar", slug: "jalandhar" },
      { name: "Patiala", slug: "patiala" },
    ],
  },
  {
    name: "Haryana", slug: "haryana",
    cities: [
      { name: "Gurugram", slug: "gurugram" },
      { name: "Faridabad", slug: "faridabad" },
      { name: "Panipat", slug: "panipat" },
      { name: "Ambala", slug: "ambala" },
    ],
  },
  {
    name: "Delhi NCR", slug: "delhi-ncr",
    cities: [
      { name: "New Delhi", slug: "new-delhi" },
      { name: "Dwarka", slug: "dwarka" },
      { name: "Rohini", slug: "rohini" },
    ],
  },
  {
    name: "Odisha", slug: "odisha",
    cities: [
      { name: "Bhubaneswar", slug: "bhubaneswar" },
      { name: "Cuttack", slug: "cuttack" },
      { name: "Rourkela", slug: "rourkela" },
    ],
  },
  {
    name: "Bihar", slug: "bihar",
    cities: [
      { name: "Patna", slug: "patna" },
      { name: "Gaya", slug: "gaya" },
      { name: "Muzaffarpur", slug: "muzaffarpur" },
    ],
  },
  {
    name: "Jharkhand", slug: "jharkhand",
    cities: [
      { name: "Ranchi", slug: "ranchi" },
      { name: "Jamshedpur", slug: "jamshedpur" },
      { name: "Dhanbad", slug: "dhanbad" },
    ],
  },
  {
    name: "Chhattisgarh", slug: "chhattisgarh",
    cities: [
      { name: "Raipur", slug: "raipur" },
      { name: "Bhilai", slug: "bhilai" },
      { name: "Bilaspur", slug: "bilaspur" },
    ],
  },
  {
    name: "Assam", slug: "assam",
    cities: [
      { name: "Guwahati", slug: "guwahati" },
      { name: "Silchar", slug: "silchar" },
    ],
  },
  {
    name: "Uttarakhand", slug: "uttarakhand",
    cities: [
      { name: "Dehradun", slug: "dehradun" },
      { name: "Haridwar", slug: "haridwar" },
    ],
  },
  {
    name: "Goa", slug: "goa",
    cities: [
      { name: "Panaji", slug: "panaji" },
      { name: "Margao", slug: "margao" },
    ],
  },
  {
    name: "Andhra Pradesh", slug: "andhra-pradesh",
    cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam" },
      { name: "Vijayawada", slug: "vijayawada" },
      { name: "Tirupati", slug: "tirupati" },
      { name: "Guntur", slug: "guntur" },
    ],
  },
];

// UAE Emirates (7 emirates)
export const uaeEmirates: StateData[] = [
  {
    name: "Dubai", slug: "dubai",
    cities: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Jumeirah", slug: "jumeirah" },
      { name: "Business Bay", slug: "business-bay" },
    ],
  },
  {
    name: "Abu Dhabi", slug: "abu-dhabi",
    cities: [
      { name: "Al Reem Island", slug: "al-reem-island" },
      { name: "Yas Island", slug: "yas-island" },
    ],
  },
  {
    name: "Sharjah", slug: "sharjah",
    cities: [
      { name: "Al Nahda", slug: "al-nahda" },
      { name: "Al Majaz", slug: "al-majaz" },
    ],
  },
  {
    name: "Ajman", slug: "ajman",
    cities: [
      { name: "Al Jurf", slug: "al-jurf" },
    ],
  },
  {
    name: "Ras Al Khaimah", slug: "ras-al-khaimah",
    cities: [
      { name: "Al Hamra", slug: "al-hamra" },
    ],
  },
  {
    name: "Fujairah", slug: "fujairah",
    cities: [
      { name: "Fujairah City", slug: "fujairah-city" },
    ],
  },
  {
    name: "Umm Al Quwain", slug: "umm-al-quwain",
    cities: [
      { name: "UAQ City", slug: "uaq-city" },
    ],
  },
];

// Country definitions
export interface CountryData {
  name: string;
  slug: string;
  states: StateData[];
}

export const countries: CountryData[] = [
  { name: "India", slug: "india", states: indiaStates },
  { name: "UAE", slug: "uae", states: uaeEmirates },
];

// Helper functions
const normalizeSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").trim();

export function findCountry(slug: string) {
  const norm = normalizeSlug(slug || "");
  return countries.find((c) => c.slug === norm);
}

export function findState(countrySlug: string, stateSlug: string) {
  const country = findCountry(countrySlug);
  const normState = normalizeSlug(stateSlug || "");
  return country?.states.find((s) => s.slug === normState);
}

export function findCity(countrySlug: string, stateSlug: string, citySlug: string) {
  const state = findState(countrySlug, stateSlug);
  const normCity = normalizeSlug(citySlug || "");
  return state?.cities.find((c) => c.slug === normCity);
}

export function findCategory(slug: string) {
  const norm = normalizeSlug(slug || "");
  return categories.find((c) => c.slug === norm);
}

export function isCategory(slug: string) {
  const norm = normalizeSlug(slug || "");
  return categorySlugs.includes(norm);
}

// Total pages count
export function getTotalPages() {
  let total = 1; // homepage
  total += countries.length; // country pages
  total += countries.reduce((sum, c) => sum + c.states.length, 0); // state pages
  total += countries.reduce((sum, c) => sum + c.states.length * categories.length, 0); // state+category
  total += countries.reduce((sum, c) => sum + c.states.reduce((s2, st) => s2 + st.cities.length, 0), 0); // city pages
  total += countries.reduce((sum, c) => sum + c.states.reduce((s2, st) => s2 + st.cities.length * categories.length, 0), 0); // city+category
  total += categories.length; // global category pages
  return total;
}
