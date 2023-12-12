import { Injectable, numberAttribute } from '@angular/core';
import { Categoria } from './categoria';
import { Router } from '@angular/router';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class DatosProyService {

  constructor(private router: Router) { };
  busqueda = "";
  vecBusKnow:Producto[] =[];
  vecBusqueda: Producto[] = [
    {
      nombre:"Bide",
      precio: 1200,
      categoria:"Electronica",
      imagenUrl:"https://m.media-amazon.com/images/I/61r2kUZCLkL._AC_UF894,1000_QL80_.jpg"
    },

    {
      nombre:"Alarma Seguridad",
      precio: 125,
      categoria:"Electronica",
      imagenUrl:"https://hikvision.lat/img/alarma/alarma-hikvision-psp-1.jpg"
    },

    {
      nombre:"Camara Seguridad",
      precio: 69,
      categoria:"Seguridad",
      imagenUrl:"https://www.securame.com/images/100x100/ds-2cd2023g0.jpg"
    },

    {
      nombre:"Cerraduras Digitales",
      precio: 2718,
      categoria:"Electronica",
      imagenUrl:"https://cdn.tvc.mx/media/1623/CDL210PR-PPAL.jpg"
    },

    {
      nombre:"Deshidratador de Alimentos",
      precio: 15772,
      categoria:"Electronica",
      imagenUrl:"https://www.vidaxl.es/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dwa83ee6c9/hi-res/536/638/730/743/50301/image_2_50301.jpg"
    },

    {
      nombre:"Dell Inspiron 15",
      precio:1000,
      categoria:"Electronica",
      imagenUrl:"https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/inspiron/15-3520-non-touch/in3520nt-cnb-00060rb055-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4396&hei=3212&qlt=100,1&resMode=sharp2&size=4396,3212&chrss=full&imwidth=5000"
    },

    {
      nombre:"Celular",
      precio: 3108,
      categoria:"Electronica",
      imagenUrl:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/e/0/e06674-pocophone-xiaomi-santa-cruz_1.jpg"
    },

    {
      nombre:"Television",
      precio: 2999,
      categoria:"Electronica",
      imagenUrl:"https://camsabo.vtexassets.com/arquivos/ids/160482-800-auto?v=637917634926430000&width=800&height=auto&aspect=true"
    },

    {
      nombre:"Video Portero",
      precio: 828,
      categoria:"Electronica",
      imagenUrl:"https://cdn.shopify.com/s/files/1/0588/1380/8845/products/Bf7OwXqbwU_large.jpg?v=1671822334"
    },
    {
      "nombre": "Video Portero",
      "precio": 249.99,
      "categoria": "Seguridad",
      imagenUrl:"https://cdn.shopify.com/s/files/1/0588/1380/8845/products/Bf7OwXqbwU_large.jpg?v=1671822334"
    },
  
  {
      "nombre": "Alarma de Seguridad",
      "precio": 129.99,
      "categoria": "Seguridad",
      imagenUrl:"https://hikvision.lat/img/alarma/alarma-hikvision-psp-1.jpg"
    },
  
  {
      "nombre": "Cámara de Seguridad",
      "precio": 149.99,
      "categoria": "Seguridad",
      imagenUrl:"https://www.securame.com/images/100x100/ds-2cd2023g0.jpg"
    },
  {
      "nombre": "Cerraduras Digitales",
      "precio": 89.99,
      "categoria": "Seguridad",
      imagenUrl:"https://cdn.tvc.mx/media/1623/CDL210PR-PPAL.jpg"
    }
  ,
  {
     "nombre": "Disco Duro Externo 1TB",
     "precio": 39.99,
     "categoria": "Almacenamiento",
     imagenUrl: "https://app.compucenter.store/products/toshiba-canvio-basics-1tb.jpg"
  }
  ,
  {
     "nombre": "Tarjeta de Memoria 128GB",
     "precio": 49.99,
     "categoria": "Dispositivos de Almacenamiento",
     imagenUrl: "https://www.puntoit-bo.com/web/image/product.template/3074/image"
  }
  ,
  
  {
     "nombre": "Unidad Flash USB 64GB",
     "precio": 24.99,
     "categoria": "Dispositivos de Almacenamiento",
     imagenUrl: "https://oechsle.vteximg.com.br/arquivos/ids/15787260-1000-1000/image-e193677ccc4b4ce6973a27a7a5620e1c.jpg?v=638280987369670000"
  }
  
  ,
  {
     "nombre": "Enchufe Inteligente",
     "precio": 79.99,
     "categoria": "Automatización del Hogar",
     imagenUrl: "https://i.blogs.es/a89f08/enchufe-inteligente/450_1000.jpg"
  }
  ,
  {
     "nombre": "Alexa",
     "precio": 79.99,
     "categoria": "Automatización del Hogar",
     imagenUrl: "https://static.independent.co.uk/2023/08/23/13/image%20%2812%29.png"
  }
  ,
  {
     "nombre": "Bidé",
     "precio": 1200,
     "categoria": "Automatización del Hogar",
     imagenUrl: "https://m.media-amazon.com/images/I/61r2kUZCLkL._AC_UF894,1000_QL80_.jpg"
  }
  ,
  {
     "nombre": "Amplificador de Señal WiFi",
     "precio": 69.99,
     "categoria": "Redes y Conectividad",
     imagenUrl: "https://falabella.scene7.com/is/image/Falabella/gsc_116270701_1424818_1?wid=800&hei=800&qlt=70"
  }
  ,
  {
     "nombre": "Switch Ethernet Gigabit",
     "precio": 134.99,
     "categoria": "Redes y Conectividad",
     imagenUrl: "https://www.redeszone.net/app/uploads-redeszone.net/2019/07/d-link-dgs-108.jpg?x=480&quality=40"
  }
  ,
  {
     "nombre": "Refrigerador Inteligente",
     "precio": 999.99,
     "categoria": "Electrodomésticos Inteligentes",
     imagenUrl: "https://i.blogs.es/d7fc06/2018-family-hub-refrigerator-3/1366_2000.jpg"
  }
  ,
  {
     "nombre": "Lavadora",
     "precio": 549.99,
     "categoria": "Electrodomésticos Inteligentes",
     imagenUrl: "https://www.lg.com/es/images/lavado-y-secado/md07563325/gallery/medium01.jpg"
  }
  ,
  {
     "nombre": "Horno Smart con Control Remoto",
     "precio": 299.99,
     "categoria": "Electrodomésticos Inteligentes",
     imagenUrl: "https://m.media-amazon.com/images/I/71xDptILO3L._AC_UF894,1000_QL80_.jpg"
  }
  ,
  {
     "nombre": "Dell Inspiron 15",
     "precio": 1000,
     "categoria": "Portátiles",
     imagenUrl: "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/inspiron/15-3520-non-touch/in3520nt-cnb-00060rb055-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4396&hei=3212&qlt=100,1&resMode=sharp2&size=4396,3212&chrss=full&imwidth=5000"
  }
  ,
  {
     "nombre": "Tablet",
     "precio": 649.99,
     "categoria": "Portátiles",
     imagenUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683820010-71fKxd1tnwL.jpg?crop=1xw:1xh;center,top&resize=980:*"
  }
  ,
  {
     "nombre": "Celular",
     "precio": 3108,
     "categoria": "Portátiles",
     imagenUrl: "https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/e/0/e06674-pocophone-xiaomi-santa-cruz_1.jpg"
  }
  ,
  {
     "nombre": "Consola de Videojuegos",
     "precio": 499.99,
     "categoria": "Entretenimiento",
     imagenUrl: "https://dcmallio.vtexassets.com/arquivos/ids/271342941/38765432.jpg?v=637920241053030000"
  }
  ,
  {
     "nombre": "Televisión",
     "precio": 2999,
     "categoria": "Entretenimiento",
     imagenUrl: "https://camsabo.vtexassets.com/arquivos/ids/160482-800-auto?v=637917634926430000&width=800&height=auto&aspect=true"
  }
  ,
  {
     "nombre": "Proyector",
     "precio": 349.99,
     "categoria": "Entretenimiento",
     imagenUrl: "https://mediaserver.goepson.com/ImConvServlet/imconv/2fdc245958e40ecd3136a286e89250db9dce1eaf/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=hc760_hero_690x460"
  }
  ,
  {
     "nombre": "Auriculares Inalámbricos",
     "precio": 149.99,
     "categoria": "Audio y Video",
     imagenUrl: "https://radioshackbo.com/wp-content/uploads/2023/07/S2IVW-N740-330x330.png"
  }
  ,
  {
     "nombre": "Barra de Sonido Dolby Atmos",
     "precio": 249.99,
     "categoria": "Audio y Video",
     imagenUrl: "https://i.blogs.es/1ab621/jblap/450_1000.jpg"
  }
  ,
  {
     "nombre": "Cámara de Acción 4K",
     "precio": 179.99,
     "categoria": "Audio y Video",
     imagenUrl: "https://oechsle.vteximg.com.br/arquivos/ids/5397479-1000-1000/image-eb5b8ff49a6a40d082e3784747f616f4.jpg?v=637698425298300000"
  }
  ,
  {
     "nombre": "Báscula",
     "precio": 79.99,
     "categoria": "Salud y Bienestar",
     imagenUrl: "https://m.media-amazon.com/images/I/618TCvYXHWL.jpg"
  }
  ,
  {
     "nombre": "Reloj Deportivo",
     "precio": 129.99,
     "categoria": "Salud y Bienestar",
     imagenUrl: "https://i.blogs.es/5baf81/fen/450_1000.jpg"
  }
  ,
  {
     "nombre": "Masajeador Eléctrico para Cuello y Espalda",
     "precio": 59.99,
     "categoria": "Salud y Bienestar",
     imagenUrl: "https://falabella.scene7.com/is/image/Falabella/gsc_114176368_915111_1?wid=800&hei=800&qlt=70"
  }
  ,
  {
     "nombre": "Impresora 3D de Alta Resolución",
     "precio": 499.99,
     "categoria": "Tecnología de Impresión 3D",
     imagenUrl: "https://www.impresoras3d.com/wp-content/uploads/2018/01/eWUaJXnZjzGEvTRjtsqF7N-650-80.jpg"
  }
  ,
  {
     "nombre": "Teclado Mecánico",
     "precio": 99.99,
     "categoria": "Accesorios de Gaming",
     imagenUrl: "https://mvelectronica.s3.us-east-2.amazonaws.com/productos/KB-810/603915b65b073.webp"
  }
  ,
  {
     "nombre": "Mouse Inalámbrico",
     "precio": 79.99,
     "categoria": "Accesorios de Gaming",
     imagenUrl: "https://prophonechile.cl/wp-content/uploads/2021/08/cw905-inalambrico.png"
  }
  ,
  {
     "nombre": "Silla Gamer",
     "precio": 249.99,
     "categoria": "Accesorios de Gaming",
     imagenUrl: "https://cdn.shopify.com/s/files/1/0775/8148/4341/files/raven-rojo.jpg?height=645&pad_color=fff&v=1686772455&width=645"
  }
  ,
  {
     "nombre": "Cámara DSLR",
     "precio": 999.99,
     "categoria": "Equipos de Fotografía",
     imagenUrl: "https://www.blogdelfotografo.com/wp-content/uploads/2021/03/nikon_d3500.webp"
  }
  ,
  {
     "nombre": "Tripode",
     "precio": 129.99,
     "categoria": "Equipos de Fotografía",
     "imagenUrl": "https://m.media-amazon.com/images/I/71KepZfTMHL.jpg"
  }
  ,
  {
     "nombre": "Kit de Iluminación LED",
     "precio": 179.99,
     "categoria": "Equipos de Fotografía",
     "imagenUrl": "https://www.blogdelfotografo.com/wp-content/uploads/2014/09/61z045ZPixL._SL1001_.jpg"
  }
  ,
  {
     "nombre": "Bidé",
     "precio": 1200,
     "categoria": "Electronica",
     "imagenUrl": "https://m.media-amazon.com/images/I/61r2kUZCLkL._AC_UF894,1000_QL80_.jpg"
  }
  ,
  {
     "nombre": "Deshidratador de Alimentos",
     "precio": 15772,
     "categoria": "Electronica",
     "imagenUrl": "https://www.vidaxl.es/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dwa83ee6c9/hi-res/536/638/730/743/50301/image_2_50301.jpg"
  }
  ];
  
  vecCategorias: Categoria[] = [
    {nombre: "Seguridad", catV: ["Cámaras de seguridad", "Alarmas", "Cerraduras inteligentes", "Sensores de movimiento", "Sistemas de vigilancia", "Cajas fuertes", "Detectores de humo", "Sistemas de control de acceso", "Videoporteros", "Luces de seguridad", "Sirenas de alarma", "Sensores de puertas y ventanas", "Sistemas de seguridad para el hogar"]},
    {nombre: "Dispositivos de Almacenamiento", catV: ["Discos duros externos", "Discos duros internos", "SSDs", "Tarjetas de memoria", "Unidades flash USB", "Unidades de estado sólido portátiles", "Unidades de cinta", "Servidores NAS", "Unidades de disco óptico", "Cajas para discos duros", "Estaciones de acoplamiento para discos duros", "Lectores de tarjetas", "Almacenamiento en red"]},
    {nombre: "Automatización del Hogar", catV: ["Asistentes virtuales", "Bombillas inteligentes", "Enchufes inteligentes", "Termostatos inteligentes", "Cerraduras inteligentes", "Cámaras de seguridad inteligentes", "Altavoces inteligentes", "Interruptores de luz inteligentes", "Robots aspiradores", "Estaciones meteorológicas inteligentes", "Riego inteligente", "Campanas de video inteligentes", "Sistemas de seguridad para el hogar"]},
    {nombre: "Redes y Conectividad", catV: ["Routers", "Switches", "Cables de red", "Tarjetas de red", "Adaptadores de red", "Antenas", "Extensor de rango", "Puntos de acceso", "Módems", "Firewalls", "Servidores", "NAS", "Racks"]},
    {nombre: "Electrodomésticos Inteligentes", catV: ["Refrigeradores inteligentes", "Lavadoras inteligentes", "Aires acondicionados inteligentes", "Aspiradoras inteligentes", "Microondas inteligentes", "Hornos inteligentes", "Cafeteras inteligentes", "Licuadoras inteligentes", "Tostadoras inteligentes", "Batidoras inteligentes", "Planchas inteligentes", "Secadoras inteligentes", "Lavavajillas inteligentes"]},
    {nombre: "Portátiles", catV: ["Laptops", "Notebooks", "MacBooks", "Chromebooks", "Ultrabooks", "Netbooks", "Workstations", "PCs de gaming", "Laptops 2 en 1", "Laptops para estudiantes", "Laptops para negocios", "Laptops para diseño gráfico", "Laptops para programación"]},
    {nombre: "Entretenimiento", catV: ["Televisores", "Proyectores", "Sistemas de cine en casa", "Consolas de videojuegos", "Juegos de video", "Reproductores de Blu-ray", "Reproductores de DVD", "Reproductores de música", "Libros electrónicos", "Tabletas para dibujo", "Drones", "Robots de entretenimiento", "Juguetes electrónicos"]},
    {nombre: "Audio y Video", catV: ["Altavoces", "Auriculares", "Sistemas de sonido", "Reproductores MP3", "Radios", "Grabadoras de voz", "Micrófonos", "Amplificadores", "Mezcladores de DJ", "Tocadiscos", "Reproductores de CD", "Reproductores de cassette", "Altavoces de estantería"]},
    {nombre: "Salud y Bienestar", catV: ["Monitores de actividad", "Básculas inteligentes", "Monitores de ritmo cardíaco", "Monitores de sueño", "Monitores de oxígeno en sangre", "Monitores de presión arterial", "Monitores de glucosa", "Monitores de temperatura corporal", "Monitores de hidratación", "Rastreadores de fitness", "Relojes inteligentes", "Pulseras de actividad", "Cámaras de luz infrarroja"]},
    {nombre: "Tecnología de Impresión 3D", catV: ["Impresoras 3D", "Filamentos para impresoras 3D", "Resinas para impresoras 3D", "Piezas y accesorios para impresoras 3D", "Software para impresoras 3D", "Escáneres 3D", "Servicios de impresión 3D", "Cursos de impresión 3D", "Libros de impresión 3D", "Proyectos de impresión 3D", "Modelos para impresión 3D", "Materiales para impresión 3D", "Kits de impresoras 3D"]},
    {nombre: "Accesorios de Gaming", catV: ["Controles", "Auriculares para juegos", "Teclados para juegos", "Ratones para juegos", "Alfombrillas de ratón para juegos", "Sillas de juegos", "Mesas de juegos", "Luces de ambiente", "Cámaras para transmisión", "Micrófonos para transmisión", "Capturadoras de video", "Monitores para juegos", "Gafas de realidad virtual"]},
    {nombre: "Equipos de Fotografía", catV: ["Cámaras digitales", "Cámaras réflex", "Cámaras mirrorless", "Cámaras compactas", "Cámaras instantáneas", "Cámaras de acción", "Lentes", "Trípodes", "Flashes", "Filtros", "Bolsas y estuches", "Tarjetas de memoria", "Baterías"]}
  ]
  

  swBus: boolean = true;
  Asignar(datBus: string) {
    // Realiza las operaciones necesarias con la información introducida
    if(datBus == ''){
      this.swBus = false
    }
    this.busqueda = '';
    this.busqueda = datBus;
    // Redirecciona a la página deseada
  }
  

  // swiych por si no hay algun producto
  swNoBus: boolean=false;
  // Metodo para organizar las busquedas
  AplicarBus(dato:string){
    let cont =0
    for (let index = 0; index < this.vecBusqueda.length; index++) {
        if(dato == this.vecBusqueda[index].categoria){
          this.vecBusKnow.push(this.vecBusqueda[index]);
          cont++;
        }
    }
    if (cont == 0) {
      this.swNoBus = true;
    }
  }
}
