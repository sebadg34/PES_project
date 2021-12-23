<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UsuarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Usuario::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $password;
        return [
            'email' =>  preg_replace('/@example\..*/', '@alumnos.ucn.cl',$this->faker->unique()->safeEmail()),
            'password' => $password ?: $password = bcrypt('prueba'), // password de prueba "prueba"
        ];
    }

    

}
