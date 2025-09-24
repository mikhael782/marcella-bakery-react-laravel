<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Fungsi untuk mengambil semua menu + kategori
     */
    public function index()
    {
        // Eager load category biar gak n+1 query
        $menus = Menu::with('category')->get();
        return response()->json($menus);
    }

    /**
     * Fungsi untuk ambil 1 menu berdasarkan slug
     */
    public function show($slug)
    {
        $menu = Menu::with('category')->where('slug', $slug)->firstOrFail();
        return response()->json($menu);
    }
}
