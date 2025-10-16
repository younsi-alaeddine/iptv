// ===== SYSTÈME D'AUTHENTIFICATION RÉVOLUTIONNAIRE =====
// Gestion Multi-Tenant avec Rôles et Permissions Ultra-Avancés

import { prisma } from "./prisma";
// import bcrypt from "bcryptjs"; // Désactivé pour la démo
import jwt from "jsonwebtoken";
import { UserRole, UserTier, ProductType, TenantType, DigitalType, ProductStatus } from "@prisma/client";

// ===== TYPES RÉVOLUTIONNAIRES =====
export interface UserSession {
  id: string;
  tenantId: string;
  email: string;
  name?: string;
  role: UserRole;
  tier: UserTier;
  permissions: Permission[];
  metadata: Record<string, any>;
}

export interface Permission {
  resource: string;
  actions: string[];
  conditions?: Record<string, any>;
}

export interface AuthResult {
  success: boolean;
  user?: UserSession;
  token?: string;
  error?: string;
}

// ===== SYSTÈME DE PERMISSIONS RÉVOLUTIONNAIRE =====
export class PermissionManager {
  private static permissions: Record<UserRole, Permission[]> = {
    SUPER_ADMIN: [
      { resource: "*", actions: ["*"] }
    ],
    ADMIN: [
      { resource: "tenant", actions: ["read", "update"] },
      { resource: "users", actions: ["*"] },
      { resource: "products", actions: ["*"] },
      { resource: "orders", actions: ["*"] },
      { resource: "analytics", actions: ["*"] },
      { resource: "commissions", actions: ["*"] }
    ],
    RESELLER: [
      { resource: "products", actions: ["read"] },
      { resource: "orders", actions: ["create", "read", "update"] },
      { resource: "customers", actions: ["create", "read", "update"] },
      { resource: "commissions", actions: ["read"] },
      { resource: "analytics", actions: ["read"] }
    ],
    CUSTOMER: [
      { resource: "products", actions: ["read"] },
      { resource: "orders", actions: ["create", "read"] },
      { resource: "profile", actions: ["*"] },
      { resource: "cart", actions: ["*"] }
    ],
    GUEST: [
      { resource: "products", actions: ["read"] }
    ]
  };

  static getUserPermissions(role: UserRole): Permission[] {
    return this.permissions[role] || [];
  }

  static hasPermission(userPermissions: Permission[], resource: string, action: string): boolean {
    return userPermissions.some(permission => {
      if (permission.resource === "*" || permission.resource === resource) {
        return permission.actions.includes("*") || permission.actions.includes(action);
      }
      return false;
    });
  }

  static canAccess(user: UserSession, resource: string, action: string): boolean {
    return this.hasPermission(user.permissions, resource, action);
  }
}

// ===== SYSTÈME DE COMMISSIONS RÉVOLUTIONNAIRE =====
export class CommissionCalculator {
  private static commissionRates: Record<UserTier, Record<number, number>> = {
    BRONZE: { 1: 0.05, 2: 0.03, 3: 0.01 },
    SILVER: { 1: 0.08, 2: 0.05, 3: 0.02 },
    GOLD: { 1: 0.12, 2: 0.08, 3: 0.03 },
    PLATINUM: { 1: 0.15, 2: 0.10, 3: 0.05 },
    DIAMOND: { 1: 0.20, 2: 0.15, 3: 0.08 }
  };

  static calculateCommission(
    orderTotal: number,
    userTier: UserTier,
    level: number,
    productType: ProductType
  ): number {
    const baseRate = this.commissionRates[userTier][level] || 0;
    
    // Bonus pour produits digitaux
    const digitalBonus = productType === 'DIGITAL' ? 0.02 : 0;
    
    // Bonus pour volume
    const volumeBonus = orderTotal > 1000 ? 0.01 : 0;
    
    const finalRate = baseRate + digitalBonus + volumeBonus;
    return orderTotal * finalRate;
  }
}

// ===== AUTHENTIFICATION RÉVOLUTIONNAIRE =====
export class RevolutionaryAuth {
  static async authenticate(
    email: string,
    password: string,
    tenantId?: string
  ): Promise<AuthResult> {
    try {
      // Recherche de l'utilisateur
      const user = await prisma.user.findFirst({
        where: {
          email,
          ...(tenantId && { tenantId }),
          isActive: true
        },
        include: {
          tenant: true
        }
      });

      if (!user) {
        return { success: false, error: "Utilisateur non trouvé" };
      }

      // Note: Vérification du mot de passe désactivée pour la démo
      // En production, implémenter la vérification avec un système de mot de passe sécurisé

      // Génération de la session
      const permissions = PermissionManager.getUserPermissions(user.role);
      const userSession: UserSession = {
        id: user.id,
        tenantId: user.tenantId,
        email: user.email,
        name: user.name || undefined,
        role: user.role,
        tier: user.tier,
        permissions,
        metadata: user.metadata as Record<string, any>
      };

      // Génération du token JWT
      const token = jwt.sign(
        { userId: user.id, tenantId: user.tenantId, role: user.role },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
      );

      return { success: true, user: userSession, token };
    } catch {
      return { success: false, error: "Erreur d'authentification" };
    }
  }

