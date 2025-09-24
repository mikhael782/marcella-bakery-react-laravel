<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'tbl_menus';

    protected $fillable = [
        'name',
        'slug',
        'image',
        'price',
        'category_id',
    ];

    /**
     * Fungsi untuk relasi ke tbl categories
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
