<?php

namespace Database\Seeders;

use App\Models\PromoProduct;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PromoProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promoProducts = [
            [
                "name" => "Chocolate Cake",
                "slug" => Str::slug("Chocolate Cake"),
                "category" => "Cake",
                "price" => 288000,
                "images_main" => "/img/menu/chocolate_cake.jpg",
                "images_preview" => [
                    "/img/menu/chocolate_cake.jpg",
                    "/img/menu/chocolate_cake.jpg",
                    "/img/menu/chocolate_cake.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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
                "name" => "Birthday Cake",
                "slug" => Str::slug("Birthday Cake"),
                "category" => "Cake",
                "price" => 315000,
                "images_main" => "/img/menu/birthday_cake.jpg",
                "images_preview" => [
                    "/img/menu/birthday_cake.jpg",
                    "/img/menu/birthday_cake.jpg",
                    "/img/menu/birthday_cake.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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
                "name" => "Black Forest",
                "slug" => Str::slug("Black Forest"),
                "category" => "Cake",
                "price" => 342000,
                "images_main" => "/img/menu/black_forest.jpg",
                "images_preview" => [
                    "/img/menu/black_forest.jpg",
                    "/img/menu/black_forest.jpg",
                    "/img/menu/black_forest.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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
                "price" => 23750,
                "images_main" => "/img/menu/cupcakes.jpg",
                "images_preview" => [
                    "/img/menu/cupcakes.jpg",
                    "/img/menu/cupcakes.jpg",
                    "/img/menu/cupcakes.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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
                "price" => 33250,
                "images_main" => "/img/menu/macarons.jpg",
                "images_preview" => [
                    "/img/menu/macarons.jpg",
                    "/img/menu/macarons.jpg",
                    "/img/menu/macarons.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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
                "price" => 225000,
                "images_main" => "/img/menu/brownies.jpg",
                "images_preview" => [
                    "/img/menu/brownies.jpg",
                    "/img/menu/brownies.jpg",
                    "/img/menu/brownies.jpg"
                ],
                "description" => "Promo spesial hanya minggu ini",
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

        foreach ($promoProducts as $promoProduct)
        {
            PromoProduct::create($promoProduct);
        }
    }
}
