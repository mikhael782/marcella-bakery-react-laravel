<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Fungsi untuk mengambil semua images dari tbl_gallerys
    */
    public function index()
    {
        // Ambil semua image dari tbl_gallerys
        $gallerys = Gallery::select('images')
            ->get();

        // Jadikan image full URL biar React bisa render
        $gallerys = $gallerys->map(function($gallery) {
            $gallery->images = $gallery->images ? Storage::url($gallery->images) : null;

            return $gallery;
        });

        // Kembalikan hasil sebagai JSON
        return response()->json($gallerys);
    }

    /**
     * Fungsi untuk mengambil data images dari tbl_gallerys untuk di halaman
     * GalleryPage
     */
    public function galleryPage($slug)
    {
        // Ambil kategori serta gallery bedasarkan slug
        $category = Category::with('gallerys')
            ->where('slug', $slug)
            ->firstOrFail();

        // Jadikan image full URL biar React bisa render
        $gallerys = $category->gallerys->map(function($item) {
            $item->images = Storage::url($item->images);
            return $item;
        });

        // Kembalikan hasil sebagai JSON
        return response()->json($gallerys);
    }
}