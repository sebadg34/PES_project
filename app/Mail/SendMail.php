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
    private $rut;
    private $correo;
    private $carrera;
    private $id;
    private $sede;
    public function __construct($data)
    {
        $this->name = $data["name"];
        $this->rut = $data["rut"];
        $this->correo = $data["correo"];
        $this->carrera = $data["carrera"];
        $this->id = $data["id"];
        $this->sede = $data["sede"];
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
                        'rut' => $this->rut,
                        'correo' => $this->correo,
                        'carrera' => $this->carrera,
                        'id' => $this->id,
                        'sede' => $this->sede,
                        'date' => Carbon::now()]);
    }
}
