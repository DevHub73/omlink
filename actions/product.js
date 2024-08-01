import { db } from '@/lib/db'

// actions/product.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProduct = async (data) => {
  try {
    const product = await db.product.create({
      data: {
        title: data.title,
        description: data?.description,
        price: data.price,
        Stock: data.Stock,
        category: data?.category,
        image: data?.image,
        createdAt: new Date(),
      },
    })
    return product
  } catch (error) {
    console.error('Error creating product:', error)
    throw new Error('Unable to create product')
  }
}

export const getProductsByCreationDate = async () => {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return products
  } catch (error) {
    console.error('Error fetching products by creation date:', error)
    throw new Error('Unable to fetch products')
  }
}

export const getAllProductsBySales = async () => {
  try {
    const products = await db.product.findMany()
    const sortedProducts = products.sort((a, b) => (b.price * b.SoldQty) - (a.price * a.SoldQty))
    return sortedProducts
  } catch (error) {
    console.error('Error fetching products by sales:', error)
    throw new Error('Unable to fetch products')
  }
}