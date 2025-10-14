<?php

namespace App\Http\Controllers;

use App\Models\PromoProduct;
use Illuminate\Http\Request;

class PromoProductController extends Controller
{
    /**
     * Fungsi untuk menampilkan promo product berdasarkan ID dan slug
     */
    public function index($id, $slug)
    {
        $promoProduct = PromoProduct::find($id);

        if (!$promoProduct) {
            return response()->json([
                'message' => 'Item tidak ditemukan'
            ], 404);
        }

        // Cek slug, kalau beda redirect ke URL yang benar
        if ($promoProduct->slug !== $slug) {
            return redirect()->route('promo_product.show', [
                'id' => $id, 
                'slug' => $promoProduct->slug
            ]);
        }

        // Return data lengkap untuk PromoProduct.jsx
        return response()->json([
            'id' => $promoProduct->id,
            'name' => $promoProduct->name,
            'slug' => $promoProduct->slug,
            'category' => $promoProduct->category,
            'price' => $promoProduct->price,
            'images_main' => $promoProduct->images_main,
            'images_preview' => $promoProduct->images_preview, // array
            'description' => $promoProduct->description,
            'sizes' => $promoProduct->sizes, // array, bisa null kalau bukan Cake
            'rating' => $promoProduct->rating,
            'reviews' => $promoProduct->reviews, // array
        ]);
    }
}
