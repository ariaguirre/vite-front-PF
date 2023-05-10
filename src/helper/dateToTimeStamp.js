function MyComponent() {
  // Obtener la fecha actual como un objeto Date
  const now = new Date();
  
  // Obtener el número de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC
  const seconds = Math.floor(now.getTime() / 1000);
  
  // Obtener el número de milisegundos adicionales
  const milliseconds = now.getMilliseconds();
  
  // Convertir los milisegundos en nanosegundos
  const nanoseconds = milliseconds * 1000000;
  
  // Crear un objeto con la estructura {seconds: ..., nanoseconds: ...}
  const timestamp = { seconds, nanoseconds };

  
  return (
    timestamp
  );
}

export default MyComponent;
