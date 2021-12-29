<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Usuario; 

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function authenticated_to_a_user()
    {
        $credentials = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba"
        ];

        $this->json('POST', 'api/login', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "message" => 'Hi prueba@ucn.cl, welcome to home',
        ]);        
    }

    /** @test */
    public function authenticated_error()
    {
        $credentials = [
            "correo" => "prueba@gmail.com",
            "contraseña" => "prueba"
        ];

        $this->json('POST', 'api/login', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "correo" => ['Utilice el correo institucional']
                ]
        ]);        
    }

    /** @test */
    public function user_notfound()
    {
        $credentials = [
            "correo" => "prueba1234@ucn.cl",
            "contraseña" => "prueba"
        ];

        $this->json('POST', 'api/login', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "correo" => ['Este correo no corresponde a ningún usuario']
                ]
        ]);        
    }    

    /** @test */
    public function user_wrongpassword()
    {
        $credentials = [
            "correo" => "prueba@ucn.cl",
            "contraseña" => "prueba1234"
        ];

        $this->json('POST', 'api/login', $credentials, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson([
                "errors" => [
                    "contraseña" => ["Esta contraseña no corresponde al correo ingresado"]
                ]
        ]);        
    }    

}
