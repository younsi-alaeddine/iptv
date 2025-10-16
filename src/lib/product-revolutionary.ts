// ===== SYSTÈME DE GESTION DES PRODUITS RÉVOLUTIONNAIRE =====
// Gestion Intelligente des Produits Digitaux et Physiques

import { prisma } from "./prisma";
import { ProductType, DigitalType, ProductStatus } from "@prisma/client";

// ===== TYPES RÉVOLUTIONNAIRES =====
export interface ProductData {
  // Informations de base
  sku: string;
  name: string;
  description?: string;
  type: ProductType;
  categoryName: string;
  subcategory?: string;
  
  // Prix et stock
  price: number;
  originalPrice?: number;
  cost?: number;
  margin?: number;
  stock?: number;
  minStock?: number;
  maxStock?: number;
  
  // Contenu digital
  digitalContent?: {
    type: DigitalType;
    content: string;
    accessKey?: string;
    expiryDate?: Date;
    downloadLimit?: number;
    isEncrypted?: boolean;
    encryptionKey?: string;
  };
  
  // Spécifications physiques
  physicalSpecs?: {
    weight?: number;
    dimensions?: string; // JSON: {length, width, height}
    material?: string;
    color?: string;
    size?: string;
    brand?: string;
    model?: string;
    warranty?: string;
  };
  
  // Médias
  images?: Array<{
    url: string;
    alt?: string;
    isPrimary?: boolean;
  }>;
  
  videos?: Array<{
    url: string;
    title?: string;
    description?: string;
    duration?: number;
    isPrimary?: boolean;
  }>;
  
  // SEO et marketing
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface ProductFilters {
  type?: ProductType;
  categoryId?: string;
  status?: ProductStatus;
  isActive?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  priceMin?: number;
  priceMax?: number;
  search?: string;
  tags?: string[];
}

export interface ProductSearchResult {
  products: any[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// ===== GESTIONNAIRE DE PRODUITS RÉVOLUTIONNAIRE =====
export class RevolutionaryProductManager {
  
  // ===== CRÉATION DE PRODUITS =====
  static async createProduct(
    tenantId: string,
    categoryId: string,
    productData: ProductData
  ) {
    try {
      // Création du produit principal
      const product = await prisma.product.create({
        data: {
          tenantId,
          categoryId,
          sku: productData.sku,
          name: productData.name,
          description: productData.description,
          type: productData.type,
          categoryName: productData.categoryName,
          subcategory: productData.subcategory,
          price: productData.price,
          originalPrice: productData.originalPrice,
          cost: productData.cost,
          margin: productData.margin,
          stock: productData.stock || 0,
          minStock: productData.minStock || 0,
          maxStock: productData.maxStock,
          seoTitle: productData.seoTitle,
          seoDescription: productData.seoDescription,
          tags: productData.tags?.join(',') || '',
          isFeatured: productData.isFeatured || false,
          isPopular: productData.isPopular || false,
          isNew: productData.isNew || false,
          status: 'ACTIVE',
          isActive: true
        }
      });

      // Création du contenu digital si nécessaire
      if (productData.digitalContent && productData.type === 'DIGITAL') {
        await prisma.digitalContent.create({
          data: {
            productId: product.id,
            type: productData.digitalContent.type,
            content: productData.digitalContent.content,
            accessKey: productData.digitalContent.accessKey,
            expiryDate: productData.digitalContent.expiryDate,
            downloadLimit: productData.digitalContent.downloadLimit,
            isEncrypted: productData.digitalContent.isEncrypted || false,
            encryptionKey: productData.digitalContent.encryptionKey
          }
        });
      }

      // Création des spécifications physiques si nécessaire
      if (productData.physicalSpecs && productData.type === 'PHYSICAL') {
        await prisma.physicalSpecs.create({
          data: {
            productId: product.id,
            weight: productData.physicalSpecs.weight,
            dimensions: productData.physicalSpecs.dimensions,
            material: productData.physicalSpecs.material,
            color: productData.physicalSpecs.color,
            size: productData.physicalSpecs.size,
            brand: productData.physicalSpecs.brand,
            model: productData.physicalSpecs.model,
            warranty: productData.physicalSpecs.warranty
          }
        });
      }

      // Création des images
      if (productData.images && productData.images.length > 0) {
        for (let i = 0; i < productData.images.length; i++) {
          const image = productData.images[i];
          await prisma.productImage.create({
            data: {
              productId: product.id,
              url: image.url,
              alt: image.alt,
              isPrimary: image.isPrimary || i === 0,
              sortOrder: i
            }
          });
        }
      }

      // Création des vidéos
      if (productData.videos && productData.videos.length > 0) {
        for (let i = 0; i < productData.videos.length; i++) {
          const video = productData.videos[i];
          await prisma.productVideo.create({
            data: {
              productId: product.id,
              url: video.url,
              title: video.title,
              description: video.description,
              duration: video.duration,
              isPrimary: video.isPrimary || i === 0
            }
          });
        }
      }

      return await this.getProductById(product.id);
    } catch (error) {
      throw new Error(`Erreur lors de la création du produit: ${error}`);
    }
  }

  // ===== RÉCUPÉRATION DE PRODUITS =====
  static async getProductById(productId: string) {
    return await prisma.product.findUnique({
      where: { id: productId },
      include: {
        digitalContent: true,
        physicalSpecs: true,
        images: { orderBy: { sortOrder: 'asc' } },
        videos: { orderBy: { isPrimary: 'desc' } },
        category: true,
        tenant: true,
        reviews: {
          include: { user: true },
          where: { isActive: true }
        }
      }
    });
  }

  static async getProductsByTenant(
    tenantId: string,
    filters: ProductFilters = {},
    page: number = 1,
    limit: number = 20
  ): Promise<ProductSearchResult> {
    const skip = (page - 1) * limit;
    
    const where: any = {
      tenantId,
      isActive: filters.isActive !== undefined ? filters.isActive : true
    };

    // Filtres avancés
    if (filters.type) where.type = filters.type;
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.status) where.status = filters.status;
    if (filters.isFeatured !== undefined) where.isFeatured = filters.isFeatured;
    if (filters.isPopular !== undefined) where.isPopular = filters.isPopular;
    if (filters.isNew !== undefined) where.isNew = filters.isNew;
    
    if (filters.priceMin || filters.priceMax) {
      where.price = {};
      if (filters.priceMin) where.price.gte = filters.priceMin;
      if (filters.priceMax) where.price.lte = filters.priceMax;
    }
    
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
        { tags: { contains: filters.search, mode: 'insensitive' } }
      ];
    }
    
