<?php

namespace App\Filament\Resources\Previews\Pages;

use App\Filament\Resources\Previews\PreviewResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPreview extends EditRecord
{
    protected static string $resource = PreviewResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
