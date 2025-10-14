<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * Fungsi untuk mengambil semua images dari tbl_gallerys
    */
    public function index()
    {
        // Ambil semua image dari tbl_gallerys
        $gallerys = Gallery::all();

        return response()->json($gallerys);
    }

    /**
     * Fungsi untuk mengambil data images dari tbl_gallerys untuk di halaman
     * GalleryPage
     */
    public function galleryPage($slug)
    {
        $category = Category::with('gallerys')
            ->where('slug', $slug)
            ->firstOrFail();

        $gallerys = $category->gallerys->map(function($item) {
            $item->images = url($item->images);
            return $item;
        });

        return response()->json($gallerys);
    }
}