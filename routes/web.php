<?php

use Illuminate\Support\Facades\Route;

// Catch-all React FE, exclude admin
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!admin).*');