    if (filters.tags && filters.tags.length > 0) {
      where.tags = {
        in: filters.tags
      };
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          digitalContent: true,
          physicalSpecs: true,
          images: { orderBy: { sortOrder: 'asc' } },
          videos: { orderBy: { isPrimary: 'desc' } },
          category: true,
          reviews: {
            where: { isActive: true },
            select: { rating: true }
          }
        },
        orderBy: [
          { isFeatured: 'desc' },
          { isPopular: 'desc' },
          { createdAt: 'desc' }
        ],
        skip,
        take: limit
      }),
      prisma.product.count({ where })
    ]);

    return {
      products,
      total,
      page,
      limit,
      hasMore: skip + limit < total
    };
  }

  // ===== RECHERCHE INTELLIGENTE =====
  static async searchProducts(
    tenantId: string,
    query: string,
    filters: ProductFilters = {},
    page: number = 1,
    limit: number = 20
  ): Promise<ProductSearchResult> {
    const searchFilters = {
      ...filters,
      search: query
    };
    
    return await this.getProductsByTenant(tenantId, searchFilters, page, limit);
  }

  // ===== PRODUITS RECOMMANDÉS =====
  static async getRecommendedProducts(
    tenantId: string,
    userId?: string,
    limit: number = 10
  ) {
    // Logique de recommandation basée sur l'historique et les préférences
    const products = await prisma.product.findMany({
      where: {
        tenantId,
        isActive: true,
        status: 'ACTIVE',
        OR: [
          { isFeatured: true },
          { isPopular: true },
          { isNew: true }
        ]
      },
      include: {
        digitalContent: true,
        physicalSpecs: true,
        images: { orderBy: { sortOrder: 'asc' } },
        category: true,
        reviews: {
          where: { isActive: true },
          select: { rating: true }
        }
      },
      orderBy: [
        { isFeatured: 'desc' },
        { isPopular: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit
    });

    return products;
  }

  // ===== GESTION DU STOCK =====
  static async updateStock(productId: string, quantity: number, operation: 'add' | 'subtract' | 'set' = 'set') {
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      throw new Error('Produit non trouvé');
    }

    let newStock = product.stock;
    
    switch (operation) {
      case 'add':
        newStock += quantity;
        break;
      case 'subtract':
        newStock = Math.max(0, newStock - quantity);
        break;
      case 'set':
        newStock = Math.max(0, quantity);
        break;
    }

    return await prisma.product.update({
      where: { id: productId },
      data: { stock: newStock }
    });
  }

  // ===== GESTION DES CATÉGORIES =====
  static async createCategory(
    tenantId: string,
    name: string,
    slug: string,
    description?: string,
    parentId?: string
  ) {
    return await prisma.category.create({
      data: {
        tenantId,
        name,
        slug,
        description,
        parentId
      }
    });
  }

  static async getCategoriesByTenant(tenantId: string, includeProducts: boolean = false) {
    return await prisma.category.findMany({
      where: {
        tenantId,
        isActive: true
      },
      include: {
        children: true,
        products: includeProducts ? {
          where: { isActive: true, status: 'ACTIVE' },
          select: { id: true, name: true, price: true, images: { where: { isPrimary: true } } }
        } : false
      },
      orderBy: { sortOrder: 'asc' }
    });
  }

  // ===== ANALYTICS DES PRODUITS =====
  static async getProductAnalytics(tenantId: string, productId?: string) {
    const where: any = { tenantId };
    if (productId) where.productId = productId;

    const [totalProducts, activeProducts, digitalProducts, physicalProducts] = await Promise.all([
      prisma.product.count({ where: { tenantId } }),
      prisma.product.count({ where: { tenantId, isActive: true } }),
      prisma.product.count({ where: { tenantId, type: 'DIGITAL' } }),
      prisma.product.count({ where: { tenantId, type: 'PHYSICAL' } })
    ]);

    const topProducts = await prisma.product.findMany({
      where: { tenantId, isActive: true },
      include: {
        orderItems: {
          select: { quantity: true }
        }
      },
      orderBy: { isPopular: 'desc' },
      take: 10
    });

    return {
      totalProducts,
      activeProducts,
      digitalProducts,
      physicalProducts,
      topProducts: topProducts.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        totalSales: p.orderItems.reduce((sum, item) => sum + item.quantity, 0)
      }))
    };
  }

  // ===== GESTION DES MÉDIAS =====
  static async addProductImage(productId: string, url: string, alt?: string, isPrimary: boolean = false) {
    return await prisma.productImage.create({
      data: {
        productId,
        url,
        alt,
        isPrimary
      }
    });
  }

  static async addProductVideo(productId: string, url: string, title?: string, description?: string, duration?: number) {
    return await prisma.productVideo.create({
      data: {
        productId,
        url,
        title,
        description,
        duration
      }
    });
  }

  // ===== MISE À JOUR DE PRODUIT =====
  static async updateProduct(productId: string, updateData: Partial<ProductData>) {
    const updateFields: any = {};
    
    // Mise à jour des champs de base
    if (updateData.name) updateFields.name = updateData.name;
    if (updateData.description) updateFields.description = updateData.description;
    if (updateData.price) updateFields.price = updateData.price;
    if (updateData.originalPrice) updateFields.originalPrice = updateData.originalPrice;
    if (updateData.stock !== undefined) updateFields.stock = updateData.stock;
    if (updateData.isFeatured !== undefined) updateFields.isFeatured = updateData.isFeatured;
    if (updateData.isPopular !== undefined) updateFields.isPopular = updateData.isPopular;
    if (updateData.isNew !== undefined) updateFields.isNew = updateData.isNew;

    return await prisma.product.update({
      where: { id: productId },
      data: updateFields
    });
  }

  // ===== SUPPRESSION DE PRODUIT =====
  static async deleteProduct(productId: string, softDelete: boolean = true) {
    if (softDelete) {
      return await prisma.product.update({
        where: { id: productId },
        data: { isActive: false, status: 'ARCHIVED' }
      });
    } else {
      // Suppression en cascade
      await prisma.productImage.deleteMany({ where: { productId } });
      await prisma.productVideo.deleteMany({ where: { productId } });
      await prisma.digitalContent.deleteMany({ where: { productId } });
      await prisma.physicalSpecs.deleteMany({ where: { productId } });
      await prisma.review.deleteMany({ where: { productId } });
      
      return await prisma.product.delete({
        where: { id: productId }
      });
    }
  }
}

