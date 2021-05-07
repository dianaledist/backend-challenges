# Consigna:

<p>Sobre el proyecto que venimos realizando, renombrar el archivo del servidor server.js a server.es6.js. Generar así mismo, otro archivo de servidor llamado server.ts donde se utilice el lenguaje Typescript para tipar ese módulo.
</p>
<ul>
    <li>Instalar Babel y Typescript como dependencias de desarrollo y crear dos script en el package.json llamados ServerES6toJS5 y ServerTStoJS5, que permitan lanzar los procesos automáticos de conversiones respectivas sobre los archivo del servidor creados (server.es6.js y server.ts) a JS5. Los archivos de salida en ambos casos se llamarán server.js.</li>
    <li>Adecuar el proyecto y los módulos importados para permitir compatibilidades de importación y exportación (agregar flag ‘--esModuleInterop’ al comando tsc para prevenir errores!).</li>
    <li>Probar que el servidor funcione correctamente en ambos casos.</li>
</ul>

# Scripts
### npm run start => funciona el script traspilado de Typescript
### npm run startIndex => funciona el script traspilado de server.es6.js en server.js ubicado en carpeta dist

