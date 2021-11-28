import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FestividadesService {
private festividad:any[]=[
  {
    nombre:"Villa iluminada",
    imagen:"assets/img/Atlixco/fes2.jpg",
    lugar:"Atlixco, Puebla",
    fecha:"24/11 al 07/01",
    descripcion:"Del 24 de noviembre al 7 de enero , la Villa Iluminada de Atlixco hace brillar al pueblo con un esplendor único. En 2011, el gobierno propuso esta iniciativa que engalana un sector del pueblo con una original iluminación navideña.Con luces LED de colores, la gente que visite esta villa podrá ver impresionantes diseños que cubren calles completas y más de 3 mil figuras navideñas. Además habrá una Feria de la Nochebuena y una Villa Infantil que está dedicada a los niños. El reccorido total es de aproximadamente un kilómetro y medio de calles iluminadas que, con lo bello de este pueblo, dan un toque único al espíritu navideño"
  },
  {
    nombre:"Festival de la luz y la vida",
    imagen:"assets/img/Chignahuapan/fest.jpg",
    lugar:"Chignahuapan, Puebla",
    fecha:"02 de noviembre",
    descripcion:"Por la mañana la gente sale disfrazada a recorrer las calles principales, mientras un panteón simulado frente a la Parroquia de Santiago Apóstol sirve de atmósfera al espíritu sentido. En la tarde hay un espectáculo digno de verse, el Festival de la Luz y de la Vida. Más de mil antorchas a manera de ofrenda son repartidas y una lenta peregrinación avanza desde la parroquia, por la Calzada de las Almas, hasta la Laguna de Chignahuapan y el teatro junto a ella construido. Un ritual prehispánico, juegos de pirotecnia y la sensación de pertenencia animan el corazón de los presentes"
  }
]
  constructor() {   
  }
  getFestividad(){
    return this.festividad
} 
}