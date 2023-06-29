class Empleado {
  constructor(nombre, apellido, sexo, fechaNacimiento, fechaIngreso, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaIngreso = fechaIngreso;
    this.salario = salario;
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
  empleado.modificarSalario(nuevoSalario);
}

function calcularEdad() {
  const empleado = obtenerDatosEmpleado();
  const edad = empleado.calcularEdad();
  document.getElementById("edad").value = edad.toString();
}

function calcularAntiguedad() {
  const empleado = obtenerDatosEmpleado();
  const antiguedad = empleado.calcularAntiguedad();
  document.getElementById("antiguedad").value = antiguedad.toString();
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

  
  let niv = document.getElementById("niveles").value;
  let inst = document.getElementById("institucion").value;
  let tit = document.getElementById("titulo").value;

  if (
    niv == 0 ||
    inst.length == 0 ||
    tit.length == 0
  ) {
    alert("Existen campos vacios o erroneos, verifique");
  } else {
    let informacion = new Empleado();
    let nivel = informacion.verNivel();
    let institucion = informacion.verInstitucion();
    let titulo= informacion.verTitulo();
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







