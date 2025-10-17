<?php

namespace App\Filament\Resources\PromoProducts\Pages;

use App\Filament\Resources\PromoProducts\PromoProductResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPromoProducts extends ListRecords
{
    protected static string $resource = PromoProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
