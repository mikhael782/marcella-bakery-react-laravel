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
        $promoProduct = PromoProduct::with(['promo', 'category'])->find($id);

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
            'category' => $promoProduct->category->name ?? null,
            'price' => $promoProduct->price,
            'images_main' => asset('storage/' . $promoProduct->images_main),
            'images_preview' => collect($promoProduct->images_preview)->map(fn($img) => asset('storage/' . $img)),
            'description' => $promoProduct->description,
            'sizes' => $promoProduct->sizes, // array, bisa null kalau bukan Cake
            'rating' => $promoProduct->rating,
            'promo_id' => $promoProduct->promo->id ?? null,
            'original_price' => $promoProduct->original_price,
        ]);
    }
}
