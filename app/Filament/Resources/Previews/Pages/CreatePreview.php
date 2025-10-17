<?php

namespace App\Filament\Resources\Previews\Pages;

use App\Filament\Resources\Previews\PreviewResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePreview extends CreateRecord
{
    protected static string $resource = PreviewResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotificationTitle(): ?string
    {
        return 'Preview berhasil ditambahkan!';
    }
}
