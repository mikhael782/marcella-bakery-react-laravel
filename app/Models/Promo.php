<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    use HasFactory;

    protected $table = 'tbl_promos';

    protected $fillable = [
        'title',
        'slug',
        'images',
        'category_id',
        'description',
    ];

    /**
     * Fungsi untuk relasi ke tbl categories
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
