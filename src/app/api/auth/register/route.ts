import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, phone } = await request.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Nom, email et mot de passe requis" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Un compte avec cet email existe déjà" },
        { status: 400 }
      );
    }

      // Create user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          role: "CUSTOMER",
          tier: "BRONZE",
          tenantId: "default-tenant" // À remplacer par le vrai tenantId
        }
      });

    // Return user without sensitive data
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      tier: user.tier,
      createdAt: user.createdAt
    };

    return NextResponse.json(
      { 
        message: "Compte créé avec succès", 
        user: userWithoutPassword 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
