<?php

namespace App\Filament\Resources\PromoProducts\Pages;

use App\Filament\Resources\PromoProducts\PromoProductResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPromoProduct extends EditRecord
{
    protected static string $resource = PromoProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): ?string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getSavedNotificationTitle(): ?string
    {
        return 'Promo Product berhasil diedit!';
    }
}
