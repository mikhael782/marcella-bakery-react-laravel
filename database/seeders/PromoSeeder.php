<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promos = [
            [
                'title' => 'Diskon 20% Chocolate Cake',
                'name' => 'Chocolate Cake',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => '/img/menu/chocolate_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'title' => 'Diskon 20% Birthday Cake',
                'name' => 'Birthday Cake',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => 'img/menu/birthday_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'title' => 'Diskon 20% Black Forest',
                'name' => 'Black Forest',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => 'img/menu/black_forest.jpg',
                'category' => 'Cake',
            ],
            [
                'title' => 'Diskon 20% Cupscake',
                'name' => 'Cupcakes',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => 'img/menu/cupcakes.jpg',
                'category' => 'Bolu',
            ],
            [
                'title' => 'Diskon 20% Macarons',
                'name' => 'Macarons',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => 'img/menu/macarons.jpg',
                'category' => 'Pastries',
            ],
            [
                'title' => 'Diskon 20% Brownies',
                'name' => 'Brownies',
                'description' => 'Promo spesial hanya minggu ini',
                'images' => 'img/menu/brownies.jpg',
                'category' => 'Brownies',
            ],
        ];

        foreach ($promos as $promo) {
            $cagtegory = Category::where('name', $promo['category'])->first();

            DB::table('tbl_promos')->insert([
                'title' => $promo['title'],
                'slug' => Str::slug($promo['name']),
                'description' => $promo['description'],
                'images' => $promo['images'],
                'category_id' => $cagtegory->id,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}