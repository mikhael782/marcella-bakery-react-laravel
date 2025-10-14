<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preview extends Model
{
    use HasFactory;

    protected $table = 'tbl_previews';

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
        'menu_id'
    ];

    protected $casts = [
        'images_preview' => 'array',
        'sizes' => 'array',
        'rating' => 'decimal:1',
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
