<?php

namespace App\Filament\Resources\Menus\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class MenuForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                TextInput::make('slug')
                    ->required(),

                FileUpload::make('image')
                    ->image()
                    ->directory('menus')   // folder di storage/app/public/categories
                    ->disk('public')            // <--- penting biar masuk public
                    ->preserveFilenames()    // biar nama file asli (misal bolu.jpg)    // biar nama file asli (misal bolu.jpg)
                    ->required(),

                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),

                Select::make('category_id')
                    ->label('Category')
                    ->relationship('category', 'name') // ambil relasi Category->name
                    ->required(),
            ]);
    }
}
