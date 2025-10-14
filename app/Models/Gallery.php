<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $table = 'tbl_gallerys';

    protected $fillable = [
        'images',
        'name',
        'slug',
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
