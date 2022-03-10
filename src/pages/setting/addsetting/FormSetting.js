import React from 'react'

export default function addForm() {
  return (
    <div className="card-body">
        <form>
            <div className="card-body row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="exampleInput">RUT DE LA EMPRESA</label>
                        <input type="input" className="form-control" id="rutEmpresa" placeholder="INGRESAR RUT DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">NOMBRE DE LA EMPRESA</label>
                        <input type="input" className="form-control" id="nombreEmpresa" placeholder="INGRESAR NOMBRE DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">SIGLAS DE LA EMPRESA</label>
                        <input type="input" className="form-control" id="siglasEmpresa" placeholder="INGRESAR SIGLAS DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">ADMINISTRADOR</label>
                        <input type="input" className="form-control" id="administradorEmpresa" placeholder="INGRESAR NOMBRE DEL ADMINISTRADOR DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">CIUDAD</label>
                        <input type="input" className="form-control" id="ciudadEmpresa" placeholder="INGRESAR CIUDAD DE UBICACION DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputFile">LOGO</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                <label className="custom-file-label" for="exampleInputFile">SELECCIONAR ARCHIVO</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="exampleInput">TELEFONO OFICINA</label>
                        <input type="input" className="form-control" id="telefonoOficinaEmpresa" placeholder="INGRESAR Nro. TELEFONICO DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">TELEFONO ADMINISTRATIVO</label>
                        <input type="input" className="form-control" id="telefonoAdministrativoEmpresa" placeholder="INGRESAR Nro. TELEFONICO ADMINISTRATIVO DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">PAGINA WEB</label>
                        <input type="url" className="form-control" id="paginaWebEmpresa" placeholder="INGRESAR LA PAGINA WEB DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">EMAIL</label>
                        <input type="email" className="form-control" id="emailEmpresa" placeholder="INGRESAR EMAIL DE LA EMPRESA" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInput">DIRECCION</label>
                        <textarea className="form-control" rows="5" placeholder="INGRESAR LA DIRECCION DE LA EMPRESA" />                    </div>
                </div>
            </div>

            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}