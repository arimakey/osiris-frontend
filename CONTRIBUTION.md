# Guía de Contribución

¡Gracias por querer contribuir a este proyecto! Para mantener un historial de cambios claro y coherente, utilizamos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/). A continuación te explicamos cómo hacerlo.

## Requisitos para Contribuir

1. **Fork** este repositorio y crea una nueva rama (`git checkout -b feature/tu-nueva-funcionalidad`).
2. Asegúrate de que tus cambios pasen todas las pruebas existentes.
3. Asegúrate de que los commits sigan el formato de Conventional Commits.
4. Abre un **Pull Request** hacia la rama `main`.

## Formato de los Commits

Cada commit debe tener un título que siga el siguiente formato:


### Tipos de Commit

- **feat**: Se usa cuando se añade una nueva funcionalidad.
- **fix**: Se usa para corregir un error.
- **docs**: Se usa para cambios en la documentación.
- **style**: Cambios que no afectan la lógica del código (formateo, comas, etc.).
- **refactor**: Cambios en el código que no corrigen errores ni añaden funcionalidades, pero mejoran el rendimiento o la estructura.
- **test**: Añadir o corregir tests.
- **chore**: Cambios menores en tareas y mantenimiento del proyecto.

### Ejemplos de Commits Válidos

- `feat: añadir autenticación con OAuth2`
- `fix: corregir error en la validación de formularios`
- `docs: actualizar guía de instalación`
- `style: formatear código según las reglas de ESLint`
- `refactor: mejorar la legibilidad del código en el módulo de usuarios`

### Alcance Opcional

El alcance es un complemento opcional para indicar qué parte del código se ha modificado. Puede ser un módulo, componente, archivo, etc. Por ejemplo:

- `feat(api): añadir autenticación con OAuth2`
- `fix(login): corregir error en la validación de formularios`

## Realizando un Pull Request

1. Asegúrate de que tus cambios pasen todas las pruebas.
2. Verifica que tu código esté bien formateado.
3. Envía tu Pull Request con una descripción detallada de lo que has hecho y por qué.

Gracias por contribuir a nuestro proyecto. ¡Tus aportaciones son muy valiosas!
