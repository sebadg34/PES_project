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

class LoginController extends Controller 
{  public $successStatus = 200;
    /** 
        * login api 
        * 
        * @return \Illuminate\Http\Response 
        */ 

       public function login(Request $request){ 
        
        $fields = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string'
        ]);

        //Estas variables solo se utilizan si es que existe algún error
        $emailError = [ "email" => ["Este correo no corresponde a ningún usuario"]];
        $passwordError = [ "password" => ["Esta contraseña no corresponde al correo ingresado"]];
        
        $user = Usuario::where('email',$fields['email'])->first();


        if($user == null){
            return response()->json(['status'=>'Unauthorised', 
                                    "errors" => $emailError], 401); 
        }

        if(Hash::check($fields['password'],$user['password'])){ 

            $user->tokens()->delete();
            $token = $user->createToken('auth_token')->plainTextToken;
            $cookie = cookie("jwt", $token, 60 * 1);
            return response()->json(['message' => 'Hi '.$user->email.', welcome to home','access_token' => $token, 'token_type' => 'Bearer', ])->withCookie($cookie);
        } 
        else{ 
            return response()->json(['status'=>'Unauthorised', 
                                    "errors" => $passwordError], 401); 
        } 
    }

    public function user(){ 
        return Auth::guard("usuario")->user();
    }


    public function logout()
    {

        $cookie = Cookie::forget("jwt");
        return response()->json(['message' => 'You have successfully logged out and the token was successfully deleted'])->withCookie($cookie);

    }

    // public function logout()
    // {
    //     auth()->usuario()->tokens()->delete();

    //     return [
    //         'message' => 'You have successfully logged out and the token was successfully deleted'
    //     ];
    // }
}