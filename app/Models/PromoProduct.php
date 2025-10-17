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
        'price',
        'images_main',
        'images_preview',
        'description',
        'sizes',
        'rating',
        'category_id',
        'promo_id',
        'original_price'
    ];

    protected $casts = [
        'images_preview' => 'array',
        'sizes' => 'array',
        'rating' => 'decimal:1',
    ];

    public function promo()
    {
        return $this->belongsTo(Promo::class, 'promo_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
