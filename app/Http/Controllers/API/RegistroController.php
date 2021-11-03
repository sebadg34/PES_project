<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\Formulario; 

class RegistroController extends Controller
{
    public function registro(Request $request)
    {
        
        $formulario = new Formulario();
        $formulario -> rutEstudiante = $request -> rutEstudiante;
        $formulario -> nombreCompletoEstudiante = $request -> nombreCompletoEstudiante;
        $formulario -> sede = $request -> sede;
        $formulario -> carrera = $request -> carrera;
        $formulario -> anioIngreso = $request -> anioIngreso;
        $formulario -> email = $request -> email;
        $formulario -> rutSostenedor = $request -> rutSostenedor;
        $formulario -> nombreCompletoSostenedor = $request -> nombreCompletoSostenedor;
        $formulario -> parentezco = $request -> parentezco;

        //$formulario -> scanCarnetSostenedor = $request -> scanCarnetSostenedor;
        //$formulario -> scanCarnetEstudiante = $request -> scanCarnetEstudiante;

        $formulario -> save();

        return response()->json([
            'message' =>"Registro exitoso de formulario",
        ]);
    }

    public function verRegistro(){
        
    }
}
