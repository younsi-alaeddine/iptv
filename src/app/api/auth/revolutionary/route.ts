// ===== API ROUTE RÉVOLUTIONNAIRE - AUTHENTIFICATION =====
// Gestion Multi-Tenant avec Rôles et Permissions Ultra-Avancés

import { NextRequest, NextResponse } from "next/server";
import { RevolutionaryAuth } from "@/lib/auth-revolutionary";
import { UserRole } from "@prisma/client";

// ===== AUTHENTIFICATION =====
export async function POST(request: NextRequest) {
  try {
    const { email, password, tenantId, action } = await request.json();

    if (action === "login") {
      const result = await RevolutionaryAuth.authenticate(email, password, tenantId);
      
      if (result.success) {
        return NextResponse.json({
          success: true,
          user: result.user,
          token: result.token,
          message: "Connexion réussie"
        });
      } else {
        return NextResponse.json({
          success: false,
          error: result.error
        }, { status: 401 });
      }
    }

    if (action === "register") {
      const { name, role = UserRole.CUSTOMER } = await request.json();
      
      if (!tenantId) {
        return NextResponse.json({
          success: false,
          error: "Tenant ID requis"
        }, { status: 400 });
      }

      const result = await RevolutionaryAuth.register(email, password, name, tenantId, role);
      
      if (result.success) {
        return NextResponse.json({
          success: true,
          user: result.user,
          token: result.token,
          message: "Inscription réussie"
        });
      } else {
        return NextResponse.json({
          success: false,
          error: result.error
        }, { status: 400 });
      }
    }

    return NextResponse.json({
      success: false,
      error: "Action non reconnue"
    }, { status: 400 });

  } catch (error) {
    console.error("Erreur d'authentification:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== VÉRIFICATION DU TOKEN =====
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({
        success: false,
        error: "Token manquant"
      }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const user = await RevolutionaryAuth.verifyToken(token);
    
    if (user) {
      return NextResponse.json({
        success: true,
        user
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Token invalide"
      }, { status: 401 });
    }

  } catch (error) {
    console.error("Erreur de vérification:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}
