<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Bolu', 'slug' => 'bolu', 'image' => 'img/categories/bolu.jpg', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Bread', 'slug' => 'bread', 'image' => 'img/categories/bread.jpg', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Brownies', 'slug' => 'brownies', 'image' => 'img/categories/brownies.jpg', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cake', 'slug' => 'cake', 'image' => 'img/categories/cakes.jpg', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cookies', 'slug' => 'cookies', 'image' => 'img/categories/cookies.png', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pastries', 'slug' => 'pastries', 'image' => 'img/categories/macarons.jpg', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Traditional Food', 'slug' => 'traditional-food', 'image' => 'img/categories/traditional_food.jpg', 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('categories')->insert($categories);
    }
}
