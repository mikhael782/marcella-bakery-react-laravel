<?php

namespace App\Filament\Resources\Galleries\Schemas;

use App\Models\Category;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                TextInput::make('slug')
                    ->required(),

                Select::make('category_id')
                    ->label('Category')
                    ->options(Category::pluck('name', 'id'))
                    ->required(),

                FileUpload::make('images')
                    ->image()
                    ->directory('galleries')
                    ->disk('public')
                    ->preserveFilenames()
                    ->required(),
            ]);
    }
}
