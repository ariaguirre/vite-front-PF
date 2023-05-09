const  timeStampToDate = ({ seconds, nanoseconds }) =>  {
  // Convertir la marca de tiempo en una fecha
  const date = new Date(seconds * 1000 + nanoseconds / 1000000);
  // Formatear la fecha en un string legible para humanos
    const formattedDateTime = date.toLocaleString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  // Renderizar el string formateado en un componente de React
  return formattedDateTime;
}

export default timeStampToDate;
