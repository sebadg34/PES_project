<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VisualizarSolicitudesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function verSolicitudes()
    {
        $credentialsUser = [
            "correo" => "admin@ucn.cl",
            "contraseña" => "prueba"
        ];

        $requestUser = $this->json('POST','api/login', $credentialsUser, ['Accept' => 'application/json']);        

        $solicitudes = $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/registros', ['Accept' => 'application/json']);        
    
        $this->withHeader('Authorization', 'Bearer ' . $requestUser["access_token"])->json('GET', 'api/registros', ['Accept' => 'application/json'])
        ->assertStatus(200)
        ->assertJsonStructure([
            'data' => [
                '*' => [
                    'id',
                    'usuario_id',
                    'email',
                    'rutEstudiante',
                    'rutSostenedor',
                    'parentesco',
                    'nombreCompletoEstudiante',
                    'nombreCompletoSostenedor',
                    'sede',
                    'carrera',
                    'anioIngreso',
                    'scanCarnetEstudiante',
                    'scanCarnetSostenedor',
                    'estado',
                    'archivoDefuncion',
                    'created_at',
                    'updated_at',
                ]
            ]
        ]);
    }    
}
