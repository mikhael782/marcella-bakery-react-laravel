<?php

namespace App\Filament\Resources\Previews;

use App\Filament\Resources\Previews\Pages\CreatePreview;
use App\Filament\Resources\Previews\Pages\EditPreview;
use App\Filament\Resources\Previews\Pages\ListPreviews;
use App\Filament\Resources\Previews\Schemas\PreviewForm;
use App\Filament\Resources\Previews\Tables\PreviewsTable;
use App\Models\Preview;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PreviewResource extends Resource
{
    protected static ?string $model = Preview::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'yes';

    public static function form(Schema $schema): Schema
    {
        return PreviewForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PreviewsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPreviews::route('/'),
            'create' => CreatePreview::route('/create'),
            'edit' => EditPreview::route('/{record}/edit'),
        ];
    }
}
