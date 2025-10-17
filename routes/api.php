<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PreviewController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\PromoProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}/products', [CategoryController::class, 'products']);

Route::get('/menus', [MenuController::class, 'index']);
Route::get('/menus/related/{id}', [MenuController::class, 'relatedItems']);
Route::get('/menus/{slug}', [MenuController::class, 'showPreview']);
Route::get('/preview/{id}/{slug}', [PreviewController::class, 'index'])->name('preview.show');

Route::get('/promos', [PromoController::class, 'index']);
Route::get('/promos/{slug}', [PromoController::class, 'showPromoProduct']);
Route::get('/promo-products/{id}/{slug}', [PromoProductController::class, 'index'])->name('promo_product.show');

Route::get('/gallerys', [GalleryController::class, 'index']);
Route::get('/categories/{slug}/gallery', [GalleryController::class, 'galleryPage']);