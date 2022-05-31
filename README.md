# para empexar a crear un proyecto primero tienes que inicializar un archivo package.json

* npm init -y


se crea el archivo


despues en la terminal ejecutas este comando

* npm i tailwindcss postcss-cli autoprefixer @tailwindcss/jit

posteriormente configuras tus comando 
* "build:css": "postcss ./src/tailwind.css -o ./public/css/main.css",
    "build": "NODE_ENV=production postcss ./src/tailwind.css -o ./public/css/main.css"

y para que  funucione en windows 

# instalas este paquete
* npm i win-node-env


