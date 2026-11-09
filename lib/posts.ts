import fs from 'fs';
import path from 'path';

export type ArticleLayoutVariant =
  | 'geo-lima-huarique'
  | 'geo-provincia-tradicion'
  | 'geo-peruano-exterior'
  | 'ficha-comanda-chef'
  | 'cronograma-fuego'
  | 'calculadora-presupuesto'
  | 'laboratorio-nutricional'
  | 'duelo-insumos-rescate';

export type DomSkeletonVariant =
  | 'direct-answer-diagnostic'
  | 'story-and-masterclass'
  | 'comparison-matrix-first'
  | 'market-to-table-planner'
  | 'local-directory-guide'
  | 'encyclopedic-glossary';

export type SchemaTypeVariant =
  | 'Recipe'
  | 'HowTo'
  | 'ItemList'
  | 'BlogPosting';

export interface GeoCulinaryInfo {
  locationName: string;
  regionLabel: string;
  marketsNote: string;
  emblemDish: string;
  priceRange: string;
  climateTip: string;
}

export interface WorldDiasporaInfo {
  locationName: string;
  flag: string;
  supermarkets: string;
  localSubstitute: string;
  cutEquivalent: string;
  currency: string;
}

export interface ChefCommandMeta {
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  keyTool: string;
  tempNote: string;
}

export interface TimelineStage {
  phase: string;
  title: string;
  pct: string;
  detail: string;
}

export interface BudgetPlannerInfo {
  totalBudgetSoles: string;
  costPerPortion: string;
  servings: string;
  bestSeason: string;
  taperLife: string;
  savingsNote: string;
}

export interface NutritionLabInfo {
  ironMg: string;
  proteinG: string;
  caloriesKcal: string;
  glycemicIndex: string;
  targetGroup: string;
  minsaNote: string;
}

export interface CulinaryComparisonInfo {
  optionA: {
    name: string;
    badge: string;
    score: string;
    points: string[];
  };
  optionB: {
    name: string;
    badge: string;
    score: string;
    points: string[];
  };
  verdict: string;
}

export interface RecipeSchemaPayload {
  prepTimeISO: string;
  cookTimeISO: string;
  totalTimeISO: string;
  recipeYield: string;
  calories: string;
  ingredients: string[];
  instructions: { name: string; text: string }[];
}

export interface Post {
  slug: string;
  title: string;
  seoTitle?: string;
  category: string;
  categoryName: string;
  date: string;
  updatedAt?: string;
  readTime?: string;
  excerpt: string;
  featuredImage: string;
  secondaryImage?: string;
  content?: string;
  isGenerated2026?: boolean;
  layoutVariant?: ArticleLayoutVariant;
  domSkeleton?: DomSkeletonVariant;
  schemaType?: SchemaTypeVariant;
  badgeLabel?: string;
  focusKeyword?: string;
  keywords?: string[];
  keyTakeaways?: string[];
  toc?: { id: string; label: string }[];
  faqs?: { question: string; answer: string }[];
  geoInfo?: GeoCulinaryInfo;
  worldInfo?: WorldDiasporaInfo;
  chefMeta?: ChefCommandMeta;
  timelineSteps?: TimelineStage[];
  budgetInfo?: BudgetPlannerInfo;
  nutritionInfo?: NutritionLabInfo;
  comparisonInfo?: CulinaryComparisonInfo;
  recipeSchemaData?: RecipeSchemaPayload;
}

export interface Category {
  slug: string;
  name: string;
  count: number;
  description?: string;
}

const contentDir = path.join(process.cwd(), 'content');

let allPostsCache: Post[] | null = null;
let categoriesCache: Category[] | null = null;

export function getAllPosts(): Post[] {
  if (allPostsCache) return allPostsCache;
  const filePath = path.join(contentDir, 'index.json');
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    allPostsCache = JSON.parse(fileContents);
    return allPostsCache as Post[];
  }
  return [];
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDir, 'posts', `${slug}.json`);
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  }
  return null;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.category === category);
}

export function getCategories(): Category[] {
  if (categoriesCache) return categoriesCache;
  const filePath = path.join(contentDir, 'categories.json');
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    categoriesCache = JSON.parse(fileContents);
    return categoriesCache as Category[];
  }
  return [];
}

export function getRelatedPosts(category: string, currentSlug: string, limit: number = 4): Post[] {
  const categoryPosts = getPostsByCategory(category).filter(post => post.slug !== currentSlug);
  if (categoryPosts.length <= limit) return categoryPosts;

  // Deterministic rotation based on currentSlug so every post links to a unique subset
  let hash = 0;
  for (let i = 0; i < currentSlug.length; i++) {
    hash = (hash * 31 + currentSlug.charCodeAt(i)) >>> 0;
  }
  const start = hash % categoryPosts.length;
  const picked: Post[] = [];
  for (let i = 0; i < categoryPosts.length && picked.length < limit; i++) {
    picked.push(categoryPosts[(start + i * 3) % categoryPosts.length]);
  }
  return picked;
}
