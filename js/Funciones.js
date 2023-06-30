class Empleado {
  constructor(nombre, apellido, sexo, fechaNacimiento, fechaIngreso, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaIngreso = fechaIngreso;
    this.salario = salario;
  }

  verNombre() {
    return (this.Nivel = document.getElementById("nombre").value);
  }

  verApellido() {
    return (this.Nivel = document.getElementById("apellido").value);
  }

  verGenero() {
  return (this.Nivel = document.getElementById("sexo").value);
  }

  verNivel() {
    return (this.Nivel = document.getElementById("niveles").value);
  }
  
  verInstitucion() {
    return (this.Instituto = document.getElementById("institucion").value);
  }
  
  verTitulo() {
    return (this.Titulo = document.getElementById("titulo").value);
  }

  verCargo() {
    return (this.cargo = document.getElementById("cargo").value);
  }

  verDepartamento() {
    return (this.departamento = document.getElementById("departamento").value);
  }

  verJerarquia() {
    return (this.jerarquia = document.getElementById("jerarquia").value);
  }

  modificarSalario(nuevoSalario) {
    if (nuevoSalario > 0) {
      this.salario = nuevoSalario;
      document.getElementById("Edit_salario").innerText = nuevoSalario.toString();
    } else {
      alert("Salario inválido");
    }
  }

  calcularEdad() {
    const fechaNacimiento = new Date(this.fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

  calcularAntiguedad() {
    const fechaIngreso = new Date(this.fechaIngreso);
    const hoy = new Date();
    let antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();
    const mesActual = hoy.getMonth();
    const mesIngreso = fechaIngreso.getMonth();

    if (mesActual < mesIngreso || (mesActual === mesIngreso && hoy.getDate() < fechaIngreso.getDate())) {
      antiguedad--;
    }

    return antiguedad;
  }

  calcularPrestaciones() {
    const salario = parseFloat(this.salario);
    const antiguedad = this.calcularAntiguedad();

    // Cálculo de las prestaciones basado en una fórmula simple
    const prestaciones = (salario * antiguedad)/12; 

    return prestaciones.toFixed(1); 
  }

}
function obtenerDatosEmpleado() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const sexo = document.getElementById("sexo").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const fechaIngreso = document.getElementById("fechaIngreso").value;
  const salario = parseFloat(document.getElementById("Edit_salario").innerText);

  const empleado = new Empleado(nombre, apellido, sexo, fechaNacimiento, fechaIngreso, salario);
  return empleado;
}

function modificarSalario() {
  const nuevoSalario = parseFloat(prompt("Ingrese el nuevo salario"));
  const empleado = obtenerDatosEmpleado();
  empleado.modificarSalario(nuevoSalario) ;
}

function calcularEdad() {
  const empleado = obtenerDatosEmpleado();
  const edad = empleado.calcularEdad();
  document.getElementById("edad").value = edad.toString() + " Años";
}

function calcularAntiguedad() {
  const empleado = obtenerDatosEmpleado();
  const antiguedad = empleado.calcularAntiguedad();
  document.getElementById("antiguedad").value = antiguedad.toString() + " Años";
}

function calcularPrestaciones() {
  const empleado = obtenerDatosEmpleado();
  const prestaciones = empleado.calcularPrestaciones();
  document.getElementById("prestaciones").value = prestaciones.toString();
}

function Opcion1() {
  var op = document.getElementById("Estudios");
  if (op.style.display === "none") {
    op.style.display = "block";
  } else {
    op.style.display = "none";
  }
}

function mostrarInformacion() {
  var ver = document.getElementById("informacion");
  if (ver.style.display === "none") {
    ver.style.display = "block";
  } 

  let nom = document.getElementById("nombre").value;
  let apell = document.getElementById("apellido").value;
  let gen = document.getElementById("sexo").value;

  let niv = document.getElementById("niveles").value;
  let inst = document.getElementById("institucion").value;
  let tit = document.getElementById("titulo").value;

  if (
    nom == 0 ||
    apell == 0 ||
    gen == 0 ||
    niv == 0 ||
    inst.length == 0 ||
    tit.length == 0
  ) {
    alert("Existen campos vacios o erroneos, verifique");
  } else {
    let informacion = new Empleado();
    let nomb = informacion.verNombre();
    let ape = informacion.verApellido();
    let gene = informacion.verGenero();
    let nivel = informacion.verNivel();
    let institucion = informacion.verInstitucion();
    let titulo= informacion.verTitulo();
    document.getElementById("nomemple").innerHTML = nomb;
    document.getElementById("apellemple").innerHTML = ape;
    document.getElementById("genemple").innerHTML = gene;
    document.getElementById("nivelform").innerHTML = nivel;
    document.getElementById("instituc").innerHTML = institucion;
    document.getElementById("titu").innerHTML = titulo;
  }

}

function cerrar(){
  var cerr = document.getElementById("informacion");
  cerr.style.display = "none";
  var ceerr = document.getElementById("Estudios");
  ceerr.style.display = "none";

}





function Opcion2() {
  var op = document.getElementById("cargoemp");
  if (op.style.display === "none") {
    op.style.display = "block";
  } else {
    op.style.display = "none";
  }
}

function mostrarInformacion2() {
  var ver = document.getElementById("infocargo");
  if (ver.style.display === "none") {
    ver.style.display = "block";
  } 

  let nE = document.getElementById("nombre").value;
  let carg = document.getElementById("cargo").value;
  let dep = document.getElementById("departamento").value;
  let jer = document.getElementById("jerarquia").value;

  if (
    nE ==0 ||
    carg == 0 ||
    dep.length == 0 ||
    jer.length == 0
  ) {
    alert("Existen campos vacios o erroneos, verifique");
  } else {
    let infocargo = new Empleado();
    let noE = infocargo.verNombre();
    let cargoo = infocargo.verCargo();
    let departamentoo = infocargo.verDepartamento();
    let jerarquiaa = infocargo.verJerarquia();
    document.getElementById("nomE").innerHTML = noE;
    document.getElementById("cargoemple").innerHTML = cargoo;
    document.getElementById("depaemple").innerHTML = departamentoo;
    document.getElementById("jeraremple").innerHTML = jerarquiaa;
  }

}

function cerrar2(){
  var cerr = document.getElementById("infocargo");
  cerr.style.display = "none";
  var ceerr = document.getElementById("cargoemp");
  ceerr.style.display = "none";

}






