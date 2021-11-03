<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\Formulario; 

class RegistroController extends Controller
{
    public function registro(Request $request)
    {
        /*
        Formulario::create([
            'rutEstudiante' => $request -> rutEstudiante,
            'nombreCompletoEstudiante' => $request -> nombreCompletoEstudiante,
            'sede' => $request -> sede,
            'carrera' => $request -> carrera,
            'anioIngreso' => $request -> anioIngreso,
            'email' => $request -> email,
            'scanCarnetEstudiante' => $request -> scanCarnetEstudiante,
            'rutSostenedor' => $request -> rutSostenedor,
            'nombreCompletoSostenedor' => $request -> nombreCompletoSostenedor,
            'parentezco' => $request -> parentezco,
            'scanCarnetSostenedor' => $request -> scanCarnetSostenedor
        ]);*/

        
        $formulario = new Formulario();
        $formulario -> rutEstudiante = $request -> rutEstudiante;
        $formulario -> nombreCompletoEstudiante = $request -> nombreCompletoEstudiante;
        $formulario -> sede = $request -> sede;
        $formulario -> carrera = $request -> carrera;
        $formulario -> anioIngreso = $request -> anioIngreso;
        $formulario -> email = $request -> email;
        //$formulario -> scanCarnetEstudiante = $request -> scanCarnetEstudiante;

        $formulario -> rutSostenedor = $request -> rutSostenedor;
        $formulario -> nombreCompletoSostenedor = $request -> nombreCompletoSostenedor;
        $formulario -> parentezco = $request -> parentezco;
        //$formulario -> scanCarnetSostenedor = $request -> scanCarnetSostenedor;
        
        $formulario -> save();

        return response()->json([
            'message' => $request -> sede,
        ]);
    }

    public function verRegistro(){
        
    }
}
