<?php

namespace App\Filament\Resources\PromoProducts\Pages;

use App\Filament\Resources\PromoProducts\PromoProductResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePromoProduct extends CreateRecord
{
    protected static string $resource = PromoProductResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotificationTitle(): ?string
    {
        return 'Promo Product berhasil ditambahkan!';
    }
}
