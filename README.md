# Proyecto de Gestión de Alumnos

Este proyecto es una aplicación desarrollada en Angular que permite gestionar una lista de alumnos. Incluye funcionalidades como agregar, editar, eliminar y cambiar el estado de los alumnos (aprobado/desaprobado). Además, utiliza Angular Material para el diseño de la interfaz de usuario.

---

## **Características**

- **Agregar Alumnos**: Permite añadir nuevos alumnos a la lista.
- **Editar Alumnos**: Modifica los datos de un alumno existente.
- **Eliminar Alumnos**: Elimina un alumno de la lista.
- **Cambiar Estado**: Cambia el estado de un alumno entre "Aprobado" y "Desaprobado".
- **Interfaz moderna**: Utiliza Angular Material para un diseño limpio y profesional.

---

## **Tecnologías utilizadas**

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Angular Material**: Biblioteca de componentes para la interfaz de usuario.
- **TypeScript**: Lenguaje principal para la lógica de la aplicación.
- **SCSS/CSS**: Estilos personalizados para complementar Angular Material.

---

## **Estructura del proyecto**

```plaintext
src/
├── app/
│   ├── modulos/
│   │   ├── autentificacion/
│   │   │   ├── paginas/
│   │   │   │   ├── iniciar-sesion/
│   │   │   │   │   ├── iniciar-sesion.component.ts
│   │   │   │   │   ├── iniciar-sesion.module.ts
│   │   │   │   │   ├── iniciar-sesion-routing.module.ts
│   │   │   │   ├── registro/
│   │   │   │   │   ├── registro.component.ts
│   │   │   │   │   ├── registro.module.ts
│   │   │   │   │   ├── registro-routing.module.ts
│   │   │   ├── autentificacion.component.ts
│   │   │   ├── autentificacion.module.ts
│   │   │   ├── autentificacion-routing.module.ts
│   │   ├── panel/
│   │   │   ├── componentes/
│   │   │   │   ├── nav-menu/
│   │   │   │   │   ├── nav-menu.component.ts
│   │   │   │   ├── tabla-alumnos/
│   │   │   │   │   ├── tabla-alumnos.component.ts
│   │   │   ├── paginas/
│   │   │   │   ├── alumnos/
│   │   │   │   │   ├── paginas/
│   │   │   │   │   │   ├── detalles-alumnos/
│   │   │   │   │   │   │   ├── detalles-alumnos.component.ts
│   │   │   │   │   │   │   ├── detalles-alumnos.component.html
│   │   │   │   │   │   │   ├── detalles-alumnos.component.css
│   │   │   │   │   ├── alumnos.component.ts
│   │   │   │   │   ├── alumnos.module.ts
│   │   │   │   │   ├── alumnos-routing.module.ts
│   │   │   ├── panel.component.ts
│   │   │   ├── panel.module.ts
│   │   │   ├── panel-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
├── assets/
├── environments/
│   ├── environment.ts
│   ├── environment.prod.ts
```

---

## **Cómo ejecutar el proyecto**

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener instalado Node.js y Angular CLI.
3. Ejecuta `npm install` para instalar las dependencias.
4. Usa `ng serve` para iniciar el servidor de desarrollo.
5. Abre tu navegador y ve a `http://localhost:4200`.

---

## **Uso**

### **Agregar un alumno**

1. Completa el formulario con el nombre y apellido del alumno.
2. Haz clic en el botón "Agregar".
3. El alumno aparecerá en la tabla.

### **Editar un alumno**

1. Haz clic en el ícono de edición (lápiz) en la fila del alumno.
2. Modifica los datos en el formulario.
3. Haz clic en "Guardar" para actualizar los datos.

### **Eliminar un alumno**

1. Haz clic en el ícono de eliminar (basura) en la fila del alumno.
2. El alumno será eliminado de la lista.

### **Cambiar estado**

1. Haz clic en el ícono de estado (check o close) en la fila del alumno.
2. El estado cambiará entre "Aprobado" y "Desaprobado".

---

## **Componentes principales**

1. **Tabla de Alumnos (TablaAlumnosComponent)**

   - Muestra la lista de alumnos en una tabla.
   - Incluye acciones para editar, eliminar y cambiar el estado de los alumnos.

2. **Gestión de Alumnos (AlumnosComponent)**
   - Contiene el formulario para agregar y editar alumnos.
   - Maneja la lógica de la lista de alumnos.


---

## **Dependencias importantes**

- **Angular CLI**: ^15.2.0
- **Angular Material**: ^15.2.0
- **RxJS**: ^7.8.0

---

## **Contribuciones**

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b main
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía un pull request.

---

## **Contacto**

Si tienes preguntas o sugerencias, no dudes en contactarme:

- **Email**: DKVantonio@gmail.com
- **GitHub**: [DKVyotu](https://github.com/DKVyotu)
