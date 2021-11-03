<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure; 

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('unauthenticated');
        }
    }

    public function handle($request, Closure $next, ...$guards)
    {
        
        if($jwt = $request->cookie("jwt")){
            $request->headers->set("Authorization", "Bearer " . $jwt);
            $request->headers->set("Accept", "application/json");
        }
        
        $this->authenticate($request, $guards);

        return $next($request);
    }

}