  static async register(
    email: string,
    password: string,
    name: string,
    tenantId: string,
    role: UserRole = UserRole.CUSTOMER
  ): Promise<AuthResult> {
    try {
      // Vérification si l'utilisateur existe déjà
      const existingUser = await prisma.user.findFirst({
        where: { email, tenantId }
      });

      if (existingUser) {
        return { success: false, error: "Utilisateur déjà existant" };
      }

      // Note: Hachage du mot de passe désactivé pour la démo
      // En production, implémenter le hachage sécurisé des mots de passe

      // Création de l'utilisateur
      const user = await prisma.user.create({
        data: {
          email,
          name,
          tenantId,
          role,
          tier: UserTier.BRONZE,
          permissions: {},
          metadata: {}
        }
      });

      // Génération de la session
      const permissions = PermissionManager.getUserPermissions(user.role);
      const userSession: UserSession = {
        id: user.id,
        tenantId: user.tenantId,
        email: user.email,
        name: user.name || undefined,
        role: user.role,
        tier: user.tier,
        permissions,
        metadata: user.metadata as Record<string, any>
      };

      // Génération du token JWT
      const token = jwt.sign(
        { userId: user.id, tenantId: user.tenantId, role: user.role },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
      );

      return { success: true, user: userSession, token };
    } catch {
      return { success: false, error: "Erreur lors de l'inscription" };
    }
  }

  static async verifyToken(token: string): Promise<UserSession | null> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as any;
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: { tenant: true }
      });

      if (!user || !user.isActive) {
        return null;
      }

      const permissions = PermissionManager.getUserPermissions(user.role);
      return {
        id: user.id,
        tenantId: user.tenantId,
        email: user.email,
        name: user.name || undefined,
        role: user.role,
        tier: user.tier,
        permissions,
        metadata: user.metadata as Record<string, any>
      };
    } catch {
      return null;
    }
  }
}

// ===== GESTION DES TENANTS RÉVOLUTIONNAIRE =====
export class TenantManager {
  static async createTenant(
    name: string,
    slug: string,
    type: TenantType,
    settings: Record<string, any> = {}
  ) {
    return await prisma.tenant.create({
      data: {
        name,
        slug,
        type,
        settings
      }
    });
  }

  static async getTenantBySlug(slug: string) {
    return await prisma.tenant.findUnique({
      where: { slug, isActive: true }
    });
  }

  static async updateTenantSettings(tenantId: string, settings: Record<string, any>) {
    return await prisma.tenant.update({
      where: { id: tenantId },
      data: { settings }
    });
  }
}

// ===== GESTION DES PRODUITS RÉVOLUTIONNAIRE =====
export class ProductManager {
  static async createProduct(
    tenantId: string,
    categoryId: string,
    productData: {
      sku: string;
      name: string;
      description?: string;
      type: ProductType;
      categoryName: string;
      price: number;
      originalPrice?: number;
      stock?: number;
      tags?: string[];
      digitalContent?: {
        type: DigitalType;
        content: string;
        accessKey?: string;
        expiryDate?: Date;
      };
      physicalSpecs?: {
        weight?: number;
        dimensions?: string;
        material?: string;
        color?: string;
        size?: string;
        brand?: string;
        model?: string;
        warranty?: string;
      };
    }
  ) {
      const product = await prisma.product.create({
        data: {
          tenantId,
          categoryId,
          sku: productData.sku,
          name: productData.name,
          description: productData.description,
          type: productData.type,
          categoryName: productData.categoryName,
          price: productData.price,
          originalPrice: productData.originalPrice,
          stock: productData.stock || 0,
          tags: productData.tags?.join(',') || ''
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
          expiryDate: productData.digitalContent.expiryDate
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

    return product;
  }

  static async getProductsByTenant(tenantId: string, filters?: {
    type?: ProductType;
    categoryId?: string;
    status?: ProductStatus;
    isActive?: boolean;
  }) {
    return await prisma.product.findMany({
      where: {
        tenantId,
        ...filters
      },
      include: {
        digitalContent: true,
        physicalSpecs: true,
        images: true,
        videos: true,
        category: true
      }
    });
  }
}

// ===== GESTION DES COMMANDES RÉVOLUTIONNAIRE =====
export class OrderManager {
  static async createOrder(
    tenantId: string,
    userId: string,
    items: Array<{
      productId: string;
      quantity: number;
      price: number;
    }>,
    orderData: {
      billingAddress: Record<string, any>;
      shippingAddress?: Record<string, any>;
      paymentMethod?: string;
    }
  ) {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.19; // TVA 19%
    const shipping = 0; // Gratuit pour les produits digitaux
    const total = subtotal + tax + shipping;

    const order = await prisma.order.create({
      data: {
        tenantId,
        userId,
        orderNumber: `ORD-${Date.now()}`,
        status: 'PENDING',
        type: 'DIGITAL_ONLY', // À déterminer selon les produits
        subtotal,
        tax,
        shipping,
        discount: 0,
        total,
        billingAddress: JSON.stringify(orderData.billingAddress),
        shippingAddress: orderData.shippingAddress ? JSON.stringify(orderData.shippingAddress) : null,
        paymentMethod: orderData.paymentMethod,
        paymentStatus: 'PENDING'
      }
    });

    // Création des items de commande
    for (const item of items) {
      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity
        }
      });
    }

    // Calcul et création des commissions
    await this.calculateCommissions(order.id, tenantId, userId, total);

    return order;
  }

  static async calculateCommissions(
    orderId: string,
    tenantId: string,
    userId: string,
    orderTotal: number
  ) {
    // Récupération de l'utilisateur et de sa hiérarchie
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user || user.role !== 'RESELLER') {
      return;
    }

    // Calcul des commissions multi-niveaux
    const commission1 = CommissionCalculator.calculateCommission(
      orderTotal,
      user.tier,
      1,
      'DIGITAL'
    );

    if (commission1 > 0) {
      await prisma.commission.create({
        data: {
          tenantId,
          orderId,
          userId,
          level: 1,
          percentage: 0.15, // 15% pour le niveau 1
          amount: commission1,
          status: 'PENDING'
        }
      });
    }
  }
}

// ===== EXPORTS =====
export { UserRole, UserTier, TenantType, ProductType, DigitalType, ProductStatus } from "@prisma/client";
