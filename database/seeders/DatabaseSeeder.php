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
        // \App\Models\User::factory(10)->create();
        Usuario::factory()->count(10)->create();


        $user = Usuario::create([
            'email' => 'prueba@ucn.cl',
            'password' => bcrypt('prueba'),
        ]);

        

        // Formulario::factory()->count(10)->create();
    }
}
