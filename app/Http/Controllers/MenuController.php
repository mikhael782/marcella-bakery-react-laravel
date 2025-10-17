<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    /**
     * Fungsi untuk mengambil semua menu + kategori
     */
    public function index()
    {
        // Eager load category biar gak n+1 query
        $menus = Menu::with(['category', 'previews'])->get();

        // Jadikan image full URL biar React bisa render
        $menus = $menus->map(function ($menu) {
            $menu->image = $menu->image ? Storage::url($menu->image) : null;
            // ambil id preview pertama (misal buat button ke preview)
            $menu->preview_id = optional($menu->previews->first())->id;
            return $menu;
        });

        // Kembalikan hasil sebagai JSON
        return response()->json($menus);
    }

    /**
     * Fungsi untuk ke halaman preview
     */
    public function showPreview($slug)
    {
        // Ambil menu berdasarkan slug, sekaligus relasi category dan preview
        $menu = Menu::with(['category', 'preview'])
            ->where('slug', $slug)
            ->firstOrFail();

        // Jadikan image full URL biar React bisa render
        if ($menu->image) {
            $menu->image = Storage::url($menu->image);
        }

        // Convert images_preview kalau ada
        if ($menu->preview && is_array($menu->preview->images_preview)) {
            $menu->preview->images_preview = array_map(function ($img) {
                return Storage::url($img);
            }, $menu->preview->images_preview);
        }

        // Kembalikan hasil sebagai JSON
        return response()->json($menu);
    }

    /**
     * Fungsi untuk mengambil related items berdasarkan category
     * untuk di halaman preview
     */
    public function relatedItems($id)
    {
        // Cari menu utama berdasarkan ID
        $menu = Menu::findOrFail($id);

        // Ambil menu lain yang kategori nya sama
        $relatedMenus = Menu::where('category_id', $menu->category_id)
            ->where('id', '!=' , $id)
            ->get()
            ->map(function ($menu) {
                $menu->image = $menu->image ? Storage::url($menu->image) : null;
                // Ambil preview pertama (buat tombol Preview)
                $menu->preview_id = optional($menu->previews->first())->id;
                return $menu;
            });

        // Kembalikan hasil sebagai JSON
        return response()->json($relatedMenus);
    }
}
