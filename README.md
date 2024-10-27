# Apache mod_proxy_balancer + Artillery

## Inicio del Proyecto

Para poner en marcha este entorno de balanceo de carga, simplemente sigue estos pasos:

1. Ejecuta el comando `vagrant up` desde la raíz del proyecto. Esto configurará automáticamente:
   - **2 servidores web**
   - **1 servidor de balanceo de carga**

## Acceso a la Aplicación

El balanceador de carga estará disponible en la IP `192.168.60.30` y el puerto `80`. Para ver la aplicación en funcionamiento, abre tu navegador y visita:

[http://192.168.60.30](http://192.168.60.30)

## Agregar Más Servidores Web

Si necesitas aumentar la capacidad del sistema, puedes añadir más servidores web siguiendo estos pasos:

1. Edita el archivo **Vagrantfile** para definir la nueva configuración del servidor.
2. Incluye la IP del nuevo servidor en el archivo `lb-config/load-balancer.conf`.
3. Si el balanceador está apagado, ejecuta `vagrant up`. Si está activo, utiliza `vagrant reload loadBalancer` para que reconozca los nuevos cambios.
