// ===== SYSTÈME DE COMMISSIONS RÉVOLUTIONNAIRE =====
// Gestion Multi-Niveaux Ultra-Intelligente des Commissions

import { prisma } from "./prisma";
import { UserTier, ProductType } from "@prisma/client";

// ===== TYPES RÉVOLUTIONNAIRES =====
export interface CommissionStructure {
  level: number;
  percentage: number;
  conditions: {
    minSales?: number;
    maxSales?: number;
    productTypes?: ProductType[];
    timeFrame?: 'monthly' | 'quarterly' | 'yearly';
    userTier?: UserTier;
  };
  bonuses: {
    newClientBonus?: number;
    volumeBonus?: number;
    loyaltyBonus?: number;
    digitalProductBonus?: number;
  };
}

export interface CommissionCalculation {
  userId: string;
  orderId: string;
  orderTotal: number;
  productType: ProductType;
  level: number;
  basePercentage: number;
  bonuses: number;
  finalPercentage: number;
  commissionAmount: number;
  conditions: Record<string, any>;
}

export interface CommissionReport {
  userId: string;
  userName: string;
  totalCommissions: number;
  pendingCommissions: number;
  paidCommissions: number;
  level1Commissions: number;
  level2Commissions: number;
  level3Commissions: number;
  bonuses: number;
  period: {
    start: Date;
    end: Date;
  };
}

// ===== GESTIONNAIRE DE COMMISSIONS RÉVOLUTIONNAIRE =====
export class RevolutionaryCommissionManager {
  
  // ===== STRUCTURE DE COMMISSIONS RÉVOLUTIONNAIRE =====
  private static commissionStructures: Record<UserTier, CommissionStructure[]> = {
    BRONZE: [
      {
        level: 1,
        percentage: 0.05, // 5%
        conditions: { minSales: 0, userTier: 'BRONZE' },
        bonuses: { newClientBonus: 0.01, volumeBonus: 0.005 }
      },
      {
        level: 2,
        percentage: 0.03, // 3%
        conditions: { minSales: 0, userTier: 'BRONZE' },
        bonuses: { volumeBonus: 0.002 }
      },
      {
        level: 3,
        percentage: 0.01, // 1%
        conditions: { minSales: 0, userTier: 'BRONZE' },
        bonuses: { loyaltyBonus: 0.001 }
      }
    ],
    SILVER: [
      {
        level: 1,
        percentage: 0.08, // 8%
        conditions: { minSales: 1000, userTier: 'SILVER' },
        bonuses: { newClientBonus: 0.015, volumeBonus: 0.008, digitalProductBonus: 0.01 }
      },
      {
        level: 2,
        percentage: 0.05, // 5%
        conditions: { minSales: 500, userTier: 'SILVER' },
        bonuses: { volumeBonus: 0.005 }
      },
      {
        level: 3,
        percentage: 0.02, // 2%
        conditions: { minSales: 200, userTier: 'SILVER' },
        bonuses: { loyaltyBonus: 0.003 }
      }
    ],
    GOLD: [
      {
        level: 1,
        percentage: 0.12, // 12%
        conditions: { minSales: 2500, userTier: 'GOLD' },
        bonuses: { newClientBonus: 0.02, volumeBonus: 0.012, digitalProductBonus: 0.015 }
      },
      {
        level: 2,
        percentage: 0.08, // 8%
        conditions: { minSales: 1500, userTier: 'GOLD' },
        bonuses: { volumeBonus: 0.008 }
      },
      {
        level: 3,
        percentage: 0.03, // 3%
        conditions: { minSales: 500, userTier: 'GOLD' },
        bonuses: { loyaltyBonus: 0.005 }
      }
    ],
    PLATINUM: [
      {
        level: 1,
        percentage: 0.15, // 15%
        conditions: { minSales: 5000, userTier: 'PLATINUM' },
        bonuses: { newClientBonus: 0.025, volumeBonus: 0.015, digitalProductBonus: 0.02 }
      },
      {
        level: 2,
        percentage: 0.10, // 10%
        conditions: { minSales: 3000, userTier: 'PLATINUM' },
        bonuses: { volumeBonus: 0.01 }
      },
      {
        level: 3,
        percentage: 0.05, // 5%
        conditions: { minSales: 1000, userTier: 'PLATINUM' },
        bonuses: { loyaltyBonus: 0.008 }
      }
    ],
    DIAMOND: [
      {
        level: 1,
        percentage: 0.20, // 20%
        conditions: { minSales: 10000, userTier: 'DIAMOND' },
        bonuses: { newClientBonus: 0.03, volumeBonus: 0.02, digitalProductBonus: 0.025 }
      },
      {
        level: 2,
        percentage: 0.15, // 15%
        conditions: { minSales: 7500, userTier: 'DIAMOND' },
        bonuses: { volumeBonus: 0.015 }
      },
      {
        level: 3,
        percentage: 0.08, // 8%
        conditions: { minSales: 2500, userTier: 'DIAMOND' },
        bonuses: { loyaltyBonus: 0.012 }
      }
    ]
  };

