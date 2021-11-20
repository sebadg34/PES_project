<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Usuario;
use App\Models\Formulario;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Crear 10 usuarios aleatorios (default Estudiantes).
        Usuario::factory()->count(10)->create();
        Usuario::factory()->hasFormulario(1)->count(10)->create();
        
        // Crear usuario estudiante de prueba.
        Usuario::create([
            'email' => 'prueba@ucn.cl',
            'password' => bcrypt('prueba'),
            'isAdmin' => 0,
        ]);

        // Crear usuario admin de prueba.
        Usuario::create([
            'email' => 'admin@ucn.cl',
            'password' => bcrypt('prueba'),
            'isAdmin' => 1,
        ]);

    }
}
