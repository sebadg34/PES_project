<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CambiarSostenedorTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function cambiarSostenedor_failRut()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutSostenedor'=>'10.3663f855-7',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',            
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/cambiar-sostenedor', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "RutSostenedor" => ["El formato del campo rut sostenedor es inválido."],
                ]
        ]);        
    }    

    /** @test */
    public function cambiarSostenedor_failNombre()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'An1Montalbán Flores_',
            'parentesco'=>'MADRE',            
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/cambiar-sostenedor', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "NombreSostenedor" => ["El formato del campo nombre sostenedor es inválido."],
                ]
        ]);        
    }        

    /** @test */
    public function cambiarSostenedor_failCarnet()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutSostenedor'=>'10.366.855-7',
            'NombreSostenedor'=>'Ana Mercedes Montalbán Flores',
            'parentesco'=>'MADRE',            
            'CarnetSostenedor' => ""
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/cambiar-sostenedor', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "CarnetSostenedor" => ["El campo carnet sostenedor es obligatorio."],
                ]
        ]);        
    }        

    /** @test */
    public function cambiarSostenedor_empty()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutSostenedor'=>'',
            'NombreSostenedor'=>'',
            'parentesco'=>'MADRE',            
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/cambiar-sostenedor', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "RutSostenedor" => ["El campo rut sostenedor es obligatorio."],
                    "NombreSostenedor" => ["El campo nombre sostenedor es obligatorio."]
                ]
        ]);        
    }        

    /** @test */
    public function cambiarSostenedor_ok()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [
            'RutSostenedor'=>'11.111.111-1',
            'NombreSostenedor'=>'Manuel Jesus Trigo Taborga',
            'parentesco'=>'PADRE',            
            'CarnetSostenedor' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/cambiar-sostenedor', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "message" => "success",
        ]);        
    }        
}
