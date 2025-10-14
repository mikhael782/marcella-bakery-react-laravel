<?php

namespace App\Http\Controllers;

use App\Models\Preview;
use Illuminate\Http\Request;

class PreviewController extends Controller
{
    /**
     * Fungsi untuk menampilkan preview product berdasarkan ID dan slug
     */
    public function index($id, $slug)
    {
        // Cari preview berdasarkan id dan slug dari relasi menu
        $preview = Preview::with(['menu', 'category'])->find($id);

        if (!$preview) {
            return response()->json([
                'message' => 'Item tidak ditemukan'
            ], 404);
        }

        // Cek slug, kalau beda redirect ke URL yang benar
        if ($preview->slug !== $slug)
        {
            return redirect()->route('preview.show', [
                'id' => $id, 
                'slug' => $preview->slug
            ]);
        }

        // Return data lengkap untuk Preview.jsx
        return response()->json([
            'id' => $preview->id,
            'name' => $preview->name,
            'slug' => $preview->slug,
            'category' => $preview->category->name ?? null,
            'price' => $preview->price,
            'images_main' => asset('storage/' . $preview->images_main),
            'images_preview' => collect($preview->images_preview)->map(fn($img) => asset('storage/' . $img)),
            'description' => $preview->description,
            'sizes' => $preview->sizes, // array, bisa null kalau bukan Cake
            'rating' => $preview->rating,
        ]);
    }
}
