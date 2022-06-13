import React from 'react'

export default function Contact() {
  return (
    <div>
        <section class="contact spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div class="contact__widget">
                            <span class="icon_phone"></span>
                            <h4>Teléfono</h4>
                            <p>+56-9-5659-4791</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div class="contact__widget">
                            <span class="icon_pin_alt"></span>
                            <h4>Dirección</h4>
                            <p>Alvarez de toledo 764, 1017</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div class="contact__widget">
                            <span class="icon_clock_alt"></span>
                            <h4>Horarios</h4>
                            <p>8:00 am to 18:00 pm</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div class="contact__widget">
                            <span class="icon_mail_alt"></span>
                            <h4>Email</h4>
                            <p>soporte@eticoysustentable.cl</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                height="500" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"
            />
            <div class="map-inside">
                <i class="icon_pin"></i>
                <div class="inside-widget">
                    <h4>New York</h4>
                    <ul>
                        <li>Teléfono: +56-9-5659-4791</li>
                        <li>Dirección: Alvarez de toledo 764, 1017</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contact-form spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact__form__title">
                            <h2>Deja tu mensaje</h2>
                        </div>
                    </div>
                </div>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <input type="text" placeholder="Tu nombre" />
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <input type="text" placeholder="Tu Email" />
                        </div>
                        <div class="col-lg-12 text-center">
                            <textarea placeholder="Tu mensaje"></textarea>
                            <button type="submit" class="site-btn">ENVIAR MENSAJE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
