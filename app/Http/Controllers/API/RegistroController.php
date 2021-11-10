<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\Formulario; 
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;
use Auth;
use App\Models\Usuario; 
use Illuminate\Http\Resources\Json\JsonResource;

class RegistroController extends Controller
{
    public function registro(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            'RutEstudiante'=>'required|string',
            'NombreEstudiante'=>'required|string',
            'sede'=>'required|string',
            'carrera'=>'required|string',
            'AñoIngreso'=>'required|string',
            'email'=>'required|string',
            'RutSostenedor'=>'required|string',
            'NombreSostenedor'=>'required|string',
            'parentesco'=>'required|string',
            'CarnetEstudiante' => 'required|mimes:png,jpg,jpeg,pdf|max:2048',
            'CarnetSostenedor' => 'required|mimes:png,jpg,jpeg,pdf|max:2048'
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->messages(),
            ]);
        }

        $id = Auth::guard("usuario")->user()->id;

        event(new Registered($formulario = $this->create($request->all(), $id)));

        return response()->json([
            "message" => "success", 200]);

    }

    public function verRegistro(){

        $id = Auth::guard("usuario")->user()->id;

        $formulario = Formulario::where('id_usuario',$id)->first();

        if($formulario == null){
            return response()->json(['message'=>'Este usuario no ha completado el formulario'], 200);             
        }

        $formularioJson = [
            "id" => $formulario->id,
            "id_usuario" => $formulario->id_usuario,
            "email" => $formulario->email,
            "rutEstudiante" => $formulario->rutEstudiante,
            "rutSostenedor" => $formulario->rutSostenedor,
            "parentesco" => $formulario->parentezco,
            "nombreCompletoEstudiante" => $formulario->nombreCompletoEstudiante,
            "nombreCompletoSostenedor" => $formulario->nombreCompletoSostenedor,
            "sede" => $formulario->sede,
            "carrera" => $formulario->carrera,
            "anioIngreso" => $formulario->anioIngreso,
        ];
      
        //Dan error :(
        //$formulario->scanCarnetEstudiante;
        //$formulario->scanCarnetSostenedor;

        return response()->json(['data'=> $formularioJson], 200);             
        
        
    }

    public function create(array $data, $id)
    {
        return Formulario::create([
            "id_usuario" => $id,
            'email' => $data['email'],
            'rutEstudiante' => $data['RutEstudiante'],
            'rutSostenedor' => $data['RutSostenedor'],
            'parentezco' => $data['parentesco'],
            'nombreCompletoEstudiante' => $data['NombreEstudiante'],
            'nombreCompletoSostenedor' => $data['NombreSostenedor'],
            'sede' => $data['sede'],
            'carrera' => $data['carrera'],
            'anioIngreso' => $data['AñoIngreso'],
            'scanCarnetEstudiante' => base64_encode($data['CarnetEstudiante']),
            'scanCarnetSostenedor' => base64_encode($data['CarnetSostenedor']),
        ]);
    }    

}
