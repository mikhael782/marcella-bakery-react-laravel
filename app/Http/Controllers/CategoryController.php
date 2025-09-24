<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Fungsi untuk mengambil semua data dari tbl categories
     */
    public function index()
    {
        // Ambil semua kategori
        $categories = Category::all();
        return response()->json($categories);
    }
}
