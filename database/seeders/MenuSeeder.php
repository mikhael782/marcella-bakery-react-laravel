<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Category;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            [
                'name' => 'Birthday Cake',
                'price' => 350000,
                'image' => 'img/menu/birthday_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Chocolate Cake',
                'price' => 320000,
                'image' => 'img/menu/chocolate_cake.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Black Forest',
                'price' => 380000,
                'image' => 'img/menu/black_forest.jpg',
                'category' => 'Cake',
            ],
            [
                'name' => 'Cupcakes',
                'price' => 25000,
                'image' => 'img/menu/cupcakes.jpg',
                'category' => 'Bolu',
            ],
            [
                'name' => 'Macarons',
                'price' => 35000,
                'image' => 'img/menu/macarons.jpg',
                'category' => 'Pastries',
            ],
            [
                'name' => 'Brownies',
                'price' => 250000,
                'image' => 'img/menu/brownies.jpg',
                'category' => 'Brownies',
            ],
        ];

        foreach ($menus as $menu) {
            $category = Category::where('name', $menu['category'])->first();

            DB::table('tbl_menus')->insert([
                'name' => $menu['name'],
                'slug' => Str::slug($menu['name']),
                'image' => $menu['image'],
                'price' => $menu['price'],
                'category_id' => $category ? $category->id : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
