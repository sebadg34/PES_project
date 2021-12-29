<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function register_testRut()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233587-1',
            'NombreEstudiante'=> 'Manuel Alejandro Trigo Montalbán',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'manuel.trigo@alumnos.ucn.cl',
            'RutSostenedor'=>'10.366.8557',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',
            'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "RutEstudiante" => ["El formato del campo rut estudiante es inválido."],
                    "RutSostenedor" => ["El formato del campo rut sostenedor es inválido."],
                ]
        ]);        
    }

    /** @test */
    public function register_testNombres()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233.587-1',
            'NombreEstudiante'=> 'Manuel Alej78andro Trigo Montalbán',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'manuel.trigo@alumnos.ucn.cl',
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'1234',
            'parentesco'=>'MADRE',
            'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "NombreEstudiante" => ["El formato del campo nombre estudiante es inválido."],
                    "NombreSostenedor" => ["El formato del campo nombre sostenedor es inválido."],
                ]
        ]);        
    }    

    /** @test */
    public function register_testEmail()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233.587-1',
            'NombreEstudiante'=> 'Manuel Alejandro Trigo Montalbán',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'manuel.trigo@alumnos.ucn.cl',
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',
            'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "email" => ["Utilice el correo institucional"],
                ]
        ]);        
    }        

    /** @test */
    public function register_testArchivos()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233.587-1',
            'NombreEstudiante'=> 'Manuel Alejandro Trigo Montalbán',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'manuel.trigo@alumnos.ucn.cl',
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',
            "CarnetEstudiante" => "",
            "CarnetSostenedor" => "",
            //'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            //'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "CarnetSostenedor" => ["El campo carnet sostenedor es obligatorio."],
                    "CarnetEstudiante" => ["El campo carnet estudiante es obligatorio."],
                ]
        ]);        
    }            

    /** @test */
    public function register_testEmpty()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233.587-1',
            'NombreEstudiante'=> '',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'',
            'RutSostenedor'=>'',
            'NombreSostenedor'=>'',
            'parentesco'=>'MADRE',
            'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "NombreEstudiante" => ["El campo nombre estudiante es obligatorio."],
                    "email" => ["El campo email es obligatorio."],
                    "NombreSostenedor" => ["El campo nombre sostenedor es obligatorio."],
                    "RutSostenedor" => ["El campo rut sostenedor es obligatorio."],
                ]
        ]);        
    }            

    /** @test */
    public function register_test_ok()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutEstudiante'=>'12.233.587-1',
            'NombreEstudiante'=> 'Manuel Alejandro Trigo Montalbán',
            'sede'=> 'ANTOFAGASTA',
            'carrera'=>'INGENIERÍA CIVIL EN COMPUTACIÓN E INFORMÁTICA',
            'AñoIngreso'=>'2017',
            'email'=>'manuel.trigo@alumnos.ucn.cl',
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',
            'CarnetEstudiante' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true),
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/registro', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                    "message" => "success",
        ]);        
    }    

}
