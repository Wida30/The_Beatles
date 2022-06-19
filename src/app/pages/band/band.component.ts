import { bandaInterface } from 'src/app/interface/banda.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  public banda1: bandaInterface;
  public banda2: bandaInterface;
  public banda3: bandaInterface;
  public banda4: bandaInterface

  constructor() { 

    this.banda1 = {

      nombre: "John Lennon",
      img: "https://cdn-icons-png.flaticon.com/512/873/873452.png",
      vida: "Liverpool, 9 de octubre de 1940 - Nueva York, 8 de diciembre de 1980",
      resumen: "La biografía de John Lennon cuenta que con apenas quince años se unió a unos amigos llamados Ivan Vaughan, Eric Griffiths, Pete Shotton, Len Garry, Colin Hanton y Rod Davis. Juntos montaron un grupo llamado <<The Quarrymen>>, con el que tocaban en fiestas de su barrio. En este pequeño grupo Lennon cantaba y tocaba la guitarra. Interpretaban temas de grupos británicos de la época y versiones que hacían de otros artistas. John Winston Lennon fue un artista, músico, multinstrumentista, cantautor, compositor, productor, escritor y pacifista británico, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles. Nació en Liverpool, donde siendo adolescente se vio inmerso en el boom británico del skiffle; formó la banda The Quarrymen en 1956, que posteriormente en 1960 se convertiría en The Beatles. Cuando el grupo se desintegró a finales de esa década, Lennon inició una carrera como solista en la que publicó varios álbumes como John Lennon/Plastic Ono Band e Imagine, y canciones como «Give Peace a Chance» e «Imagine»; la mayoría de ellas expresan sus ideas liberales y pacifistas. Después de contraer matrimonio con Yoko Ono en 1969 cambió su nombre a John Ono Lennon. Se retiró de la escena musical en 1975 para criar a su pequeño hijo Sean, pero resurgió junto con Ono en 1980 con el nuevo álbum Double Fantasy. Fue asesinado tres semanas después de su lanzamiento.1.",
      foto: "https://www.todomusica.org/imagenes/680x380/john_lennon.jpg"

    }
    this.banda2 = {

      nombre: "Paul McCartney", 
      img: "https://cdn-icons-png.flaticon.com/512/3791/3791405.png",
      vida: "Liverpool, 19 de junio de 1942",
      resumen: "Desde pequeño, su padre le inculcó el gusto por la música. Inicialmente Paul McCartney comenzó tocando la trompeta, pero posteriormente cambió a la guitarra acústica. A McCartney, al principio le costaba tocar con la mano izquierda (pues es zurdo), pero motivado al ver que el músico Slim Whitman también era zurdo, persistió en su intento. Una vez que ya había dominado la técnica de la guitarra, escribe su primera canción: <<I Lost My Little Gir>>.A la edad de 11 años conoció a George Harrison en el Instituto Liverpool y a los 15 a John Lennon. Junto a Lennon empiezan a componer temas y forman un grupo. Al poco tiempo convence a Lennon para integrar a Harrison en la banda, e ingresa como primera guitarra. Paralelamente se incorpora un bajista amigo de John llamado Stuart Sutcliffe, y así forman la banda <<Quarrymen>>, la que posteriormente se llamaría <<The Silver Beetles>>. No es hasta Mayo de 1960 cuando adoptan el famoso nombre de The Beatles. Al poco tiempo se asocian con el productor Allan Williams, quien los lleva a tocar al bar <<Indra>> en Hamburgo, Alemania. Poco tiempo después tocan en el <<Top Ten Club>>, y en el Club <<Cavern>>. Hasta entonces sólo tocaban versiones de canciones conocidas de otros artistas. Por ello, Paul McCartney le propone a Lennon presentar sus canciones originales. Ocupa el undécimo puesto de los 100 Grandes Cantantes, de la revista Rolling Stone.Además, como miembro de The Beatles, ocupa el primer puesto de las listas de 100 Grandes Artistas, de la misma publicación. Asimismo, ocupa el tercer puesto de los 100 mejores bajistas de la misma revista. También figura en el segundo puesto de los 100 Grandes Compositores de la mencionada publicación, solo superado por Bob Dylan.",
      foto: "https://www.todomusica.org/imagenes/680x380/paul_mccartney.jpg"
    }

    this.banda3 = {

      nombre: "George Harrison",
      img: "https://cdn-icons-png.flaticon.com/512/1913/1913288.png",
      vida: "Liverpool, 25 de febrero2 de 1943-Los Ángeles, 29 de noviembre de 2001",
      resumen: "A la edad de 14 años, Paul McCartney (a quien había conocido en la escuela) le presenta a John Lennon. Tanto Paul como John le proponen ser el guitarrista de una nueva agrupación bajo el nombre de <<The Quarrymen>>, cuyo nombre cambió más tarde a <<The Silver Beatles>> y finalmente terminaron por ser simplemente <<The Beatles>>. Las influencias musicales más tempranas de Harrison incluyeron músicos como Big Bill Broonzy, Chet Atkins, Chuck Berry, Ry Cooder y Buddy Holly. En 1965, fue pionero en introducir música hindú en occidente a través de instrumentos como el sitar, que tocó en canciones como «Norwegian Wood (This Bird Has Flown)» y «Within You Without You». Harrison tuvo también un especial interés por la cultura y religión hindú a través del movimiento Hare Krishna e introdujo a sus compañeros de The Beatles a la filosofía oriental a través del maharishi Mahesh Yogi, determinante en la evolución musical del grupo desde la grabación de The White Album (1968).Tras la disolución de The Beatles, Harrison publicó All Things Must Pass (1970), el primer álbum de un beatle en solitario que alcanzó el primer puesto en la lista Billboard 200. Harrison contrajo matrimonio en dos ocasiones: con Pattie Boyd, de quien se divorció en 1977, y con Olivia Trinidad Arias, con quien tuvo su primer y único hijo, Dhani. En noviembre de 2001, Harrison falleció a los 58 años tras sufrir un cáncer de pulmón, y sus cenizas fueron esparcidas en una ceremonia privada en los ríos Ganges y Yamuna.",
      
      foto: "https://www.todomusica.org/imagenes/680x380/george_harrison.jpg"

    }
    
    this.banda4 = {

      nombre: "Ringo Star",
      img: "https://cdn-icons.flaticon.com/png/512/3943/premium/3943012.png?token=exp=1655314511~hmac=ae4086fedf729b870740dd74291c040c",
      vida: "7 de julio de 1940 (81 años) Liverpool, Inglaterra,Reino Unido",
      resumen: "El cantante y compositor Richard Starkey, es conocido internacionalmente por el nombre de <<Ringo Starr>>.Ringo estuvo ingresado en el hospital cuando era pequeño, debido a una peritonitis, y allí comenzaría a aprender a tocar el tambor. Poco tiempo después, le regalaron una batería, con la que aumentó su vocaciòn por la música y formó parte de diversos grupos tocándola. Uno de ellos fue el grupo <<Rory Storm & The Hurricanes>>, el cual tuvo mucho éxito en los años 50 y durante los 60. Fue en este grupo en el que el joven Richard decidió cambiar su nombre artístico por el de <<Ringo Starr>>. Con este grupo, Ringo llevó a cabo un gran número de conciertos, en uno de los cuales coincidió con el grupo <<The Beatles>>, más concretamente en Alemanía, empezando a partir de entonces a sustituir de manera eventual al batería de dicho grupo, que se llamaba <<Pete Best>>. En el año 1962, John Lennon le preguntó a Ringo si deseaba unirse de manera definitiva a <<The Beatles>>, a lo que el batería conestó afirmativamente. Ese mismo año, Starr realizó su primera sesión de grabación con el legendario grupo, la cual era para el sencillo <<Love Me Do>>, en que tocaría tan sólo las maracas y la pandereta, aunque realmente era una prueba para saber hasta dónde podían llegar las aptitudes de Ringo. Cabe comentar que el éxito de Starr fue tan enorme que algunos cantantes escribirierón y cantaron canciones referidas a su persona, como es el caso de la canción de Penny Valentine <<I Want to Kiss Ringo Goodbye>> y la de Rolf Harris , que llevaba el título de <<Ringo for President>>.  En el año 2011, y con 70 años a sus espaldas, Ringo decidió visitar por primera vez Latinoamerica, donde realizó diversos conciertos. Este mismo año 2011 la revista especialista de música <<Rolling Stone>>, clasificó a Ringo Starr entre los 5 baterías mejores de todos los tiempos. Un año más tarde se publicó el álbum <<Ringo 2012>>, con el que el cantante y su banda, realizaron una gran gira mundial, durante la cual visitaron todos los continentes del globo, finalizando en el año 2013.",
      foto: "https://www.todomusica.org/imagenes/680x380/ringo_starr.jpg"

    }

  
  }

  ngOnInit(): void {
  }

}
