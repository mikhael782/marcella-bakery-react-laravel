<?php

namespace App\Filament\Resources\Previews\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use App\Models\Category;
use App\Models\Menu;

class PreviewForm
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

                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),

                // Upload satu gambar utama
                FileUpload::make('images_main')
                    ->label('Main Image')
                    ->image()
                    ->directory('previews/main')
                    ->disk('public')
                    ->preserveFilenames()
                    ->required(),

                // Upload beberapa gambar tambahan
                FileUpload::make('images_preview')
                    ->label('Preview Images')
                    ->image()
                    ->multiple()
                    ->directory('previews/multiple')
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

                // Dropdown pilih menu
                Select::make('menu_id')
                    ->label('Menu')
                    ->options(
                        Menu::all()
                            ->mapWithKeys(function ($menu) {
                                return [$menu->id => "{$menu->name} ({$menu->slug})"];
                            })
                    )
                    ->searchable()
                    ->required(),
            ]);
    }
}