<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('slug')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->directory('categories')   // folder di storage/app/public/categories
                    ->disk('public')            // <--- penting biar masuk public
                    ->preserveFilenames()       // biar nama file asli (misal bolu.jpg)    // biar nama file asli (misal bolu.jpg)
            ]);
    }
}