  // ===== CALCUL DE COMMISSIONS RÉVOLUTIONNAIRE =====
  static async calculateCommissions(
    orderId: string,
    tenantId: string,
    userId: string,
    orderTotal: number,
    productType: ProductType
  ): Promise<CommissionCalculation[]> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user || user.role !== 'RESELLER') {
      return [];
    }

    const calculations: CommissionCalculation[] = [];
    const structures = this.commissionStructures[user.tier];

    for (const structure of structures) {
      // Vérification des conditions
      const conditionsMet = await this.checkConditions(user, structure, orderTotal, productType);
      
      if (conditionsMet) {
        // Calcul des bonus
        const bonuses = await this.calculateBonuses(user, structure, orderTotal, productType);
        
        // Calcul du pourcentage final
        const finalPercentage = structure.percentage + bonuses.total;
        
        // Calcul du montant de commission
        const commissionAmount = orderTotal * finalPercentage;

        calculations.push({
          userId,
          orderId,
          orderTotal,
          productType,
          level: structure.level,
          basePercentage: structure.percentage,
          bonuses: bonuses.total,
          finalPercentage,
          commissionAmount,
          conditions: conditionsMet
        });
      }
    }

    return calculations;
  }

  // ===== VÉRIFICATION DES CONDITIONS =====
  private static async checkConditions(
    user: any,
    structure: CommissionStructure,
    orderTotal: number,
    productType: ProductType
  ): Promise<Record<string, any>> {
    const conditions: Record<string, any> = {};

    // Vérification du montant minimum
    if (structure.conditions.minSales) {
      const userSales = await this.getUserSales(user.id, structure.conditions.timeFrame || 'monthly');
      conditions.minSalesMet = userSales >= structure.conditions.minSales;
    }

    // Vérification du montant maximum
    if (structure.conditions.maxSales) {
      const userSales = await this.getUserSales(user.id, structure.conditions.timeFrame || 'monthly');
      conditions.maxSalesMet = userSales <= structure.conditions.maxSales;
    }

    // Vérification du type de produit
    if (structure.conditions.productTypes) {
      conditions.productTypeMet = structure.conditions.productTypes.includes(productType);
    }

    // Vérification du niveau utilisateur
    if (structure.conditions.userTier) {
      conditions.userTierMet = user.tier === structure.conditions.userTier;
    }

    return conditions;
  }

  // ===== CALCUL DES BONUS =====
  private static async calculateBonuses(
    user: any,
    structure: CommissionStructure,
    orderTotal: number,
    productType: ProductType
  ): Promise<{ total: number; details: Record<string, number> }> {
    const bonuses: Record<string, number> = {};
    let total = 0;

    // Bonus nouveau client
    if (structure.bonuses.newClientBonus) {
      const isNewClient = await this.isNewClient(user.id);
      if (isNewClient) {
        bonuses.newClient = structure.bonuses.newClientBonus;
        total += bonuses.newClient;
      }
    }

    // Bonus volume
    if (structure.bonuses.volumeBonus) {
      const volumeMultiplier = Math.floor(orderTotal / 1000);
      if (volumeMultiplier > 0) {
        bonuses.volume = structure.bonuses.volumeBonus * volumeMultiplier;
        total += bonuses.volume;
      }
    }

    // Bonus fidélité
    if (structure.bonuses.loyaltyBonus) {
      const loyaltyLevel = await this.getLoyaltyLevel(user.id);
      if (loyaltyLevel > 0) {
        bonuses.loyalty = structure.bonuses.loyaltyBonus * loyaltyLevel;
        total += bonuses.loyalty;
      }
    }

    // Bonus produit digital
    if (structure.bonuses.digitalProductBonus && productType === 'DIGITAL') {
      bonuses.digitalProduct = structure.bonuses.digitalProductBonus;
      total += bonuses.digitalProduct;
    }

    return { total, details: bonuses };
  }

  // ===== CRÉATION DES COMMISSIONS =====
  static async createCommissions(
    tenantId: string,
    orderId: string,
    calculations: CommissionCalculation[]
  ) {
    const commissions = [];

    for (const calc of calculations) {
      const commission = await prisma.commission.create({
        data: {
          tenantId,
          orderId,
          userId: calc.userId,
          level: calc.level,
          percentage: calc.finalPercentage,
          amount: calc.commissionAmount,
          status: 'PENDING'
        }
      });

      commissions.push(commission);
    }

    return commissions;
  }

  // ===== RAPPORTS DE COMMISSIONS =====
  static async getCommissionReport(
    tenantId: string,
    userId: string,
    startDate: Date,
    endDate: Date
  ): Promise<CommissionReport> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }

    const commissions = await prisma.commission.findMany({
      where: {
        tenantId,
        userId,
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    const totalCommissions = commissions.reduce((sum, c) => sum + Number(c.amount), 0);
    const pendingCommissions = commissions
      .filter(c => c.status === 'PENDING')
      .reduce((sum, c) => sum + Number(c.amount), 0);
    const paidCommissions = commissions
      .filter(c => c.status === 'PAID')
      .reduce((sum, c) => sum + Number(c.amount), 0);

    const level1Commissions = commissions
      .filter(c => c.level === 1)
      .reduce((sum, c) => sum + Number(c.amount), 0);
    const level2Commissions = commissions
      .filter(c => c.level === 2)
      .reduce((sum, c) => sum + Number(c.amount), 0);
    const level3Commissions = commissions
      .filter(c => c.level === 3)
      .reduce((sum, c) => sum + Number(c.amount), 0);

    return {
      userId,
      userName: user.name || user.email,
      totalCommissions,
      pendingCommissions,
      paidCommissions,
      level1Commissions,
      level2Commissions,
      level3Commissions,
      bonuses: 0, // À calculer selon les bonus appliqués
      period: { start: startDate, end: endDate }
    };
  }

  // ===== GESTION DES PAIEMENTS =====
  static async approveCommissions(commissionIds: string[]) {
    return await prisma.commission.updateMany({
      where: { id: { in: commissionIds } },
      data: { 
        status: 'APPROVED',
        paidAt: new Date()
      }
    });
  }

  static async payCommissions(commissionIds: string[]) {
    return await prisma.commission.updateMany({
      where: { id: { in: commissionIds } },
      data: { 
        status: 'PAID',
        paidAt: new Date()
      }
    });
  }

  // ===== MÉTHODES UTILITAIRES =====
  private static async getUserSales(userId: string, timeFrame: 'monthly' | 'quarterly' | 'yearly'): Promise<number> {
    const now = new Date();
    let startDate: Date;

    switch (timeFrame) {
      case 'monthly': {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      }
      case 'quarterly': {
        const quarter = Math.floor(now.getMonth() / 3);
        startDate = new Date(now.getFullYear(), quarter * 3, 1);
        break;
      }
      case 'yearly': {
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      }
    }

    const orders = await prisma.order.findMany({
      where: {
        userId,
        status: { in: ['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'] },
        createdAt: { gte: startDate }
      },
      select: { total: true }
    });

    return orders.reduce((sum, order) => sum + Number(order.total), 0);
  }

  private static async isNewClient(userId: string): Promise<boolean> {
    const firstOrder = await prisma.order.findFirst({
      where: { userId },
      orderBy: { createdAt: 'asc' }
    });

    if (!firstOrder) return false;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return firstOrder.createdAt > thirtyDaysAgo;
  }

  private static async getLoyaltyLevel(userId: string): Promise<number> {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const orders = await prisma.order.count({
      where: {
        userId,
        status: { in: ['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'] },
        createdAt: { gte: oneYearAgo }
      }
    });

    // Niveaux de fidélité basés sur le nombre de commandes
    if (orders >= 50) return 5; // Très fidèle
    if (orders >= 25) return 4; // Fidèle
    if (orders >= 10) return 3; // Moyennement fidèle
    if (orders >= 5) return 2; // Peu fidèle
    if (orders >= 1) return 1; // Nouveau
    return 0; // Pas de commandes
  }

  // ===== ANALYTICS DES COMMISSIONS =====
  static async getCommissionAnalytics(tenantId: string, startDate: Date, endDate: Date) {
    const commissions = await prisma.commission.findMany({
      where: {
        tenantId,
        createdAt: { gte: startDate, lte: endDate }
      },
      include: { user: true }
    });

    const totalCommissions = commissions.reduce((sum, c) => sum + Number(c.amount), 0);
    const pendingCommissions = commissions
      .filter(c => c.status === 'PENDING')
      .reduce((sum, c) => sum + Number(c.amount), 0);
    const paidCommissions = commissions
      .filter(c => c.status === 'PAID')
      .reduce((sum, c) => sum + Number(c.amount), 0);

    const topEarners = commissions
      .reduce((acc, commission) => {
        const userId = commission.userId;
        if (!acc[userId]) {
          acc[userId] = {
            userId,
            userName: commission.user.name || commission.user.email,
            total: 0
          };
        }
        acc[userId].total += Number(commission.amount);
        return acc;
      }, {} as Record<string, { userId: string; userName: string; total: number }>);

    const topEarnersList = Object.values(topEarners)
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);

    return {
      totalCommissions,
      pendingCommissions,
      paidCommissions,
      topEarners: topEarnersList,
      period: { start: startDate, end: endDate }
    };
  }
}

// ===== GESTIONNAIRE DE HIÉRARCHIE RÉVOLUTIONNAIRE =====
export class HierarchyManager {
  static async getDownline(_userId: string, _level: number = 3): Promise<any[]> {
    // Logique pour récupérer la hiérarchie des revendeurs
    // À implémenter selon la structure de hiérarchie souhaitée
    return [];
  }

  static async getUpline(_userId: string): Promise<any[]> {
    // Logique pour récupérer les supérieurs dans la hiérarchie
    // À implémenter selon la structure de hiérarchie souhaitée
    return [];
  }

  static async calculateDownlineCommissions(_userId: string, _orderId: string): Promise<CommissionCalculation[]> {
    // Calcul des commissions pour la hiérarchie descendante
    // À implémenter selon la logique de hiérarchie
    return [];
  }
}

export { UserTier, ProductType } from "@prisma/client";
