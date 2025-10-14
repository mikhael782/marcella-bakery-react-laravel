<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    
    protected $fillable = [
        'name',
        'slug',
        'image',
    ];

    /**
     * Fungsi untuk hasMany ke tbl_menus
     */
    public function menus()
    {
        return $this->hasMany(Menu::class, 'category_id');
    }

    /**
     * Fungsi untuk hasMany ke tbl_gallerys
     */
    public function gallerys()
    {
        return $this->hasMany(Gallery::class, 'category_id');
    }

    /**
     * Fungsi untuk hasMany ke tbl_previews
     */
    public function previews()
    {
        return $this->hasMany(Preview::class, 'category_id');
    }
}