// ===== GESTIONNAIRE DE CONTENU DIGITAL =====
export class DigitalContentManager {
  static async generateAccessKey(): Promise<string> {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  static async encryptContent(content: string, _key: string): Promise<string> {
    // Implémentation du chiffrement (à adapter selon les besoins)
    return Buffer.from(content).toString('base64');
  }

  static async decryptContent(encryptedContent: string, _key: string): Promise<string> {
    // Implémentation du déchiffrement (à adapter selon les besoins)
    return Buffer.from(encryptedContent, 'base64').toString();
  }

  static async trackDownload(productId: string, _userId: string) {
    const digitalContent = await prisma.digitalContent.findUnique({
      where: { productId }
    });

    if (digitalContent) {
      await prisma.digitalContent.update({
        where: { productId },
        data: {
          downloadCount: digitalContent.downloadCount + 1
        }
      });
    }
  }
}

// ===== GESTIONNAIRE DE SPÉCIFICATIONS PHYSIQUES =====
export class PhysicalSpecsManager {
  static async calculateShippingWeight(productId: string): Promise<number> {
    const specs = await prisma.physicalSpecs.findUnique({
      where: { productId }
    });

    return Number(specs?.weight) || 0;
  }

  static async getDimensions(productId: string): Promise<{length: number, width: number, height: number} | null> {
    const specs = await prisma.physicalSpecs.findUnique({
      where: { productId }
    });

    if (specs?.dimensions) {
      try {
        return JSON.parse(specs.dimensions);
      } catch {
        return null;
      }
    }

    return null;
  }
}

export { ProductType, DigitalType, ProductStatus } from "@prisma/client";
