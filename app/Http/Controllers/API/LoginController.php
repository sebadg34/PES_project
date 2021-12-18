<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\Models\Usuario; 
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;
use Auth;


use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;


class LoginController extends Controller 
{  public $successStatus = 200;
    /** 
        * login api 
        * 
        * @return \Illuminate\Http\Response 
        */ 

       public function login(Request $request){ 
        
        $validator = Validator::make($request->all(), [
            'correo'=>'required|email',
            'contraseña'=>'required|string',
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->messages(),
            ]);
        }

        //Estas variables solo se utilizan si es que existe algún error
        $emailError = [ "correo" => ["Este correo no corresponde a ningún usuario"]];
        $passwordError = [ "contraseña" => ["Esta contraseña no corresponde al correo ingresado"]];
        
        $user = Usuario::where('email',$request['correo'])->first();


        if($user == null){
            return response()->json(["errors" => $emailError]); 
        }

        if(Hash::check($request['contraseña'],$user['password'])){ 

            $user->tokens()->delete();
            $token = $user->createToken('auth_token')->plainTextToken;
            $cookie = cookie("jwt", $token, 0);

            $name = "Dino Cajic";
            $sendToEmail = strtolower('sebadg98@gmail.com');
            //$sendToEmail = strtolower('manuel.trigo@alumnos.ucn.cl');
            
            Mail::to($sendToEmail)->send(new SendMail($name));
        
            

            return response()->json(['message' => 'Hi '.$user->email.', welcome to home'
            ,'access_token' => $token
            ,'isAdmin' => $user->isAdmin
            , 'token_type' => 'Bearer', ])->withCookie($cookie);
        } 
        else{ 
            return response()->json(["errors" => $passwordError]); 
        } 
    }

    public function user(){
        return Auth::guard("usuario")->user();
    }

    //porter76@example.net
    public function logout(Request $request)
    {
        $cookie = Cookie::forget("jwt");
        Auth::guard("usuario")->user()->tokens()->delete();
        return response()->json(['message' => 'You have successfully logged out and the token was successfully deleted'])->withCookie($cookie);

    }

    public function check()
    {
        $check = Auth::guard("usuario")->check();
        return response()->json(['message' => $check,'isAdmin' => $user->isAdmin]);

    }    
}