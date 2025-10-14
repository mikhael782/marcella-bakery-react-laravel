<div
    <?php echo e($attributes
            ->merge([
                'id' => $getId(),
            ], escape: false)
            ->merge($getExtraAttributes(), escape: false)); ?>

>
    <?php echo e($getChildSchema()); ?>

</div>
<?php /**PATH C:\xampp\htdocs\marcella_bakery_and_cake\vendor\filament\schemas\resources\views/components/grid.blade.php ENDPATH**/ ?>