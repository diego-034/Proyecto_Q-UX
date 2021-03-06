<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('IdProducto');
            $table->string('Nombre',50);
            $table->string('Imagen',300);
            $table->string('Descripcion',300);
            $table->string('Color',10);
            $table->decimal('Precio',12,2);
            $table->decimal('IVA',12,2);
            $table->decimal('Descuento',12,2);
            $table->integer('TallaS');
            $table->integer('TallaM');
            $table->integer('TallaL');
            $table->boolean('Estado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
