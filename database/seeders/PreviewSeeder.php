<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Preview;
use Illuminate\Support\Str;

class PreviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $previews = [
            [
                "name" => "Birthday Cake",
                "slug" => Str::slug("Birthday Cake"),
                "category" => "Cake",
                "price" => 350000,
                "images_main" => "/img/menu/birthday_cake.jpg",
                "images_preview" => [
                    "/img/menu/birthday_cake.jpg",
                    "/img/menu/birthday_cake.jpg",
                    "/img/menu/birthday_cake.jpg"
                ],
                "description" => "Birthday cake yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => ["Small", "Medium", "Large"],
                "rating" => 4,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ],
            [
                "name" => "Chocolate Cake",
                "slug" => Str::slug("Chocolate Cake"),
                "category" => "Cake",
                "price" => 320000,
                "images_main" => "/img/menu/chocolate_cake.jpg",
                "images_preview" => [
                    "/img/menu/chocolate_cake.jpg",
                    "/img/menu/chocolate_cake.jpg",
                    "/img/menu/chocolate_cake.jpg"
                ],
                "description" => "Chocolate cake yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => ["Small", "Medium", "Large"],
                "rating" => 5,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ],
            [
                "name" => "Black Forest",
                "slug" => Str::slug("Black Forest"),
                "category" => "Cake",
                "price" => 380000,
                "images_main" => "/img/menu/black_forest.jpg",
                "images_preview" => [
                    "/img/menu/black_forest.jpg",
                    "/img/menu/black_forest.jpg",
                    "/img/menu/black_forest.jpg"
                ],
                "description" => "Black Forest yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => ["Small", "Medium", "Large"],
                "rating" => 5,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ],
            [
                "name" => "Cupcakes",
                "slug" => Str::slug("Cupcakes"),
                "category" => "Bolu",
                "price" => 25000,
                "images_main" => "/img/menu/cupcakes.jpg",
                "images_preview" => [
                    "/img/menu/cupcakes.jpg",
                    "/img/menu/cupcakes.jpg",
                    "/img/menu/cupcakes.jpg"
                ],
                "description" => "Cupcakes yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => ["Small", "Medium", "Large"],
                "rating" => 4,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ],
            [
                "name" => "Macarons",
                "slug" => Str::slug("Macarons"),
                "category" => "Pastries",
                "price" => 35000,
                "images_main" => "/img/menu/macarons.jpg",
                "images_preview" => [
                    "/img/menu/macarons.jpg",
                    "/img/menu/macarons.jpg",
                    "/img/menu/macarons.jpg"
                ],
                "description" => "Macarons yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => null,
                "rating" => 3.5,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ],
            [
                "name" => "Brownies",
                "slug" => Str::slug("Brownies"),
                "category" => "Brownies",
                "price" => 250000,
                "images_main" => "/img/menu/brownies.jpg",
                "images_preview" => [
                    "/img/menu/brownies.jpg",
                    "/img/menu/brownies.jpg",
                    "/img/menu/brownies.jpg"
                ],
                "description" => "Brownies yang lembut dan manis dibuat dari bahan-bahan premium pilihan.",
                "sizes" => null,
                "rating" => 3.5,
                "reviews" => [
                    [
                        "name" => "Hoo Devani Negita P",
                        "rating" => 5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Felicia Angel",
                        "rating" => 4.5,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ],
                    [
                        "name" => "Johanna Grace",
                        "rating" => 4,
                        "comment" => "Enak banget, lembut sekali, saya happy sekali."
                    ]
                ]
            ]
        ];

        foreach ($previews as $preview) {
            Preview::create($preview);
        }
    }
}