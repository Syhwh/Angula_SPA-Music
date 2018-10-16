import { Injectable } from '@angular/core';

@Injectable()
export class MusiciansService {

private musicians: Musician [] = [
    {
        name: 'Wolfgang Amadeus Mozart',
        bio: 'Wolfgang Amadeus Mozart, baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the classical era. Born in Salzburg, Mozart showed prodigious ability from his earliest childhood.',
        img: 'assets/img/mozart.jpg',
        born: 'January 27, 1756' ,
        bornPlace: 'Getreidegasse, Salzburg, Austria',
        died: 'December 5, 1791' ,
        diedPlace: 'Vienna, Austria',
        quote: 'Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.'
      },
{
        name: 'Ludwig van Beethoven',
        bio: 'Ludwig van Beethoven was a German composer and pianist. A crucial figure in the transition between the Classical and Romantic eras in Classical music, he remains one of the most recognised and influential of all composers.',
        img: 'assets/img/beethoven.jpg',
        born: 'December 1770' ,
        bornPlace: 'Bonn, Germany',
        died: 'March 26, 1827',
        diedPlace: 'Vienna, Austria',
        quote: 'Music is a higher revelation than philosophy.'
        },
{
        name: 'Johann Sebastian Bach',
        bio: 'Johann Sebastian Bach was a German composer and musician of the Baroque period. He is known for instrumental compositions such as the Brandenburg Concertos and the Goldberg Variations as well as for vocal music such as the St Matthew Passion and the Mass in B minor.',
        img: 'assets/img/bach.jpg',
        born: 'March 31, 1685',
        bornPlace: 'Eisenach, Germany',
        died: 'July 28, 1750',
        diedPlace: 'Leipzig, Germany',
        quote: 'The aim and final end of all music should be none other than the glory of God and the refreshment of the soul.'
      },
{
        name: 'Frédéric François Chopin',
        bio: 'Frédéric François Chopin was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era, one whose poetic genius was based on a professional technique that was without equal in his generation.',
        img: 'assets/img/chopin.jpg' ,
        born: 'March 1, 1810',
        bornPlace: 'Duchy of Warsaw',
        died: 'October 17, 1849',
        diedPlace: 'Paris, France',
        quote: 'Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art.',
        // link: 'https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin'
      },
    ];



constructor() {
}

getMusicias( ) {
    return this.musicians;
}
}
export interface Musician {
    name: string;
    bio: string;
    img: string;
    born: string;
    bornPlace: string;
    died: string;
    diedPlace: string;
    quote: string;
  }
