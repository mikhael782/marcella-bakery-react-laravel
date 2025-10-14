<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Http\Request;

class PromoController extends Controller
{
    /**
     * Fungsi untuk mengambil semua promo + kategori
     */
    public function index()
    {
        // Eager load category biar gak n+1 query
        $promos = Promo::with('category')->get();

        // Jadikan image full URL biar React bisa render
        $promos = $promos->map(function($promo) {
            $promo->images = url($promo->images);
            return $promo;
        });

        return response()->json($promos);
    }

    /**
     * Fungsi untuk ke halaman promo product
     */
    public function showPromoProduct($slug)
    {
        $promo = Promo::with('category')->where('slug', $slug)->firstOrFail();

        return response()->json($promo);
    }
}
