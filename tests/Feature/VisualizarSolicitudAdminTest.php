<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VisualizarSolicitudAdminTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function solicitudAdmin_nulo()
    {
        $credentialsUser = [
            "correo" => "admin@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        
        $id = "110";

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/ver-registro/' . $id, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                    "message" => 'Este formulario no existe',
        ]);        
    }    

    /** @test */
    public function solicitudAdmin_ok()
    {
        $credentialsUser = [
            "correo" => "admin@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        
        $id = "14";

        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/ver-registro/' . $id, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                'pesoCE' => 87232,
        ]);      
    }        
}
