import React from 'react'

export default function Footer() {
  return (
    <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <ul>
                            <li>Dirección: Alvaréz de Toledo 764</li>
                            <li><a href="tel:600123456">Teléfono: +56 9 56.594.791</a></li>
                            <li>Correo electrónico: soporte@eticoysustentable.cl</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Enlaces útiles</h6>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">About Our Shop</a></li>
                            <li><a href="/">Secure Shopping</a></li>
                            <li><a href="/">Delivery infomation</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="/">Who We Are</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Innovation</a></li>
                            <li><a href="/">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Únase a nuestro boletín ahora</h6>
                        <p>Reciba actualizaciones por correo electrónico sobre nuestra última tienda y ofertas especiales.</p>
                        <form action="#">
                            <input type="text" placeholder="Ingrese su correo" />
                            <button type="submit" className="site-btn">Suscribir</button>
                        </form>
                        <div className="footer__widget__social">
                            <a href="/"><i className="fa fa-facebook"></i></a>
                            <a href="/"><i className="fa fa-instagram"></i></a>
                            <a href="/"><i className="fa fa-twitter"></i></a>
                            <a href="/"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados | Esta plantilla esta realizada por <a href="/" target="_blank">Ético y Sustentable</a>
                            </p>
                        </div>
                        <div className="footer__copyright__payment">
                            <img src="img/payment-item.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
