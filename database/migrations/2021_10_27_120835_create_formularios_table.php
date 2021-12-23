<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->id("id");
            
            $table->foreignId('usuario_id')->references('id')->on('usuarios');

            $table->string('email');
            //$table->foreign('email')->references('email')->on('usuarios');
            $table->string('rutEstudiante')->unique();
            $table->string('rutSostenedor');
            $table->string('parentesco');
            $table->string('nombreCompletoEstudiante');
            $table->string('nombreCompletoSostenedor');
            $table->string('sede');
            $table->string('carrera');
            $table->string('anioIngreso');
            $table->string('scanCarnetEstudiante');
            $table->string('scanCarnetSostenedor');
            // Los estados pueden ser Registrada, En proceso, rechazada y aceptada, 
            // al crear formulario, por default sera registrado
            $table->string('estado')->default("Registrada");
            $table->string('archivoDefuncion')->nullable();
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
        Schema::dropIfExists('formularios');
    }
}
