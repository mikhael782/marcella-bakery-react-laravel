<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromoProduct extends Model
{
    use HasFactory;

    protected $table = 'tbl_promo_products';

    protected $fillable = [
        'name',
        'slug',
        'category',
        'price',
        'images_main',
        'images_preview',
        'description',
        'sizes',
        'rating',
        'reviews',
    ];

    protected $casts = [
        'images_preview' => 'array',
        'sizes' => 'array',
        'reviews' => 'array',
        'rating' => 'decimal:1',
    ];
}
