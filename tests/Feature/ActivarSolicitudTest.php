<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ActivarSolicitudTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function activacion_ok()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [      
            "estado" => "En proceso",
            'archivoDefuncion' => new \Illuminate\Http\UploadedFile(storage_path('app\public\test\test.png'), 'test.png', null, null, true)
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/adjuntar-defuncion', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "message" => "success",
        ]);        
    }        

    /** @test */
    public function activacion_fail()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $credentials = [      
            "estado" => "En proceso",
            'archivoDefuncion' => ""
        ];

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('POST', 'api/adjuntar-defuncion', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "archivoDefuncion" => ['El campo archivo defuncion es obligatorio.'],
                ]
        ]);        
    }          
}
