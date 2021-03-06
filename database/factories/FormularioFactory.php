<?php

namespace Database\Factories;

use App\Models\Formulario;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Usuario;

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
        // Listado de RUTs aleatorios para creacion de formularios de prueba
        $ruts = ["15.815.006-9","37.493.597-6","24.811.159-3","26.107.396-K","11.345.541-1","7.292.045-7",
        "18.895.305-0","2.250.514-9","19.736.905-1","28.090.407-4","13.101.632-8","20.741.894-3","19.760.963-K",
        "15.322.598-2","34.084.006-2","7.021.044-4","14.816.128-3","34.865.538-8","19.472.196-K","4.937.769-K",
        "16.875.843-K","1.243.487-1","35.028.231-9","21.851.309-3","24.099.673-1","26.326.450-9","28.553.495-K",
        "26.003.793-5","27.332.710-K","38.772.845-7","30.093.039-5","27.109.742-5","21.297.367-K","38.304.553-3",
        "32.788.646-0","21.832.630-7","21.171.529-4","7.618.590-5","9.068.624-0","31.024.550-K","11.990.567-2",
        "26.473.119-4","12.848.858-8","12.068.877-4","27.826.172-7","24.772.935-6","37.816.484-2","37.151.689-1",
        "31.572.644-1","38.483.708-5","27.742.737-0","14.459.232-8","31.931.320-6","39.051.885-4","31.479.476-1",
        "4.611.302-0","11.549.621-2","21.952.393-9","13.797.900-4","23.600.226-8","21.619.217-6","12.282.226-5",
        "16.124.844-4","28.075.353-K","38.666.449-8","26.821.468-2","25.657.441-1","14.575.690-1","2.411.862-2",
        "26.715.619-0","36.408.315-7","11.297.276-5","33.888.958-5","20.669.569-2","26.816.631-9","28.360.588-4",
        "34.694.157-K","14.729.484-0","38.947.432-0","11.862.786-5","18.484.689-6","34.384.031-4","20.190.314-9",
        "23.377.042-6","38.736.810-8","15.263.663-6","9.399.932-0","26.244.235-7","35.397.727-K","37.840.961-6",
        "7.410.596-3","17.916.520-1","24.734.289-3","13.518.909-K","25.527.857-6","37.138.130-9","33.024.842-4",
        "38.237.158-5","35.762.014-7","34.043.032-8"];

        static $password;
        return [
            'nombreCompletoEstudiante' => $this->faker->firstName(),
            'nombreCompletoSostenedor' => $this->faker->firstName(),
            'sede' => $this->faker->randomElement(["ANTOFAGASTA","COQUIMBO"]),
            'carrera' => $this->faker->randomElement([
             "Arquitectura"
            ,"Ingenier??a Civil"
            ,"Ingenier??a Civil en Gesti??n de la Construcci??n"
            ,"Ingenier??a Civil Plan Com??n"
            ,"Ingenier??a en Construcci??n"
            ,"Ingenier??a en Prevenci??n de Riesgos y Medioambiente"
            ,"Analista Qu??mico"
            ,"Geolog??a"
            ,"Licenciatura en F??sica con menci??n en Astronom??a"
            ,"Licenciatura en Matem??tica"
            ,"Qu??mica Industrial"
            ,"Biolog??a Marina"
            ,"Ingenier??a en Acuicultura"
            ,"Contador Auditor - Contador P??blico Diurno"
            ,"Contador Auditor - Contador P??blico Vespertino"
            ,"Ingenier??a Comercial"
            ,"Ingenier??a en Informaci??n y Control de Gesti??n"
            ,"Derecho"
            ,"Periodismo"
            ,"Psicolog??a"
            ,"Ingenier??a Civil Ambiental"
            ,"Ingenier??a Civil de Minas"
            ,"Ingenier??a Civil Industrial"
            ,"Ingenier??a Civil Metal??rgica"
            ,"Ingenier??a Civil Plan Com??n"
            ,"Ingenier??a Civil Qu??mica"
            ,"Ingenier??a en Metalurgia"
            ,"Ingenier??a en Prevenci??n de Riesgos y Medioambiente"
            ,"Pedagog??a en Educaci??n B??sica con Especializaci??n"
            ,"Pedagog??a en Educaci??n Diferencial con Menci??n en Desarrollo Emocional y Cognitivo"
            ,"Pedagog??a en Educaci??n Parvularia con Menci??n en Desarrollo Emocional y Cognitivo"
            ,"Pedagog??a en Filosof??a y Religi??n"
            ,"Pedagog??a en Ingl??s"
            ,"Pedagog??a en Matem??tica en Educaci??n Media"
            ,"Enfermer??a"
            ,"Kinesiolog??a"
            ,"Medicina"
            ,"Nutrici??n y Diet??tica"
            ,"Qu??mica y Farmacia"
            ,"Ingenier??a Civil en Computaci??n e Inform??tica"
            ,"Ingenier??a Civil Plan Com??n"
            ,"Ingenier??a en Computaci??n e Inform??tica"
            ,"Ingenier??a en Tecnolog??as de Informaci??n"
            ,"Licenciatura en Ciencias Religiosas"
            ,"Pedagog??a en Filosof??a y Religi??n"
            ,"Programa de Prosecuci??n de Estudios de Formaci??n Pedag??gica"]),
            'anioIngreso' => $this->faker->randomElement([2014,2015,2016,2017,2018,2019,2020]),
            'scanCarnetEstudiante' => "mad3tdDcUT7YUtqPvmZubLeyMG5bYtxiespu7Eib.png",
            'scanCarnetSostenedor' => "mad3tdDcUT7YUtqPvmZubLeyMG5bYtxiespu7Eib.png",
            'parentesco' => $this->faker->randomElement(["PADRE","MADRE","TUTOR"]),
            'rutSostenedor' => $this->faker->randomElement($ruts),
            'rutEstudiante' => $this->faker->unique()->randomElement($ruts),
            'email' => preg_replace('/@example\..*/', '@alumnos.ucn.cl',$this->faker->unique()->safeEmail()),
            "usuario_id" => Usuario::factory(),

        ];
    }


}
