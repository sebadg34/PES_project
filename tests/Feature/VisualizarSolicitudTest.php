<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VisualizarSolicitudTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function verSolicitud_nulo()
    {
        $credentialsUser = [
            "correo" => "walter42@alumnos.ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/ver-registro', ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                    "message" => 'Este usuario no ha completado el formulario',
        ]);        
    }    

    /** @test */
    public function verSolicitud_ok()
    {
        $credentialsUser = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $solicitudes = $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/ver-registro', ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                    "pesoCE" => 87232,
        ]);        
    }        
}
