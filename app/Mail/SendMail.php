<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;
    
    /**
     * Create a new message instance.
     *
     * @return void
     */

    private $name;

    public function __construct($name)
    {
        $this->name = $name;
        
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        return $this->from('noreply@beneficiosDGE.ucn.cl')
                    ->subject('correo de prueba')
                    ->view('random-email', [
                        'name' => $this->name,
                        'rut' => "19.950.670-6",
                        'correo' => "sebastian.delgado@alumnos.ucn.cl",
                        'carrera' => "Ingenieria civil en bla bla",
                        'id' => "2",
                        'date' => Carbon::now()]);
    }
}
