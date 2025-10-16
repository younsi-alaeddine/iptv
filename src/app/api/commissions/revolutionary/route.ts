// ===== API ROUTE RÉVOLUTIONNAIRE - COMMISSIONS =====
// Gestion Multi-Niveaux Ultra-Intelligente des Commissions

import { NextRequest, NextResponse } from "next/server";
import { RevolutionaryCommissionManager, HierarchyManager } from "@/lib/commission-revolutionary";
import { ProductType } from "@prisma/client";

// ===== CALCUL DE COMMISSIONS =====
export async function POST(request: NextRequest) {
  try {
    const { orderId, tenantId, userId, orderTotal, productType, action } = await request.json();

    if (action === "calculate") {
      if (!orderId || !tenantId || !userId || !orderTotal || !productType) {
        return NextResponse.json({
          success: false,
          error: "Données manquantes pour le calcul"
        }, { status: 400 });
      }

      const calculations = await RevolutionaryCommissionManager.calculateCommissions(
        orderId,
        tenantId,
        userId,
        orderTotal,
        productType as ProductType
      );

      return NextResponse.json({
        success: true,
        calculations,
        message: "Commissions calculées avec succès"
      });
    }

    if (action === "create") {
      const { calculations } = await request.json();
      
      if (!calculations || !Array.isArray(calculations)) {
        return NextResponse.json({
          success: false,
          error: "Calculs de commissions requis"
        }, { status: 400 });
      }

      const commissions = await RevolutionaryCommissionManager.createCommissions(
        tenantId,
        orderId,
        calculations
      );

      return NextResponse.json({
        success: true,
        commissions,
        message: "Commissions créées avec succès"
      });
    }

    return NextResponse.json({
      success: false,
      error: "Action non reconnue"
    }, { status: 400 });

  } catch (error) {
    console.error("Erreur de gestion des commissions:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== RAPPORTS DE COMMISSIONS =====
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tenantId = searchParams.get("tenantId");
    const userId = searchParams.get("userId");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const action = searchParams.get("action");

    if (!tenantId) {
      return NextResponse.json({
        success: false,
        error: "Tenant ID requis"
      }, { status: 400 });
    }

    if (action === "report" && userId) {
      if (!startDate || !endDate) {
        return NextResponse.json({
          success: false,
          error: "Dates de début et fin requises"
        }, { status: 400 });
      }

      const report = await RevolutionaryCommissionManager.getCommissionReport(
        tenantId,
        userId,
        new Date(startDate),
        new Date(endDate)
      );

      return NextResponse.json({
        success: true,
        report
      });
    }

    if (action === "analytics") {
      if (!startDate || !endDate) {
        return NextResponse.json({
          success: false,
          error: "Dates de début et fin requises"
        }, { status: 400 });
      }

      const analytics = await RevolutionaryCommissionManager.getCommissionAnalytics(
        tenantId,
        new Date(startDate),
        new Date(endDate)
      );

      return NextResponse.json({
        success: true,
        analytics
      });
    }

    if (action === "hierarchy") {
      if (!userId) {
        return NextResponse.json({
          success: false,
          error: "User ID requis"
        }, { status: 400 });
      }

      const level = parseInt(searchParams.get("level") || "3");
      const downline = await HierarchyManager.getDownline(userId, level);
      const upline = await HierarchyManager.getUpline(userId);

      return NextResponse.json({
        success: true,
        hierarchy: {
          downline,
          upline
        }
      });
    }

    return NextResponse.json({
      success: false,
      error: "Action non reconnue"
    }, { status: 400 });

  } catch (error) {
    console.error("Erreur de récupération des commissions:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== GESTION DES PAIEMENTS =====
export async function PUT(request: NextRequest) {
  try {
    const { commissionIds, action } = await request.json();

    if (!commissionIds || !Array.isArray(commissionIds)) {
      return NextResponse.json({
        success: false,
        error: "IDs de commissions requis"
      }, { status: 400 });
    }

    if (action === "approve") {
      await RevolutionaryCommissionManager.approveCommissions(commissionIds);
      
      return NextResponse.json({
        success: true,
        message: "Commissions approuvées avec succès"
      });
    }

    if (action === "pay") {
      await RevolutionaryCommissionManager.payCommissions(commissionIds);
      
      return NextResponse.json({
        success: true,
        message: "Commissions payées avec succès"
      });
    }

    return NextResponse.json({
      success: false,
      error: "Action non reconnue"
    }, { status: 400 });

  } catch (error) {
    console.error("Erreur de gestion des paiements:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}
