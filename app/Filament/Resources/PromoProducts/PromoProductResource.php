<?php

namespace App\Filament\Resources\PromoProducts;

use App\Filament\Resources\PromoProducts\Pages\CreatePromoProduct;
use App\Filament\Resources\PromoProducts\Pages\EditPromoProduct;
use App\Filament\Resources\PromoProducts\Pages\ListPromoProducts;
use App\Filament\Resources\PromoProducts\Schemas\PromoProductForm;
use App\Filament\Resources\PromoProducts\Tables\PromoProductsTable;
use App\Models\PromoProduct;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PromoProductResource extends Resource
{
    protected static ?string $model = PromoProduct::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'yes';

    public static function getNavigationSort(): ?int
    {
        return 5;
    }

    public static function form(Schema $schema): Schema
    {
        return PromoProductForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PromoProductsTable::configure($table);
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
            'index' => ListPromoProducts::route('/'),
            'create' => CreatePromoProduct::route('/create'),
            'edit' => EditPromoProduct::route('/{record}/edit'),
        ];
    }
}
