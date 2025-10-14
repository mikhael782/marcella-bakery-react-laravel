<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tbl_promo_products', function (Blueprint $table) {
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('category');
            $table->decimal('price', 10, 2);
            $table->string('images_main');
            $table->json('images_preview')->nullable();
            $table->text('description');
            $table->json('sizes')->nullable();
            $table->decimal('rating', 2, 1)->nullable();
            $table->json('reviews')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tbl_promo_products', function (Blueprint $table) {
            //
        });
    }
};
