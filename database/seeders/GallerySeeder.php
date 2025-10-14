<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gallerys = [
            [
                'name' => 'Birthday Cake',
                'images' => '/img/menu/birthday_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Black Forest',
                'images' => '/img/menu/black_forest.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Brownies',
                'images' => '/img/menu/brownies.jpg',
                'category' => 'Brownies',
            ],
            [
                'name' => 'Chocolate Cake',
                'images' => '/img/menu/chocolate_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Cupcakes',
                'images' => '/img/menu/cupcakes.jpg',
                'category' => 'Bolu',
            ],
            [
                'name' => 'Macarons',
                'images' => '/img/menu/macarons.jpg',
                'category' => 'Pastries',
            ]
        ];

        foreach ($gallerys as $gallery) {
            $category = Category::where('name', $gallery['category'])->first();

            DB::table('tbl_gallerys')->insert([
                'images' => $gallery['images'],
                'name' => $gallery['name'],
                'slug' => Str::slug($gallery['name']),
                'category_id' => $category ? $category->id : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
