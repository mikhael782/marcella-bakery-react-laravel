<?php

namespace App\Filament\Resources\Promos\Schemas;

use App\Models\Category;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class PromoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Name')
                    ->required(),

                TextInput::make('slug')
                    ->required(),

                FileUpload::make('images')
                    ->image()
                    ->directory('promos')
                    ->disk('public')
                    ->preserveFilenames()
                    ->required(),

                Select::make('category_id')
                    ->label('Category')
                    ->options(Category::pluck('name', 'id'))
                    ->required(),

                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}