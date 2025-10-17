<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PromoController extends Controller
{
    /**
     * Fungsi untuk mengambil semua promo + kategori
     */
    public function index()
    {
        // Ambil promo beserta relasi kategori
        $promos = Promo::with(['category', 'promoProducts'])->get();

        // Jadikan image full URL biar React bisa render
        $promos = $promos->map(function($promo) {
            $promo->images = $promo->images ? Storage::url($promo->images) : null;
            // Ambil id promo product pertama
            $promo->promo_product_id = optional($promo->promoProducts->first())->id;
            return $promo;
        });

        // Kembalikan hasil sebagai JSON
        return response()->json($promos);
    }

    /**
     * Fungsi untuk ke halaman promo product
     */
    public function showPromoProduct($slug)
    {
        // Ambil promo serta kategorinya berdasarkan slug
        $promo = Promo::with(['category', 'promoProducts'])
            ->where('slug', $slug)
            ->firstOrFail();

        // Jadikan image full URL biar React bisa render
        if ($promo->images) {
            $promo->images = Storage::url($promo->images);
        }

        // Convert images_preview kalau ada
        if ($promo->promoProduct && is_array($promo->promoProduct->images_preview)) {
            $promo->promoProduct->images_preview = array_map(function ($img) {
                return Storage::url($img);
            }, $promo->promoProduct->images_preview);
        }

        // Kembalikan hasil sebagai JSON
        return response()->json($promo);
    }
}
