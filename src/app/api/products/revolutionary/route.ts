// ===== API ROUTE RÉVOLUTIONNAIRE - PRODUITS =====
// Gestion Intelligente des Produits Digitaux et Physiques

import { NextRequest, NextResponse } from "next/server";
import { RevolutionaryProductManager } from "@/lib/product-revolutionary";
import { ProductType } from "@prisma/client";

// ===== CRÉATION DE PRODUIT =====
export async function POST(request: NextRequest) {
  try {
    const { tenantId, categoryId, productData } = await request.json();

    if (!tenantId || !categoryId || !productData) {
      return NextResponse.json({
        success: false,
        error: "Données manquantes"
      }, { status: 400 });
    }

    const product = await RevolutionaryProductManager.createProduct(
      tenantId,
      categoryId,
      productData
    );

    return NextResponse.json({
      success: true,
      product,
      message: "Produit créé avec succès"
    });

  } catch (error) {
    console.error("Erreur de création de produit:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== RÉCUPÉRATION DE PRODUITS =====
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tenantId = searchParams.get("tenantId");
    const productId = searchParams.get("productId");
    const type = searchParams.get("type") as ProductType;
    const categoryId = searchParams.get("categoryId");
    const status = searchParams.get("status");
    const isActive = searchParams.get("isActive");
    const isFeatured = searchParams.get("isFeatured");
    const isPopular = searchParams.get("isPopular");
    const isNew = searchParams.get("isNew");
    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");
    const search = searchParams.get("search");
    const tags = searchParams.get("tags");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    if (!tenantId) {
      return NextResponse.json({
        success: false,
        error: "Tenant ID requis"
      }, { status: 400 });
    }

    // Récupération d'un produit spécifique
    if (productId) {
      const product = await RevolutionaryProductManager.getProductById(productId);
      
      if (!product) {
        return NextResponse.json({
          success: false,
          error: "Produit non trouvé"
        }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        product
      });
    }

    // Filtres pour la recherche
    const filters = {
      type,
      categoryId: categoryId || undefined,
      status: status as any,
      isActive: isActive ? isActive === "true" : undefined,
      isFeatured: isFeatured ? isFeatured === "true" : undefined,
      isPopular: isPopular ? isPopular === "true" : undefined,
      isNew: isNew ? isNew === "true" : undefined,
      priceMin: priceMin ? parseFloat(priceMin) : undefined,
      priceMax: priceMax ? parseFloat(priceMax) : undefined,
      search: search || undefined,
      tags: tags ? tags.split(",") : undefined
    };

    // Recherche avec filtres
    if (search) {
      const results = await RevolutionaryProductManager.searchProducts(
        tenantId,
        search,
        filters,
        page,
        limit
      );

      return NextResponse.json({
        success: true,
        ...results
      });
    }

    // Récupération avec filtres
    const results = await RevolutionaryProductManager.getProductsByTenant(
      tenantId,
      filters,
      page,
      limit
    );

    return NextResponse.json({
      success: true,
      ...results
    });

  } catch (error) {
    console.error("Erreur de récupération des produits:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== MISE À JOUR DE PRODUIT =====
export async function PUT(request: NextRequest) {
  try {
    const { productId, updateData } = await request.json();

    if (!productId || !updateData) {
      return NextResponse.json({
        success: false,
        error: "Données manquantes"
      }, { status: 400 });
    }

    const product = await RevolutionaryProductManager.updateProduct(productId, updateData);

    return NextResponse.json({
      success: true,
      product,
      message: "Produit mis à jour avec succès"
    });

  } catch (error) {
    console.error("Erreur de mise à jour:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erreur interne du serveur"
    }, { status: 500 });
  }
}

// ===== SUPPRESSION DE PRODUIT =====
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    const softDelete = searchParams.get("softDelete") === "true";

    if (!productId) {
      return NextResponse.json({
        success: false,
        error: "Product ID requis"
      }, { status: 400 });
    }

    await RevolutionaryProductManager.deleteProduct(productId, softDelete);

    return NextResponse.json({
      success: true,
      message: softDelete ? "Produit archivé" : "Produit supprimé"
    });

  } catch (error) {
    console.error("Erreur de suppression:", error);
    return NextResponse.json({
      success: false,
      error: "Erreur interne du serveur"
    }, { status: 500 });
  }
}
