<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Fungsi untuk mengambil semua data dari tbl categories
     */
    public function index()
    {
        // Ambil semua kategori
        $categories = Category::select('name', 'slug', 'image')->get();

        // Kembalikan hasil sebagai JSON
        return response()->json($categories);
    }

    /**
     * Fungsi untuk mengambil data product dari tbl_menus untuk di halaman
     * Category Product
     */
    public function products($slug)
    {
        // Ambil kategori berdasarkan slug serta semua menunya
        $category = Category::with('menus')
            ->where('slug', $slug)
            ->firstOrFail();

        // Jadikan image full URL biar React bisa render
        $menus = $category->menus->map(function($menu) {
            // bikin full URL untuk frontend
            $menu->image = Storage::url($menu->image);
            return $menu;
        });

        // Kembalikan hasil sebagai JSON
        return response()->json($menus);
    }
}
