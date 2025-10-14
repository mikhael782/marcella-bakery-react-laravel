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

        return response()->json($menus);
    }

    /**
     * Fungsi untuk ke halaman preview
     */
    public function showPreview($slug)
    {
        $menu = Menu::with(['category', 'preview'])
            ->where('slug', $slug)
            ->firstOrFail();

        // Convert image ke full URL
        if ($menu->image) {
            $menu->image = Storage::url($menu->image);
        }

        // Convert images_preview kalau ada
        if ($menu->preview && is_array($menu->preview->images_preview)) {
            $menu->preview->images_preview = array_map(function ($img) {
                return Storage::url($img);
            }, $menu->preview->images_preview);
        }

        return response()->json($menu);
    }
}
