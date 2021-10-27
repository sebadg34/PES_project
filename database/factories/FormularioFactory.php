<?php

namespace Database\Factories;

use App\Models\Formulario;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FormularioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Formulario::class;
    
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $password;
        return [
            'nombreapellido' => $this->faker->firstName(),
            'sede' => $this->faker->randomElement(["Antofagasta","Coquimbo"]),
            'carrera' => $this->faker->jobTitle(),
            'añoingreso' => $this->faker->randomElement([2015,2016,2017,2018,2019,2020,2021]),
            'scancarnet' => "test",
        ];
    }


}
