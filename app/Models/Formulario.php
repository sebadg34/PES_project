<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;

class Formulario extends Model
{
    use HasFactory;

    protected $fillable = [
        "usuario_id",
        'rutEstudiante',
        'nombreCompletoEstudiante',
        'sede',
        'carrera',
        'anioIngreso',
        'email',
        'scanCarnetEstudiante',
        'rutSostenedor',
        'nombreCompletoSostenedor',
        'parentesco',
        'scanCarnetSostenedor',
        'estado'
    ];

    public function formulario()
    {
        return $this->hasOne(Formulario::class);
    }
}


