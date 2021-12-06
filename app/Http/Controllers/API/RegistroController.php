<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\Formulario; 
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;
use Auth;
use App\Models\Usuario; 

use Storage;
use Illuminate\Support\Facades\File;

class RegistroController extends Controller
{
    public function registro(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            'RutEstudiante'=>'required|regex:/^[0-9]{1,2}(.([0-9]{3})){2}-[0-9]{1}$/',
            'NombreEstudiante'=>'required|regex:/^[a-zA-ZñáéíóúÁÉÍÓÚ ]+(\s[a-zA-ZñáéíóúÁÉÍÓÚ ]*)*[a-zA-ZñáéíóúÁÉÍÓÚ]$/',
            'sede'=>'required|string',
            'carrera'=>'required|string',
            'AñoIngreso'=>'required|string',
            'email'=>'required|regex:/^([a-zA-Z0-9_\-\.]+)@(alumnos.)?ucn.cl$/',
            'RutSostenedor'=>'required|regex:/^[0-9]{1,2}(.([0-9]{3})){2}-[0-9]{1}$/',
            'NombreSostenedor'=>'required|regex:/^[a-zA-ZñáéíóúÁÉÍÓÚ ]+(\s[a-zA-ZñáéíóúÁÉÍÓÚ ]*)*[a-zA-ZñáéíóúÁÉÍÓÚ]$/',
            'parentesco'=>'required|string',
            'CarnetEstudiante' => 'required|mimes:png,jpg,jpeg,pdf|max:2048',
            'CarnetSostenedor' => 'required|mimes:png,jpg,jpeg,pdf|max:2048'
        ],
        [
            'email.regex' => 'Utilice el correo institucional',
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->messages(),
            ]);
        }

        $carnetEstudiante = $request->file('CarnetEstudiante');
        $CE_path = $carnetEstudiante->store("carnet", 'public');
        $carnetSostenedor = $request->file('CarnetSostenedor');
        $CS_path = $carnetSostenedor->store("carnet", 'public');

        $id = Auth::guard("usuario")->user()->id;

        event(new Registered($formulario = $this->create($request->all(), $id, $CE_path, $CS_path)));

        return response()->json([
            "message" => "success", 200]);

    }

    public function cambiarSostenedor(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            'RutSostenedor'=>'required|regex:/^[0-9]{1,2}(.([0-9]{3})){2}-[0-9]{1}$/',
            'NombreSostenedor'=>'required|regex:/^[a-zA-ZñáéíóúÁÉÍÓÚ ]+(\s[a-zA-ZñáéíóúÁÉÍÓÚ ]*)*[a-zA-ZñáéíóúÁÉÍÓÚ]$/',
            'parentesco'=>'required|string',
            'CarnetSostenedor' => 'required|mimes:png,jpg,jpeg,pdf|max:2048'
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->messages(),
            ]);
        }

        $carnetSostenedor = $request->file('CarnetSostenedor');
        Storage::delete("public/carnet/" . $request->filename);
        $carnetSostenedor = $request->file('CarnetSostenedor');
        $CS_path = $carnetSostenedor->store("carnet", 'public');

        $id = Auth::guard("usuario")->user()->id;

        $this->update($request->all(), $id, $CS_path);
        
        return response()->json([
            "message" => "success", 200]);

    }    

    public function verRegistro(){

        $id = Auth::guard("usuario")->user()->id;

        $formulario = Formulario::where('usuario_id',$id)->first();

        if($formulario == null){
            return response()->json(['message'=>'Este usuario no ha completado el formulario'], 200);             
        }

        $pesoCE = Storage::size("public/carnet/" . $formulario->scanCarnetEstudiante);
        $pesoCS = Storage::size("public/carnet/" . $formulario->scanCarnetSostenedor);
      
        return response()->json(['data' => $formulario, "pesoCE" => $pesoCE, "pesoCS" => $pesoCS], 200);             
        
        
    }

    public function verRegistroByID($id){

        $formulario = Formulario::where('id',$id)->first();

        if($formulario == null){
            return response()->json(['message'=>'Este formulario no existe'], 200);             
        }

        $pesoCE = Storage::size("public/carnet/" . $formulario->scanCarnetEstudiante);
        $pesoCS = Storage::size("public/carnet/" . $formulario->scanCarnetSostenedor);
      
        return response()->json(['data' => $formulario, "pesoCE" => $pesoCE, "pesoCS" => $pesoCS], 200);             
        
        
    }


    public function create(array $data, $id, $CE_path, $CS_path)
    {
        return Formulario::create([
            "usuario_id" => $id,
            'email' => $data['email'],
            'rutEstudiante' => $data['RutEstudiante'],
            'rutSostenedor' => $data['RutSostenedor'],
            'parentesco' => $data['parentesco'],
            'nombreCompletoEstudiante' => $data['NombreEstudiante'],
            'nombreCompletoSostenedor' => $data['NombreSostenedor'],
            'sede' => $data['sede'],
            'carrera' => $data['carrera'],
            'anioIngreso' => $data['AñoIngreso'],
            'scanCarnetEstudiante' => basename($CE_path),
            'scanCarnetSostenedor' => basename($CS_path),
        ]);
    }    

    public function update(array $data, $id, $CS_path)
    {    
        return Formulario::where("usuario_id", $id)->update([
            'rutSostenedor' => $data['RutSostenedor'],
            'nombreCompletoSostenedor' => $data['NombreSostenedor'],
            'parentesco' => $data['parentesco'],
            'scanCarnetSostenedor' => basename($CS_path),            
        ]);
    }   
    
    
    public function getRegistros(){
        $formularios = Formulario::all();
        return response()->json(['data' => $formularios], 200);      
    }


}
