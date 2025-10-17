<?php

namespace App\Filament\Resources\PromoProducts\Schemas;

use App\Models\Category;
use App\Models\Promo;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class PromoProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true),
                
                TextInput::make('original_price')
                    ->label('Original Price')
                    ->numeric()
                    ->prefix('Rp'),

                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),

                FileUpload::make('images_main')
                    ->label('Main Image')
                    ->image()
                    ->directory('promo_products/main')
                    ->disk('public')
                    ->preserveFilenames()
                    ->required(),

                FileUpload::make('images_preview')
                    ->label('Preview Image')
                    ->image()
                    ->multiple()
                    ->directory('promo_products/multiple')
                    ->disk('public')
                    ->preserveFilenames()
                    ->columnSpanFull(),

                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),

                // Untuk input size-array (Cake)
                Repeater::make('sizes')
                    ->label('Sizes (Cake)')
                    ->schema([
                        TextInput::make('size')->label('Size')->required(),
                    ])
                    ->columnSpanFull(),

                TextInput::make('rating')
                    ->numeric()
                    ->default(0.0),

                // Dropdown pilih kategori
                Select::make('category_id')
                    ->label('Category')
                    ->options(Category::pluck('name', 'id'))
                    ->required(),

                // Dropdown pilih promo
                Select::make('promo_id')
                    ->label('Promo')
                    ->options(
                        Promo::all()
                            ->mapWithKeys(function ($promo) {
                                return [$promo->id => "{$promo->title} ({$promo->slug})"];
                            })
                    )
                    ->searchable()
                    ->required(),
            ]);
    }
}
