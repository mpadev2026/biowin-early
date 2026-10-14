import productsData from '@/data/products.json'
import articlesData from '@/data/articles.json'
import distributorsData from '@/data/distributors.json'
import type { Product, Article, Distributor } from '@/types'

export const products: Product[] = productsData as Product[]
export const articles: Article[] = articlesData as Article[]
export const distributors: Distributor[] = distributorsData as Distributor[]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getLatestArticles(count = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category)
}

export function getProductCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)))
}

export function getArticleCategories(): string[] {
  return Array.from(new Set(articles.map((a) => a.category)))
}

export function getDistributorRegions(): string[] {
  return Array.from(new Set(distributors.map((d) => d.region)))
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug))
}
