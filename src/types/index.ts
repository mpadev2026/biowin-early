export interface Product {
  id: string
  slug: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  usageInstructions: string
  specifications: { label: string; value: string }[]
  documents: { name: string; url: string }[]
  faq: { question: string; answer: string }[]
  relatedProductSlugs: string[]
  imagePlaceholder: string
  featured: boolean
}

export interface Article {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  content: string
  relatedProductSlugs: string[]
  publishedAt: string
  imagePlaceholder: string
}

export interface Distributor {
  id: string
  name: string
  city: string
  region: string
  address: string
  phone: string
  whatsapp: string
  email: string
}
